import {useCart} from "./Context/CarritoContext"
import CarritoItem from "./CarritoItem"

function Carrito(){
    const {carrito, clearCarrito, totalCarrito}= useCart()
    
    if (carrito.length===0){
        return(
            <div className="carritoContainer">
                <h1>El carrito esta vacío </h1>
                <p>Agrega productos para continuar la compra</p>
            </div>
        )
    }

    return(
        <div className="carritoContainer">
            <div className="carritoTop" >
                <p>Foto</p>
                <p>Item</p>
                <p>P.Unitario</p>
                <p>Cantidad</p>
                <p>Subtotal</p>
            </div>
            <div className="carrito" >
                {carrito.map(item =>(
                    < CarritoItem key={item.id} {...item} />
                    ))}
            </div>
            <div className="carritoBottom" >
                <button onClick={clearCarrito} className="buttonVaciar">Vaciar Carrito</button>
                <h3>Total a pagar: ${totalCarrito()} </h3>
                <button className="buttonComprar" >Continuar compra</button>
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