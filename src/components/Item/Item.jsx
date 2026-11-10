//import { useState } from "react"
import {Link} from "react-router-dom"
import { useCart } from "../Context/CarritoContext"
//import { Contador } from "../Contador/Contador"
import {Favorito} from "../Favorito/Favorito"

//import UnicoProducto from "../Productos/UnicoProducto"


export function Item({id,nombre,precio,stock,imagen}){
    const {addToCarrito }=useCart()
    //const {addToCarrito, getCantidadActual, carrito}=useCart()
    const producto={id,nombre, precio, stock,imagen}
    //const [cantidad, setCantidad]= useState(0)
    //const cantidadActual=getCantidadActual(id)
    const precioCuota=(precio/3).toFixed(2)

    /* const incrementar=()=>{
        setCantidad(cantidad+1)
    }
    const decrementar=()=>{
        cantidad>=1
        ?setCantidad(cantidad-1)
        : {}//pass
    } */

    const manejarAddToCarrito=()=>{
        addToCarrito(producto)
    }
    
    return (
        <div className="item">
            <div className="itemImgHolder">
                <img className="itemImg" src={imagen} alt={nombre} />
            </div>
            <div className="itemInfo" >
                <h6 className="itemInfoData">Categoria/hogar</h6>
                <h3 className="itemInfoData"> <Link className="" to={`/producto/${id}`}>{nombre} </Link> </h3>
                <h4 className="itemInfoData">$ {precio} <Favorito/></h4>
                <h5 className="itemInfoData">Hasta 3 cuotas de $ {precioCuota} </h5>
                {/* <p>Id. Prod: {id} </p> */}
                {/* <p>Stock: {stock}</p> */}
                {/* <h3 className="contador">Uds. en carrito: {cantidadActual} </h3> */}
            </div>
            {/* <div className="itemButtons">
                <button className="buttonSumaResta" onClick={decrementar}>-</button>
                <h3>Uds: {cantidad} </h3>
                <button className="buttonSumaResta" onClick={incrementar}>+</button>
            </div> */}
            
            <button className="agregarButton" onClick={manejarAddToCarrito}>
                Agregar al carrito
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-cart-plus preview-icon"><path d="M16 5h6"/><path d="M19 2v6"/><path d="m2.05 2.05 1.099-.028a1 1 0 011.008.815l2.69 14.347A1 1 0 007.83 18H18"/><path d="M4.564 5H12"/><path d="M6.25 14h12.712a2 2 0 001.991-1.57l.172-1.041"/><circle cx="18" cy="20" r="2"/><circle cx="8" cy="20" r="2"/></svg>
            </button>
        </div>
    )
}

/*
const CompraClick = () => {// Quiero que se ejecute cuando le doy clic
alert(`¡Agregaste ${nombre} al chango!`);
}
*/