import { Link } from 'react-router-dom'
import {useCart} from "../Context/CarritoContext"
import { useAuth } from "../Context/AuthContext"
import { useState } from 'react'

function Navbar(){
    const {cantidadEnCarrito}= useCart()
    const totalItems= cantidadEnCarrito()
    const {user, logout}=useAuth()
    const [menuHamburguesa, setMenuHamburguesa]= useState(false)

    const abrirCerrar= ()=> setMenuHamburguesa((prev)=>!prev)

    /* if (!menuHamburguesa){
        return (
            null
        )
    } */
    return (
        <nav className="headerItem">
            <button
            type="button"
            className="btnHamburguesa"
            aria-label="Abrir o cerrar menú"
            aria-expanded={menuHamburguesa}
            onClick={abrirCerrar}>
            ☰
            </button>
            {menuHamburguesa
            ? (<ul className="menuHamburguesa">
            <li className="navItem" onClick={abrirCerrar}><Link className="link" to="/" >Inicio</Link></li>
            <li className="navItem" onClick={abrirCerrar}><Link className="link" to="/productos">Productos</Link></li>
            <li className="navItem" onClick={abrirCerrar}>
                <Link className="link" to="/carrito">Carrito{totalItems > 0
                    ? <span className='numerito'>{totalItems}</span>
                    : <span></span>}
                </Link>
            </li> 
            {user
                ? (<>
                    {user.rol === 'admin' ?
                    (<li className="navItem" onClick={abrirCerrar}> <Link className="link" to="/gestion" >Gestion</Link></li>)
                    : (<span></span>)
                    }
                    <p>Hola, {user.email}</p>
                    <button className='btnLogout' onClick={logout}>Cerrar Sesión</button>
                </>)
                : (
                    <li className="navItem" onClick={abrirCerrar}><Link className="link" to="/login">Login</Link></li>
                )}
                </ul>)
                : (<ul className="navItemContainer">
                <li className="navItem"><Link className="link" to="/" >Inicio</Link></li>
                <li className="navItem"><Link className="link" to="/productos">Productos</Link></li>
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
                        <p>Hola, {user.email}</p>
                        <button className='btnLogout' onClick={logout}>Cerrar Sesión</button>
                    </>)
                    : (
                    <li className="navItem"><Link className="link" to="/login">Login</Link></li>
                )}
                </ul>)
                }
                {/*<ul className={`nav-links ${isOpen ? "open" : ""}`}>
                    <li><a href="#inicio" onClick={() => setIsOpen(false)}>Inicio</a></li>
                    <li><a href="#servicios" onClick={() => setIsOpen(false)}>Servicios</a></li>
                    <li><a href="#contacto" onClick={() => setIsOpen(false)}>Contacto</a></li>
                </ul> */}
                
                {/* <li className="navItem"></li>
                <li className="navItem"><Link className="link" to="/">Inicio</Link></li>
                <li className="navItem"><Link className="link" to="/productos">Productos</Link></li>
                <li className="navItem">
                    <Link className="link" to="/carrito">Carrito{totalItems > 0
                        ? <span className='numerito'>{totalItems}</span>
                        : <span></span>}
                    </Link>
                </li> */}
                {/* {user
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
                )} */}
            {/* <li className="navItem"><Link className="link" to="/contacto">Contacto</Link></li>
                <li className="navItem"><Link className="link" to="/productosNac">Productos Nacionales</Link></li>
                <li className="navItem"><Link className="link" to="/alta">Alta</Link></li>
                <li className="navItem"><Link className="link" to="/gestion">Gestion</Link></li> */}
        </nav>
    )
}

export default Navbar
