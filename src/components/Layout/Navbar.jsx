import { Link } from 'react-router-dom'

function Navbar(){
    return (
        <nav className="headerItem">
            <ul className="navItemContainer">
                <li className="navItem"><Link className="link" to="/">Inicio</Link></li>
                <li className="navItem"><Link className="link" to="/contacto">Contacto</Link></li>
                <li className="navItem"><Link className="link" to="/productos">Productos</Link></li>
                <li className="navItem"><Link className="link" to="/carrito">Carrito</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar