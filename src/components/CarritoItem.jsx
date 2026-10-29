import {useCart} from "./Context/CarritoContext"

function CarritoItem({imagen,nombre,cantidad,precio,id}){
    //const producto={imagen,nombre,cantidad,precio,id}
    const {removeItem}=useCart()
    
    return(
        <div className="carritoItem">
            <div className="carritoItemImgHolder">
                <img className="carritoItemImg" src={imagen} alt={nombre} />
            </div>
            <h3>{nombre} </h3>
            <p>$ {precio} </p>
            <p>{cantidad} </p>
            <p>$ {cantidad*precio} </p>
            <button className="btnEliminar" onClick={()=>removeItem(id)} >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash preview-icon"><path d="M10 11v6"/><path d="M14 11v6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
            </button>           
            
        </div>
    )
}

export default CarritoItem