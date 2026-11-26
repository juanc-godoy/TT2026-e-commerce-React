import { useSearch } from "../Context/SearchContext"
import Navbar from "./Navbar"
import { useNavigate, useLocation } from "react-router-dom"
import { PawPrint } from "lucide-react"

function Header(){
    const {busqueda, setBusqueda}= useSearch()
    const navigate = useNavigate();
    const location = useLocation();

    const manejarCambio = (evento) => {
        const valor = evento.target.value;
        setBusqueda(valor);

        if (location.pathname !== "/productosNac") {
            navigate("/productos");
            }
    };

    return (
        <header className="header">
            <h2 className="titulo"><PawPrint size={20} color="#F7F5FB" strokeWidth={2.5} /> Indiana Store</h2>
            
            <form
            className=""
            onSubmit={(evento) => evento.preventDefault()}
            >
            <input
            type="text"
            placeholder="Buscar productos..."
            className="campoBusqueda"
            value={busqueda}
            onChange={manejarCambio}
          />
          {busqueda && (
            <button
              type="button"
              className="btnXBusqueda"
              onClick={() => setBusqueda("")}
            >
            ✕
            </button>
            )}
            </form>
            <Navbar/>
        </header>
    )
}

export default Header
