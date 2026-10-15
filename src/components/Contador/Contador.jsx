//import { useState } from "react";
import { useCart } from "../Context/CarritoContext";

export function Contador(id){
    const {getCantidadActual}= useCart()
    const cantidadActual=getCantidadActual(id)
    
    return (
        <div className="contador">
            <h3>Unidades en carrito: {cantidadActual} </h3>
        </div>
    );
}
/*
/ En componentes/Contador/Contador.jsx
// Importamos 'useState' desde React.
import { useState } from 'react';
export function Contador() {
const [contador, setContador] = useState(0);
const incrementar = () => {
setContador(contador + 1); //¡Usamos la función para actualizar el estado!
};
//Continúa
*/

/*
const decrementar = () => {
setContador(contador - 1);
};
return (
<div style={{ margin: '20px', padding: '20px', border: '1px solid black'
}}>
<h3>Contador de Ejemplo</h3>
<p>Valor actual: {contador}</p>
<button onClick={incrementar}>Sumar +1</button>
<button onClick={decrementar}>Restar -1</button>
</div>
);
}
*/