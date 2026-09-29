import { useState } from "react"

export function Favorito(){
    const [esFav, favOrNot]= useState(false)
    const clickFav= ()=>{
        favOrNot(!esFav)
        }
    return (
        <div>
            {esFav ? "Quitar favorito" : "Agregar a favoritos"}
            <span onClick={clickFav} style={{ fontSize: '24px'}}>
                {esFav ? '⭐' : '☆'}  
            </span>  
        </div>
        
    )
}

/*
style={{ fontSize: '24px'}}
if (esFav===false){
            favOrNot(esFav===true)
            //alert("Marcado como Favorito")   
        }
        else if(esFav===true){
            favOrNot(esFav===false)
            //alert("Desmarcado")
*/