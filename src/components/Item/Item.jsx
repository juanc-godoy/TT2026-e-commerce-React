import { Contador } from "../Contador/Contador"
import {Favorito} from "../Favorito/Favorito"
import { useCart } from "../Context/CarritoContext"
//import UnicoProducto from "../Productos/UnicoProducto"
//import Link from "react-router-dom"

export function Item({id,nombre,precio,stock,imagen}){
    const producto={id,nombre, precio, stock,imagen}
    const cantidad=5
    /* const CompraClick=()=>{

        alert(`¡Agregaste ${nombre} al carrito!`) 
    } */
    const {addToCarrito, carrito}=useCart()

    const manejarAddToCarrito=()=>{
        addToCarrito(producto,cantidad)
        alert(`Agregaste ${cantidad} unidades de ${nombre} al carrito `)
        console.log("Carrito:",carrito)
    }
    /*
    const handleAddToCart = () => {
    addToCart(producto, cantidad);
    alert(`Agregaste ${cantidad} unidades de ${nombre} al carrito.`);
    }
    */
    return (
        <div className="listaProdItem">
            <div className="itemImgHolder">
                <img className="itemImg" src={imagen} alt={nombre} />
            </div>
            <h3>{nombre}</h3>
            <p>Id. Producto: {id} </p>
            
            <h4>$ {precio}</h4>
            <Favorito/>
            <p>Stock: {stock}</p>
            <Contador/>
            <button className="agregarButton" onClick={manejarAddToCarrito} >Agregar al carrito</button>
        </div>
    )
}

/*
const CompraClick = () => {// Quiero que se ejecute cuando le doy clic
alert(`¡Agregaste ${nombre} al chango!`);
}
*/