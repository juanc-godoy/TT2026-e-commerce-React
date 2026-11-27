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
    
    useEffect(() => {
        const fetchMiembros= async()=>{
            const miembrosRef= collection(db,"miembros")
            const resp= await getDocs(miembrosRef)
            setNosotros(resp.docs.map((doc)=>({...doc.data()})))
            setCargando(false)
            setError(false)
        }
        fetchMiembros()
    },[])
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
                        <div className="cardInfo">
                            <h3>{miembro.nombre}</h3>
                            <h4>{miembro.rol}</h4>
                            <h5>{miembro.email}</h5>
                        </div>
                        </li>
                    )}
                )}
            </ul>
    )
}

export default Nosotros