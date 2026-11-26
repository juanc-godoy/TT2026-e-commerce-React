import { Item } from "../Item/Item"
import { db } from "../../firebase/config"
import usePaginacion from "../UsePaginacion"
import Paginacion from "../Paginacion"
import { useSearch } from "../Context/SearchContext"

const Productos= ()=>{
    /* const [productos, setProductos]= useState([])
    const [error, setError]= useState(null)
    const [cargando, setCargando]= useState(true) */
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
    /* if (error){
        return <p>Error:{error}</p>
    } */
    return(
        <div>
            <h1>Productos</h1>
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

/*
import { db } from "../../firebase/config";
import { usePaginacion } from "../../hooks/usePaginacion";
import Paginacion from "../../components/Paginacion";

const Productos = () => {
  const {
    elementos: productos,
    paginaActual,
    totalPaginas,
    cargando,
    irAPagina,
  } = usePaginacion({
    db,
    nombreColeccion: "productos",
    tamanoPagina: 6,
    campoOrden: "nombre",
    direccionOrden: "asc",
  });

  if (cargando && productos.length === 0) {
    return <p>Cargando productos...</p>;
  }

  return (
    <div>
      <h1>Productos</h1>

      <div className="lista-productos">
        {productos.length === 0 ? (
          <p>No hay productos disponibles.</p>
        ) : (
          productos.map((prod) => (
            <div key={prod.id}>
              {prod.imagen && (
                <img
                  src={prod.imagen}
                  alt={prod.nombre}
                  style={{ width: "100px" }}
                />
              )}
              <h3>{prod.nombre}</h3>
              <p>Categoría: {prod.categoria}</p>
              <p>Precio: ${prod.precio}</p>
              <p>Stock: {prod.stock} unidades</p>
              <hr />
            </div>
          ))
        )}
      </div>

      <Paginacion
        paginaActual={paginaActual}
        totalPaginas={totalPaginas}
        alCambiarPagina={irAPagina}
        deshabilitado={cargando}
      />
    </div>
  );
};

export default Productos;
*/