import { useState, useEffect } from "react"
import { Item } from "../Item/Item"


function Productos({Mensaje}){
    const [productos, setProductos]= useState([])
    const [error, setError]= useState(null)
    const [cargando, setCargando]= useState(true)
    //const API='/data/productos.json'

    useEffect(()=>{
        fetch('/data/productos.json')
            .then((response)=>{
                if(!response.ok){
                    throw new Error("No se pudo cargar la informacion de los productos")
                }
                return response.json()
            .then((datos)=>{setProductos(datos)})
            .catch((error)=>{setError(error)})
            .finally(()=>{setCargando(false)})
            })
    },[])
    if (cargando){
        return <p>Cargando productos por favor espere...</p>
    }
    if (error){
        return <p>Error:{error}</p>
    }
    return(
        <div>
            <h1>{Mensaje}</h1>
            <ul className="listaProd">
                {productos.map(prod=>(
                    <Item key={prod.id} {...prod} />
                ))} 
            </ul>
            
        </div>
    )
}

export default Productos

/*
<li key={producto.id} >
                        <h2>{producto.nombre}</h2>
                        <img src={producto.imagen} alt={producto.nombre} width="300"/>
                        <p>Precio:{producto.precio} </p>
                    </li>
*/