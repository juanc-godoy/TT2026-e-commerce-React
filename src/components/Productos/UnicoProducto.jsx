import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const UnicoProducto = ()=>{
    const {id}= useParams()
    const [producto,setProducto]=useState(null)
    const [cargando, setCargando]= useState(true)

    useEffect(()=> {
        fetch('/data/productos.json')
            .then((res) => res.json())
            .then((data)=> {
                const encontrado= data.find(prod=> prod.id===parseInt(id))
                setProducto(encontrado)
            })
            .catch((error)=> console.error("Error al cargar el producto", error))
            .finally(()=>setCargando(false))
    },[id])
    
    if (cargando){
        return <h2>Cargando detalle del producto...</h2>
    }
    if(!producto){
        return <h2>Producto no encontrado.</h2>
    }
    return(
        <div className="unicoProducto">
            <div className="unicoImgHolder">
                <img className="unicoImg" src={producto.imagen} alt={producto.nombre} />
            </div>
            <div className="unicoDetalle">
                <h2>{producto.nombre} </h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, dolor harum. Ea quibusdam corporis aut doloremque facilis omnis fuga ad placeat! Dolorum praesentium quos nemo magni quo officiis numquam inventore?</p>
                <h3>${producto.precio} </h3>
            </div>
        </div>
    )
}

export default UnicoProducto

/* return (
        <div className="unicoProducto">
            <div className="unicoImgHolder" >
                <img src={imagen} alt={nombre} />
            </div>
            <div className="unicoDetalle">
                <h3>{nombre} </h3>
                <h4>$ {precio} </h4>
                <p>Stock: {stock} u.</p>
                <p>Prod.Id: {id} </p>
            </div>
        </div>
    ) */