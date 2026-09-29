import {ItemList} from "../ItemList/ItemList"
import styles from "./ItemListContainer.module.css"

export function ItemListContainer({Mensaje}){
    const productos = [
    { id: '1234', nombre: 'Notebook Pro', precio: 12000, stock: 15 },
    { id: '2344', nombre: 'Monitor Curvo', precio: 450000, stock: 25 },
    { id: '2545', nombre: 'Teclado Mecánico', precio: 15000, stock: 50 }]
/*
import {useState, useEffect} from "React"
const ItemListContainer = () =>{
    const [productos,setProductos]= useState([])
    useEffect(()=>{
        fetch(API)
        .then(response=>response.json())
        .then(datos=>setProductos(datos))
        .catch(error=>console.log("Error al comunicarse con el servidor"))
    },[])
    }
*/
    return (
        <div>
            <h2>{Mensaje}</h2>
            <div className={styles.productos} >
                <ItemList productos={productos}/>
            </div>
        </div>
    )
}