import { useState, useEffect } from "react";
import AltaProducto from "../Productos/AltaProducto.jsx";
import { db } from "../../firebase/config.js"
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";

const Gestion= ()=>{
    const [productos, setProductos]= useState([])
    const [itemAEditar, setItemAEditar]=useState(null)
    const [modal,setModal]=useState(false)
    const [esEdicion, setEsEdicion]= useState(false)
    
    useEffect(()=>{
        const fetchProductos= async()=>{
            const productosRef= collection(db, "productos nacionales",)
            const resp= await getDocs(productosRef)
            setProductos(resp.docs.map((doc)=>({...doc.data(),id: doc.id})))
        }
        fetchProductos()
    },[productos])

    const manejarDelete= async (id)=>{
        const confirmacion= window.confirm("Eliminar producto. Esta seguro?")
        if (confirmacion){
            const docRef= doc(db, "productos nacionales", id)
            await deleteDoc(docRef)
            setProductos(productos.filter(prod=> prod.id !== id))
            alert("Producto eliminado")
            }
        }
    
    const manejarClickEdit= (item)=> {
        setEsEdicion(true)
        setItemAEditar(item)
        setModal(true)
        console.log("esedicion: ",esEdicion,"modal: ",modal,"item: ",item ,typeof(item))
    }

    return(
        <div>
            {modal
                ? <AltaProducto
                    esEdicion={esEdicion}
                    setEsEdicion={setEsEdicion}
                    itemAEditar={itemAEditar}
                    setItemAEditar={setItemAEditar}
                    modal={modal}
                    setModal={setModal} />
                : <span></span>
            }
            <div>
                <h2>Gestion de Productos</h2>
                {productos<=0
                ? <h2>No hay productos para mostrar</h2>
                : <table className="gestionTabla">
                    <thead>
                        <tr>
                            <th>Imagen</th>
                            <th>Nombre</th>
                            <th>Categoria</th>
                            <th>Precio</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productos.map(prod=>(
                            <tr key={prod.id}>
                                <td>
                                    <img src={prod.imagen||prod.urlImagen}alt={prod.nombre} width="100px" />
                                </td>
                                <td>{prod.nombre} </td>
                                <td>{prod.categoria} </td>
                                <td>{prod.precio} </td>
                                <td>
                                    <button onClick={()=>manejarClickEdit(prod)}>Editar</button>
                                    <button onClick={()=>manejarDelete(prod.id)}>Eliminar</button>
                                </td>
                            </tr>
                        )
                        )}
                    </tbody>
                </table>
                }
            </div>
        </div>
    )
}

export default Gestion
