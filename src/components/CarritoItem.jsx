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
            <button className="btnEliminar" onClick={()=>removeItem(id)} >X</button>
        </div>
    )
}

export default CarritoItem

/*

*/