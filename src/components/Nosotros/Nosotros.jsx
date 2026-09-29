import { useState, useEffect} from "react"

function Nosotros(){
    const [nosotros,setNosotros]=useState([])
    const [cargando,setCargando]=useState(true)
    const [error,setError]=useState(null)

    //const fetch="/data/nosotros.json"

    useEffect(() => {
        fetch("/data/nosotros.json")
            .then(response=>{
                if (!response.ok){
                    throw new Error("No se pudo cargar la informacion de <nosotros>")
                }
                return response.json()
            .then(datos=>setNosotros(datos))
            .catch(error=>setError(error))
            .finally(()=>setCargando(false))
            })
    },[])
    if (cargando){
        return <p>Cargando staff</p>
    }
    if (error){
        return <p>Error:{error}</p>
    }
    return (
        <div>
            
            <ul className="nosotrosContainer">
                {nosotros.map(persona=>(
                    <li className="tarjetaDeContacto" key={persona.id}>
                        <div className="tarjImgHolder">
                          <img className="tarjImg"src={persona.foto} alt={persona.nombre} width="200"/>  
                        </div>
                        <h3>{persona.nombre}</h3>
                        <p>{persona.puesto}</p>
                        <p>{persona.email}</p>
                        
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Nosotros