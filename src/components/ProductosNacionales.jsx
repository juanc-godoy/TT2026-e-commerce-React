import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore"
import { db } from "../firebase/config.js"
import { Link } from "react-router-dom";
import { useSearch } from "./Context/SearchContext.jsx";

const ProductosNacionales=()=>{
    const [productos, setProductos]=useState([])
    const { busqueda }= useSearch()

    useEffect(()=>{
        const productosDB= collection(db,"productos nacionales")
        getDocs(productosDB)
            .then(resp=>{
                setProductos(
                    resp.docs.map(doc=>{
                        return {...doc.data(), id: doc.id}
                    })
                )
            })
    },[])

    const productosFiltrados = productos.filter(prod =>
        prod.nombre?.toLowerCase().includes(busqueda.toLowerCase())
        );
    
    return (
        <div>
            <h1>Productos Nacionales</h1>
            <div className="listaProd">
                {productosFiltrados.map(prod=>(
                    <div key={prod.id}>
                        {/* <img src={prod.imagen} alt={prod.nombre} /> */}
                        <p>{prod.imagen} </p>
                        <Link to={`/productosNac/${prod.id}`}>Ver detalle</Link>
                        <h3>{prod.nombre} </h3>
                        <p>Categoría: {prod.categoria} </p>
                        <p>Precio: ${prod.precio} </p>
                        <p>Stock: {prod.stock} unidades</p>
                        <hr />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductosNacionales

/*
<input
            type="text"
            className="form-control"
            placeholder="Buscar en los productos cargados..."
            onChange={(e) => setSearchTerm(e.target.value)}
            />
*/