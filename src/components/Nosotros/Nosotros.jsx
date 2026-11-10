import { collection, getDocs } from "firebase/firestore";
import {db } from "../../firebase/config"
import { useState, useEffect} from "react"

function devolverRandoms(){
    const randoms=[]
    while (randoms.length<=2){
        const newEntero=Math.floor(Math.random() * 10);
        if (!randoms.includes(newEntero)){
        randoms.push(newEntero)
        }
    }
    return randoms
}

function Nosotros(){
    const [nosotros,setNosotros]=useState([])
    const [cargando,setCargando]=useState(true)
    const [error,setError]=useState(null)
    const randoms=devolverRandoms()
    //const fetch="/data/nosotros.json"

    /*
    useEffect(()=>{
            const fetchProductos= async()=>{
                const productosRef= collection(db, "productos nacionales",)
                const resp= await getDocs(productosRef)
                setProductos(resp.docs.map((doc)=>({...doc.data(),id: doc.id})))
            }
            fetchProductos()
        },[])
    */
    useEffect(() => {
        const fetchMiembros= async()=>{
            const miembrosRef= collection(db,"miembros")
            const resp= await getDocs(miembrosRef)
            setNosotros(resp.docs.map((doc)=>({...doc.data()})))
            setCargando(false)
            setError(false)
        }
        fetchMiembros()
        /* fetch("/data/nosotros.json")
            .then(response=>{
                if (!response.ok){
                    throw new Error("No se pudo cargar la informacion de <nosotros>")
                }
                return response.json()
            .then(datos=>setNosotros(datos))
            .catch(error=>setError(error))
            .finally(()=>setCargando(false))
            }) */
    },[])
    console.log(randoms)
    if (cargando){
        return <p>Cargando staff...</p>
    }
    if (error){
        return <p>Error:{error}</p>
    }
    return (
            <ul className="nosotrosContainer">
                {nosotros.map(miembro => {
                    if (randoms.includes(miembro.id))
                        return (
                        <li className="tarjetaDeContacto" key={miembro.id}>
                        <div className="tarjImgHolder">
                          <img className="tarjImg" src={miembro.imagenUrl} alt={miembro.nombre} width="200"/>  
                        </div>
                        <h3>{miembro.nombre}</h3>
                        <h4>{miembro.rol}</h4>
                        <h5>{miembro.email}</h5>
                        </li>
                    )}
                )}
            </ul>
    )
}

export default Nosotros