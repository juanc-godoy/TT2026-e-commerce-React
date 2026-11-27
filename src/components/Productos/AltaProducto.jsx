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

    const subirImagenAImgbb= async(archivo)=>{
        const formData= new FormData()
        formData.append("image",archivo)
        const apiKey= import.meta.env.VITE_IMGBB_API_KEY
        console.log("Subiendo imagen a Imgbb...")
        const respuestaImgbb= await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`,{
            method: "POST",
            body: formData,
            })
        const datosImgbb= await respuestaImgbb.json()
        if (!datosImgbb.success){
            throw new Error('Fallo al subir la imagen a Imgbb.')
        }
        return datosImgbb.data.url
    }//fin funcion
    
    const cancelarEdicion= () => {
        setEsEdicion(false)
        setModal(false)
    }

    const manejarEnvio= async(evento)=>{
        setLoading(true)
        evento.preventDefault()
        if (datosForm.nombre.trim()===""||datosForm.precio<=0){
            alert("Verifique que todos los campos estan completos y que precio sea mayor a cero")
            setLoading(false)
             return
        }
        if (!imagenFile && !datosForm.imagenUrl){
            alert("Adjunta una imagen para continuar")
            setLoading(false)
            return
        }
        try {
            let imagenUrl= datosForm.imagenUrl||""
            if (imagenFile){
                imagenUrl= await subirImagenAImgbb(imagenFile)
            }
            const productoFinal = {
                nombre: datosForm.nombre,
                precio: Number(datosForm.precio),
                stock: Number(datosForm.stock),
                categoria: datosForm.categoria.trim().toLowerCase(),
                imagenUrl: imagenUrl
                };
            if (itemAEditar){
                const docRef=doc(db,"productos nacionales",itemAEditar.id)
                await updateDoc(docRef, productoFinal)
                alert("Producto actualizado exitosamente")
            } else {
                const productCollection=collection(db,"productos nacionales")
                await addDoc(productCollection, productoFinal)
                alert("Producto guardado exitosamente")
            }
            setDatosForm(estadoInicialForm);
            setImagenFile(null)
            setModal(false)
        } catch (error) {
            console.error("Error en el envío de datos:", error)
            alert("Error al procesar.")
        } finally{
            setLoading(false)
        }
    }//FIN MANEJAR ENVIO

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
        />
        )
}
export default AltaProducto