import { Link } from 'react-router-dom'
import {useCart} from "../Context/CarritoContext"

function Navbar(){
    const {cantidadEnCarrito}= useCart()
    const totalItems= cantidadEnCarrito()
    return (
        <nav className="headerItem">
            <ul className="navItemContainer">
                <li className="navItem"><Link className="link" to="/">Inicio</Link></li>
                <li className="navItem"><Link className="link" to="/contacto">Contacto</Link></li>
                <li className="navItem"><Link className="link" to="/productos">Productos</Link></li>
                {/* <li className="navItem">
                    <Link className="link" to="/carrito">Carrito{totalItems > 0 &&
                    <span>{totalItems}</span>}</Link></li> */}
                <li className="navItem">
                    <Link className="link" to="/carrito">Carrito{totalItems > 0
                        ? <span className='numerito'>{totalItems}</span>
                        : <span></span>}
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
