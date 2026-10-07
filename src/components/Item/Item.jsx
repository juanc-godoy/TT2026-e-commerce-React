import { useState } from "react"
import {Link} from "react-router-dom"
import { useCart } from "../Context/CarritoContext"
//import { Contador } from "../Contador/Contador"
import {Favorito} from "../Favorito/Favorito"

//import UnicoProducto from "../Productos/UnicoProducto"


export function Item({id,nombre,precio,stock,imagen}){
    const {addToCarrito, carrito}=useCart()
    const producto={id,nombre, precio, stock,imagen}
    const [cantidad, setCantidad]= useState(0)

    const incrementar=()=>{
        setCantidad(cantidad+1)
    }
    const decrementar=()=>{
        cantidad>=1
        ?setCantidad(cantidad-1)
        : {}//pass
    }

    const manejarAddToCarrito=()=>{
        addToCarrito(producto,cantidad)
    }
    
    return (
        <div className="listaProdItem">
            <div className="itemImgHolder">
                <img className="itemImg" src={imagen} alt={nombre} />
            </div>
            <div className="itemInfo" >
                <Link to={`/producto/${id}`} ><h3>{nombre}</h3></Link>
                <p>Id. Producto: {id} </p>
                <h4>$ {precio}</h4>
                <Favorito/>
                <p>Stock: {stock}</p>
                {/* <Contador/> */}
            </div>
            <div className="itemButtons">
                <button className="buttonSumaResta" onClick={decrementar}>-</button>
                <h3>Uds: {cantidad} </h3>
                <button className="buttonSumaResta" onClick={incrementar}>+</button>
            </div>
            <button className="agregarButton" onClick={manejarAddToCarrito}>
                Agregar {cantidad>=1&&cantidad} al carrito
            </button>
        </div>
    )
}

/*
const CompraClick = () => {// Quiero que se ejecute cuando le doy clic
alert(`¡Agregaste ${nombre} al chango!`);
}
*/