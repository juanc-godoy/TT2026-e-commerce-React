import {useCart} from "./Context/CarritoContext"

function CarritoItem({imagen,nombre,cantidad,precio,id}){
    //const producto={imagen,nombre,cantidad,precio,id}
    const {removeItem, incrementar, decrementar}=useCart()
    const precioFormato=new Intl.NumberFormat('es-AR').format(precio);
    const subtotal=precio*cantidad
    const subtotalFormato=new Intl.NumberFormat('es-AR').format(subtotal);
    
    return(
        /*
        <table className="carritoTabla">
                <thead>
                    <tr >
                        <th>Foto</th>
                        <th>Item</th>
                        <th>Precio Unit.</th>
                        <th>Cantidad</th>
                        <th>Subtotal</th>
                        <th>Accion</th>
                    </tr>
                </thead>
                <tbody>
                    {carrito.map(item =>(
                        <CarritoItem key={item.id} {...item} />
                        ))}
                </tbody>
        */
        <tr className="carritoItem">
            <td className="carritoItemImgHolder">
                <img className="carritoItemImg" src={imagen} alt={nombre} />
            </td>
            <td><h3>{nombre} </h3></td>
            <td><h3>${precioFormato}</h3></td>
            <td /* className="carritoIncDec" */>
                <div className="carritoIncDec">
                    {cantidad >=2
                    ? <button className="btnIncDec" onClick={()=>decrementar(id)}>-</button>
                    : <button disabled className="btnIncDec" onClick={()=>decrementar(id)}>-</button>
                    }
                    <p>{cantidad}</p>
                    <button className="btnIncDec" onClick={()=>incrementar(id)}>+</button>
                </div>
                
                
            </td>
            <td><h3>$ {subtotalFormato}</h3></td>
            <td >
                <button className="btnEliminar" onClick={()=>removeItem(id)}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash preview-icon"><path d="M10 11v6"/><path d="M14 11v6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg></button>
            </td>
        </tr>
    )
}

export default CarritoItem