import { useState, useEffect } from "react";
import FormularioContainer from "../FormularioContainer.jsx"
import { db } from "../../firebase/config.js"
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";

const Gestion= ()=>{
    const [productos, setProductos]= useState([])
    const estadoInicialForm = {
        nombre: "",
        categoria:"",
        precio: 0,
        stock: 0,
        imagenUrl: ""
        };
    useEffect(()=>{
        const fetchProductos= async()=>{
            const productosRef= collection(db, "productos nacionales",)
            const resp= await getDocs(productosRef)
            setProductos(resp.docs.map((doc)=>({...doc.data(),id: doc.id})))
        }
        fetchProductos()
    },[productos])
    const handleDelete= async (id)=>{
        const confirmacion= window.confirm("Eliminar producto. Esta seguro?")
        if (confirmacion){
            const docRef= doc(db, "productos nacionales", id)
            await deleteDoc(docRef)
            setProductos(productos.filter(prod=> prod.id !== id))
            alert("Producto eliminado")
        }
    }

    return(
        <div>
            <h2>Gestion de Productos</h2>
            <hr />
            <FormularioContainer datosForm= {estadoInicialForm} />
            <hr />
            <h3>Lista de Productos</h3>
            <ul>
                {productos.map(prod=>(
                    <li key={prod.id}>
                        {prod.nombre} - ${prod.precio}
                        <p>Botones van aquí</p>
                        <button onClick={()=>handleDelete(prod.id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Gestion
