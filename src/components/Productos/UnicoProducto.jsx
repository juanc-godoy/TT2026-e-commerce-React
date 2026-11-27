import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/config"
import { doc, getDoc } from "firebase/firestore"

const UnicoProducto = ()=>{
    const {id}= useParams()
    const [producto,setProducto]=useState(null)
    const [cargando, setCargando]= useState(true)
    const [error, setError]= useState(null)

    useEffect(()=> {
        const fetchProducto= async()=>{
            setCargando(true)
            try {
                const docRef= doc(db, "productos nacionales", id)
                const docSnapshot= await getDoc(docRef)

                if (docSnapshot.exists()){
                    setProducto(
                        {...docSnapshot.data(),
                            id: docSnapshot.id
                        })
                } else {
                    setError("El producto no existe")
                }
            } catch (error) {
                setError("Error al conectar con la base de datos")
                console.error("Error al cargar producto: ",error)
            } finally {
                setCargando(false)
            }
        }
        
        fetchProducto()
    },[id])
    let precioFormato
    if (producto && producto.nombre) {
        precioFormato= new Intl.NumberFormat('es-AR').format(producto.precio)
    }

    if (cargando){
        return <h2>Cargando detalle del producto...</h2>
    }
    if(error){
        return <h2>Error: {error}</h2>
    }
    if (!producto){
        return <h2>Producto no encontrado</h2>
    }
    return(
        <div className="unicoProducto">
            <div className="unicoInfo">
                <h5>{producto.categoria||"categoria"}</h5>
                <h2>{producto.nombre} </h2>
                <h3>${precioFormato||producto.precio} </h3>
                <p> {producto.descripcion||"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, dolor harum. Ea quibusdam corporis aut doloremque facilis omnis fuga ad placeat! Dolorum praesentium quos nemo magni quo officiis numquam inventore?"}</p>
                <h4>Stock: {producto.stock}</h4>
            </div>
            <div className="unicoImgHolder">
                <img className="unicoImg" src={producto.imagenUrl} alt={producto.nombre} />
            </div>
        </div>
    )
}

export default UnicoProducto