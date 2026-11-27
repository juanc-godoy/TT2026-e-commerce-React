import {Link} from "react-router-dom"
import { useCart } from "../Context/CarritoContext"

export function Item({id,nombre,precio,stock,imagenUrl,categoria}){
    const {addToCarrito }=useCart()
    const producto={id,nombre, precio, stock, imagenUrl}
    const cuota=(precio/3).toFixed(2)
    const cuotaFormato=new Intl.NumberFormat('es-AR').format(cuota);
    const precioFormato=new Intl.NumberFormat('es-AR').format(precio);
    
    const manejarAddToCarrito=()=>{
        addToCarrito(producto)
    }
    
    return (
        <div className="item">
            <div className="itemImgHolder">
                <img className="itemImg" src={imagenUrl} alt={nombre} />
            </div>
            <div className="itemInfo" >
                <h6 className="itemInfoData">{categoria||"Categoria"}</h6>
                <h3 className="itemInfoData"> <Link className="link" to={`/producto/${id}`}>{nombre} </Link> </h3>
                <h4 className="itemInfoData">${precioFormato}</h4>
                <h5 className="itemInfoData">Hasta 3 cuotas de ${cuotaFormato} </h5>
            </div>
            <button className="btnAgregar" onClick={manejarAddToCarrito}>
                Agregar al carrito
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-cart-plus preview-icon"><path d="M16 5h6"/><path d="M19 2v6"/><path d="m2.05 2.05 1.099-.028a1 1 0 011.008.815l2.69 14.347A1 1 0 007.83 18H18"/><path d="M4.564 5H12"/><path d="M6.25 14h12.712a2 2 0 001.991-1.57l.172-1.041"/><circle cx="18" cy="20" r="2"/><circle cx="8" cy="20" r="2"/></svg>
            </button>
        </div>
    )
}
