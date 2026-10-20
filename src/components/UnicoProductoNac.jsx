import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase/config.js"
import { doc, getDoc } from "firebase/firestore";

const UnicoProductoNac = ()=>{
    const {id}= useParams()
    const [producto,setProducto]=useState(null)

    useEffect(()=> {
        if (id){
            const docRef= doc(db, "productos nacionales" ,id)
            getDoc(docRef)
                .then(resp=>{
                    if (resp.exists()){
                        setProducto({...resp.data(),id: resp.id})
                    } else{
                        console.log("No se encontró el producto")
                    }
                })
                .catch(error=>console.log(error))
        }
    },[id])

    if (!producto){
        return <h1>Cargando Producto</h1>
    }else return(
        <div>
            <h1>detalle de prod id: {id} </h1>
            <h2>{producto.nombre}</h2>
            <p>Stock: {producto.stock} </p>
            <p>Cat: {producto.categoria}  </p>
            <p>Precio: ${producto.precio}  </p>
        </div>
    )
    
}

export default UnicoProductoNac

/*
<div className="unicoProducto">
            {producto || <p>Cargando producto</p>}
        </div>
*/
