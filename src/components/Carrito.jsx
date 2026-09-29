
function Carrito(){
    const carrito=[
    { id: '1234', nombre: 'Notebook Pro', precio: 12000, cantidad: 1 },
    { id: '2344', nombre: 'Monitor Curvo', precio: 450000, cantidad: 1 },
    { id: '2545', nombre: 'Teclado Mecánico', precio: 15000, cantidad: 2 }]

    return (
        <div className="carritoContainer">
            <div className="carritoMarco">
                <p>Foto</p>
                <p>Item</p>
                <p>Precio</p>
                <p>Cantidad</p>
                <p>Subtotal</p>
            </div>
            <div className="carrito">
                {carrito.map(item=>(
                <li  key={item.id} className="carritoItem">
                    <p>img</p>
                    <h2>{item.nombre}</h2>
                    {/* <img src={item.imagen} alt={item.nombre} width="150"/> */}
                    <p>${item.precio} </p>
                    <p>{item.cantidad} </p>
                    <p>${item.precio*item.cantidad} </p>
                </li>
            ))}
            </div>
            <div className="carritoFin">
                <h2 className="carritoTotal">Total </h2>
            </div>
        </div>
    )
}

export default Carrito