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
        setItemAEditar(prod)
        setEsEdicion(true)
        setModal(true)
        window.scrollTo(0, 0)
    }
    
    const manejarClickAgregar= ()=> {
        setItemAEditar(false)
        setEsEdicion(false)
        setModal(true)
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
                <div className="gestionTop">
                    <h2>Gestión de Productos</h2>
                    <h3><button className="btnGestionAgregar" onClick={()=>manejarClickAgregar()}>+ Agregar producto</button></h3>
                </div>
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
                            <tr className="gestionItem" key={prod.id}>
                                <td className="gestionImgHolder">
                                    <img className="gestionImg" src={prod.imagenUrl}alt={prod.nombre} />
                                </td>
                                <td>{prod.nombre} </td>
                                <td>{prod.categoria} </td>
                                <td>$ {new Intl.NumberFormat('es-AR').format(prod.precio)} </td>
                                <td>
                                    <div className="btnsGestion" ></div>
                                    <button className="btnGestionEditar" onClick={()=>manejarClickEdit(prod)}>Editar</button>
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
