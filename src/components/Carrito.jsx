import {useCart} from "./Context/CarritoContext"
import CarritoItem from "./CarritoItem"
import { Link } from "react-router-dom"

function Carrito(){
    const {carrito, clearCarrito, totalCarrito}= useCart()
    
    if (carrito.length===0){
        return(
            <div className="carritoContainer">
                <h1>El carrito esta vacío </h1>
                <p>Agrega productos para continuar la compra</p>
                <Link to="/productos"><button className="btnToProductos">Ir a Productos</button> </Link>
            </div>
        )
    }

    return(
        <div className="carritoContainer">
            <thead>
                <tr className="carritoTop" >
                    <th>Foto</th>
                    <th>Item</th>
                    <th>Precio Unit.</th>
                    <th>Cantidad</th>
                    <th>Subtotal</th>
                    <th>Accion</th>
                </tr>
            </thead>
            
            <tbody className="carrito" >
                {carrito.map(item =>(
                    < CarritoItem key={item.id} {...item} />
                    ))}
            </tbody>
            <div className="carritoBottom" >
                <button onClick={clearCarrito} className="btnVaciar">Vaciar Carrito</button>
                <h3>Total a pagar: ${totalCarrito()} </h3>
                <button className="btnComprar" >Continuar compra</button>
            </div>
        </div>
    )
}
export default Carrito

/*
/<div key={item.id} className="carritoItem" >
    <div className="carritoItemImgHolder">
        <img src={item.imagen} alt={item.nombre} className="carritoItemImg"/>
    </div>
        <h4>{item.nombre}</h4>
        <p>${item.precio} </p>
        <p>{item.cantidad} </p>
        <p>${item.precio*item.cantidad} </p>
</div>
*/