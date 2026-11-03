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
    },[])

    const manejarDelete= async (id)=>{
        const confirmacion= window.confirm("Eliminar producto. Esta seguro?")
        if (confirmacion){
            const docRef= doc(db, "productos nacionales", id)
            await deleteDoc(docRef)
            setProductos(productos.filter(prod=> prod.id !== id))
            alert("Producto eliminado")
            }
        }
    
    const manejarClickEdit= (prod)=> {
        console.log("antes click","es edicion?: ",esEdicion,"modal: ",modal,"item a editar: ", itemAEditar ,typeof(itemAEditar))
        setItemAEditar(prod)
        setEsEdicion(true)
        setModal(true)
        console.log("luego click","es edicion?: ",esEdicion,"modal: ",modal,"item a editar: ", itemAEditar ,typeof(itemAEditar))
        console.log("formato del item: ",prod)
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
                            <th>Accion</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productos.map(prod=>(
                            <tr key={prod.id}>
                                <td>
                                    <img src={prod.imagenUrl}alt={prod.nombre} width="100px" />
                                </td>
                                <td>{prod.nombre} </td>
                                <td>{prod.categoria} </td>
                                <td>{prod.precio} </td>
                                <td>
                                    <button className="btnGestionEditar" onClick={()=>manejarClickEdit(prod)}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square-pen preview-icon"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"/></svg></button>
                                    <button className="btnGestionEliminar" onClick={()=>manejarDelete(prod.id)}>Eliminar</button>
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
