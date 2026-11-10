import { useState } from "react"

export function Favorito(){
    const [esFav, favOrNot]= useState(false)
    const clickFav= ()=>{
        favOrNot(!esFav)
        }
    return (
        <span onClick={clickFav} >
            {esFav ? '⭐' : '☆'}
        </span>
        
    )
}

/*

*/