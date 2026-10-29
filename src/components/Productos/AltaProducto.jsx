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

export function AltaProducto(esEdicion,setEsEdicion,itemAEditar,setItemAEditar, modal, setmodal){
    const [datosForm, setDatosForm]= useState(estadoInicialForm)
    const [imagenFile ,setImagenFile]=useState(null)
    const [loading, setLoading]=useState(false)

    useEffect(()=> {
        if (itemAEditar){
            setDatosForm(itemAEditar)
        }
    },[itemAEditar])

    const manejarCambio= (evento)=>{
    const {name, value}= evento.target
    setDatosForm({
        ...datosForm, [name]:value
    })
    }

    const manejarCambioImagen= (evento)=>{
        setImagenFile(evento.target.files[0])
    }

    const cancelarEdicion= () => {
        setmodal(false)
        console.log(modal)
    }

    const manejarEnvio= async(evento)=>{
            setLoading(true)
            evento.preventDefault()
            let image = datosForm.imagen||datosForm.urlImagen;
            if (imagenFile){
                const formData= new FormData()
                formData.append("imagenUrl",imagenFile)
                const apiKey= import.meta.env.VITE_API_KEY
                try{
                    console.log("Subiendo imagen a Imgbb...")
                    const respuestaImgbb= await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`,{
                        method: "POST",
                        body: formData,
                    })
                    const datosImgbb= await respuestaImgbb.json()
                    if (datosImgbb.success){
                        image=datosImgbb.data.url
                    } else {
                        throw new Error('La subida de la imagen a Imgbb falló.')
                    }
                }
                catch (error){
                    console.error("Error en el proceso de envío:", error)
                    alert("Error al subir la imagen. Por favor, intentá de nuevo.")
                    return
                    }
                finally{
                    setLoading(false)
                } 
                const productoFinal={...datosForm, imagenUrl: image}
                console.log(productoFinal)
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
                    //
                }
            }else{
                alert("Adjunta una imagen para continuar")
                return
            }//aqui finaliza el if(imagenfile)    
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