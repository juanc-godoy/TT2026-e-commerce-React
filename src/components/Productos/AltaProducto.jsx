import { useState, useEffect } from "react";
import { FormularioProducto } from "../FormularioProducto/FormularioProducto"
import { db } from "../../firebase/config.js"
import { collection,addDoc, updateDoc, doc } from "firebase/firestore";

const estadoInicialForm = {
        nombre: "",
        categoria:"",
        precio: 0,
        stock: 0,
        imagenUrl: ""
        };

export function AltaProducto({esEdicion,setEsEdicion,itemAEditar,setItemAEditar, modal, setModal}){
    const [datosForm, setDatosForm]= useState(estadoInicialForm)
    const [imagenFile ,setImagenFile]=useState(null)
    const [loading, setLoading]=useState(false)

    useEffect(()=> {
        if (esEdicion&&itemAEditar){
            setDatosForm(itemAEditar)
        }
    },[esEdicion,itemAEditar])

    const manejarCambio= (evento)=>{
    const {name, value}= evento.target
    setDatosForm({
        ...datosForm, [name]:value
    })
    }

    const manejarCambioImagen= (evento)=>{
        const archivo=evento.target.files[0]
        setImagenFile(archivo)
    }

    /*
    const subirImagenAImgbb= async(archivo)=>{
        const formData= new FormData()
        formData.append("imagen",archivo)
        const apiKey= import.meta.env.VITE_API_KEY
        try{
            console.log("Subiendo imagen a Imgbb...")
            const respuestaImgbb= await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`,{
                method: "POST",
                 body: formData,
                })
            const datosImgbb= await respuestaImgbb.json()
                if (datosImgbb.success){
                    return datosImgbb.data.url
                } else {
                    throw new Error('Fallo al subir la imagen a Imgbb.')
                }
        }
        catch (error){
            console.error("Error en el proceso de envío:", error)
            alert("Error al subir la imagen. Por favor, intentá de nuevo.")
            return
        }
        finally{
            console.log("llegamos al finally")
        } 
    }//fin funcion
    */
    const cancelarEdicion= () => {
        setEsEdicion(false)
        setModal(false)
    }

    const manejarEnvio= async(evento)=>{
            setLoading(true)
            evento.preventDefault()
            if (!imagenFile){
                alert("Adjunta una imagen para continuar")
                setLoading(false)
                return
            }else{//PRUEBA SALTEAR IMGBB/Freeimage.host
                /* let imagen = datosForm.imagenUrl || "";
                const formData = new FormData();
                formData.append("source", imagenFile);
                formData.append("key", import.meta.env.VITE_API_KEY);
                formData.append("format", "json");

                try {
                    console.log("Subiendo imagen a Freeimage.host...");
                    const respuestaAPI = await fetch("https://freeimage.host/api/1/upload", {
                        method: "POST",
                        body: formData,
                        });

                    const datosRespuesta = await respuestaAPI.json();

                    if (!respuestaAPI.ok || datosRespuesta.status_code !== 200) {
                        throw new Error('La subida de la imagen a Freeimage.host falló.');
                        }
                    imagen = datosRespuesta.image.url;
                } catch (error) {
                    console.error("Error en el proceso de envío:", error);
                    alert("Error al subir la imagen. Por favor, intentá de nuevo.");
                    return;
                } finally {
                    setLoading(false);
                    } */
                
                let imagen="...URL PENDIENTE..."
                //const productoFinal={...datosForm, imagenUrl: imagen}
                console.log("antes normalizar", datosForm)
                const productoFinal = {
                    //...datosForm,
                    nombre: datosForm.nombre,
                    precio: Number(datosForm.precio),
                    stock: Number(datosForm.stock),
                    categoria: datosForm.categoria.trim().toLowerCase(),
                    imagenUrl: imagen
                    };
                
                console.log("dsps normalizar",productoFinal)
                try{
                    if (itemAEditar){
                        const docRef=doc(db,"productos nacionales",itemAEditar.id)
                        await updateDoc(docRef, productoFinal)
                        alert("Producto actualizado exitosamente")
                    } else {
                        const productCollection=collection(db,"productos nacionales")
                        await addDoc(productCollection, productoFinal)
                        alert("Producto guardado exitosamente")
                    }
                }
                catch (error){
                    console.error("Error:", error);
                }
                finally{
                    setLoading(false)
                }
            }//aqui finalizaBA el if(imagenfile)
    }
    return (
        <FormularioProducto
        datosForm={datosForm}
        manejarCambio={manejarCambio}
        manejarEnvio={manejarEnvio}
        manejarCambioImagen={manejarCambioImagen}
        loading={loading}
        cancelarEdicion={cancelarEdicion}
        esEdicion={esEdicion}
        itemAEditar={itemAEditar}
        //setItemAEditar={setItemAEditar}
        />
        )
}
export default AltaProducto