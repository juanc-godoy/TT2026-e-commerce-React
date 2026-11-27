import { Item } from "../Item/Item"
import { db } from "../../firebase/config"
import usePaginacion from "../UsePaginacion"
import Paginacion from "../Paginacion"
import { useSearch } from "../Context/SearchContext"

const Productos= ()=>{
    const { busqueda }= useSearch()

    const {
    elementos: productos,
    paginaActual,
    totalPaginas,
    cargando,
    irAPagina,
    paginaAnterior,
    paginaSiguiente
  } = usePaginacion({
    db,
    nombreColeccion: "productos nacionales",
    tamanoPagina: 8,
    campoOrden: "nombre",
    direccionOrden: "asc",
  });

    const productosFiltrados = productos.filter(prod =>
        prod.nombre?.toLowerCase().includes(busqueda.toLowerCase())
        );
    
    if (cargando&& productos.length===0){
        return <p>Cargando productos por favor espere...</p>
    }
    
    return(
        <div>
            <h2 className="productosTitulo">Conocé nuestros Productos</h2>
            {productos.length === 0
            ? <p>No hay productos disponibles.</p>
            : <ul className="listaProd">
                    {productosFiltrados.map(prod=>(
                        <Item key={prod.id} {...prod} />
                    ))} 
                </ul>
            }
            
            <Paginacion
                paginaActual={paginaActual}
                totalPaginas={totalPaginas}
                irAPagina={irAPagina}
                paginaSiguiente={paginaSiguiente}
                paginaAnterior={paginaAnterior}
                deshabilitado={cargando}
            />
        </div>
    )
}

export default Productos