import { useParams } from "react-router-dom";


const UnicoProducto = ()=>{
    const {id}= useParams();
    return(
        <div>
           <h2>Vista de un único producto, ID: {id} </h2> 
        </div>
    )
}

/* return (
        <div className="unicoProducto">
            <div className="unicoImgHolder" >
                <img src={imagen} alt={nombre} />
            </div>
            <div className="unicoDetalle">
                <h3>{nombre} </h3>
                <h4>$ {precio} </h4>
                <p>Stock: {stock} u.</p>
                <p>Prod.Id: {id} </p>
            </div>
        </div>
    ) */

export default UnicoProducto