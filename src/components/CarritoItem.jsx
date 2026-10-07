
function CarritoItem({imagen,nombre,cantidad,precio}){
    return(
        <div className="carritoItem">
            <div className="carritoItemImgHolder">
                <img className="carritoItemImg" src={imagen} alt={nombre} />
            </div>
            <h3>{nombre} </h3>
            <p>$ {precio} </p>
            <p>{cantidad} </p>
            <p>$ {cantidad*precio} </p>
        </div>
    )
}

export default CarritoItem