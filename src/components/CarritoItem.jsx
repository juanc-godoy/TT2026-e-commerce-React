

export function CarritoItem({img,nombre,cantidad,precio}){
    return(
        <div className="carritoItem">
            <div className="carritoImgHolder">
                <img className="carritoImg" src={img} alt={nombre} />
            </div>
            <h3>{nombre} </h3>
            <p>$ {precio} </p>
            <p>{cantidad} </p>
            <p>$ {cantidad*precio} </p>
        </div>
    )
}