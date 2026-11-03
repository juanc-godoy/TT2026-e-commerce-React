import { Link } from 'react-router-dom'
import {useCart} from "../Context/CarritoContext"
import { useAuth } from "../Context/AuthContext"

function Navbar(){
    const {cantidadEnCarrito}= useCart()
    const totalItems= cantidadEnCarrito()
    const {user, logout}=useAuth()

    return (
        <nav className="headerItem">
            <ul className="navItemContainer">
                <li className="navItem"></li>
                <li className="navItem"><Link className="link" to="/">Inicio</Link></li>
                <li className="navItem"><Link className="link" to="/contacto">Contacto</Link></li>
                <li className="navItem"><Link className="link" to="/productos">Productos</Link></li>
                <li className="navItem"><Link className="link" to="/productosNac">Productos Nacionales</Link></li>
                <li className="navItem"><Link className="link" to="/alta">Alta</Link></li>
                <li className="navItem"><Link className="link" to="/gestion">Gestion</Link></li>
                <li className="navItem">
                    <Link className="link" to="/carrito">Carrito{totalItems > 0
                        ? <span className='numerito'>{totalItems}</span>
                        : <span></span>}
                    </Link>
                </li>
                {user
                    ? (<>
                        {user.rol === 'admin' ?
                        (<li className="navItem"> <Link className="link" to="/gestion" >Gestion</Link></li>)
                        : (<span></span>)
                        }
                        <p>¡Hola, {user.email}!</p>
                        <button className='btnLogout' onClick={logout}>Cerrar Sesión</button>
                    </>)
                    : (
                    <li className="navItem"><Link className="link" to="/login">Login</Link></li>
                )}
            </ul>
        </nav>
    )
}

export default Navbar
