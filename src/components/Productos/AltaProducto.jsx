import { useState } from "react";
import { FormularioProducto } from "../FormularioProducto/FormularioProducto"
import { db } from "../../firebase/config.js"
import { collection,addDoc } from "firebase/firestore";


export function AltaProducto(){
    const [datosForm,setDatosForm]= useState({
        nombre: '',
        precio: '',
        stock: '',
        categoria: ''
    })

    const [imagenFile,setImagenFile]=useState(null)
    const [loading,setLoading]=useState(false)
    
    const manejarCambio= (evento)=>{
    const {name, value}= evento.target
    setDatosForm({
        ...datosForm, [name]:value
    })
    }

    const manejarCambioImagen= (evento)=>{
        setImagenFile(evento.target.files[0])
    }

    const manejarEnvio= async(evento)=>{
        setLoading(true)
        evento.preventDefault()
        if (!imagenFile){
            alert("Por favor, selecciona una imagen para el producto")
            return
        }
        const apiKey= import.meta.env.VITE_API_KEY
        const formData= new FormData()
        formData.append("image",imagenFile)
        try{
            console.log("Subiendo imagen a Imgbb...")
            const respuestaImgbb= await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`,{
                method: "POST",
                body: formData,
            })
            const datosImgbb= await respuestaImgbb.json()
            if (datosImgbb.success){
                console.log("Imagen subida a Imgbb exitosamente", datosImgbb.data.url)
                const productoCompleto= {
                    ...datosForm,
                    urlImagen: datosImgbb.data.url
                }
                console.log("Enviando los siguientes datos a Firebase,", productoCompleto)
                const productsCollection=collection(db, "productos nacionales")
                await addDoc(productsCollection, productoCompleto)
                console.log(productoCompleto)
            }
            else{
            throw new Error('La subida de la imagen a Imgbb falló.');
            }
        }
        catch (error){
            console.error("Error en el proceso de envío:", error);
            alert("Error al subir la imagen. Por favor, intentá de nuevo.");
            }
        finally{
            setLoading(false)
        }  
        }
        
    return (
        <FormularioProducto
        datosForm={datosForm}
        manejarCambio={manejarCambio}
        manejarEnvio={manejarEnvio}
        manejarCambioImagen={manejarCambioImagen}
        />
        )    
    }
    
export default AltaProducto