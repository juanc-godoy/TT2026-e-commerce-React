import {useCart} from "./Context/CarritoContext"

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
                <div key={item.id} className="carritoItem" >
                    <div className="carritoItemImgHolder">
                        <img src={item.imagen} alt={item.nombre} className="carritoItemImg"/>
                    </div>
                    <h4>{item.nombre}</h4>
                    <p>${item.precio} </p>
                    <p>{item.cantidad} </p>
                    <p>${item.precio*item.cantidad} </p>
                </div>
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

    const carritov1=[
    { id: '1234', nombre: 'Notebook Pro', precio: 12000, cantidad: 1 },
    { id: '2344', nombre: 'Monitor Curvo', precio: 450000, cantidad: 1 },
    { id: '2545', nombre: 'Teclado Mecánico', precio: 15000, cantidad: 2 }]

    return (
        <div className="carrito">
            <div className="carritoMarco">
                <p>Foto</p>
                <p>Item</p>
                <p>Precio</p>
                <p>Cantidad</p>
                <p>Subtotal</p>
            </div>
            <div>
                {carritov1.map(item=>(
                    <li key={item.id} className="carritoItem">
                    <p>img</p>
                    <h2>{item.nombre}</h2>
                    <p>${item.precio} </p>
                    <p>{item.cantidad} </p>
                    <p>${item.precio*item.cantidad} </p>
                </li>
                ))}
            </div>             
            
            <div className="carritoFin">
                <h2 className="carritoTotal">Total </h2>
            </div>
    )
}
*/