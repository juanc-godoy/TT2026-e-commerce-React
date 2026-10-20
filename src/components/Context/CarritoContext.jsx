import {useState, useContext, createContext} from "react"

// eslint-disable-next-line react-refresh/only-export-components
export const CarritoContext=createContext()

// eslint-disable-next-line react-refresh/only-export-components
export const useCart= ()=>{
    const context=useContext(CarritoContext)
    if (!context){
        throw new Error("useCart debe ser usado dentro de un CartProvider")
    }
    return context
}

export const CarritoProvider= ({children}) =>{
    const [carrito, setCarrito]= useState([])

    const addToCarrito= (producto,cantidad)=>{
        const itemInCarrito= carrito.find(item=> item.id=== producto.id)
        if (itemInCarrito){
            const updatedCarrito= carrito.map(item=>
                item.id===producto.id
                ?{...item, cantidad: item.cantidad+cantidad}
                : item
            );
            setCarrito(updatedCarrito)
        }else{
            setCarrito(prevCarrito=>[...prevCarrito,{...producto, cantidad}])
        }
    }

    const clearCarrito=()=>{
        setCarrito([])
    }

    const cantidadEnCarrito=()=>{
        return carrito.reduce((acc,item)=>acc+item.cantidad,0)
    }

    const totalCarrito=()=>{
        return carrito.reduce((acc,item)=>acc+item.precio*item.cantidad,0)
    }

    const getCantidadActual=(productoId)=>{
        const item= carrito.find(item=>item.id===productoId)
        return item
        ? item.cantidad
        : 0
    }
    const removeItem=(productId)=>{
        const updatedCarrito= carrito.filter(item=>item.id!==productId)
        setCarrito(updatedCarrito)
    }
    const isInCarrito=(productId)=>{
        return carrito.some(item=> item.id===productId)
    }
    return(
        <CarritoContext.Provider value={{carrito, addToCarrito, clearCarrito, cantidadEnCarrito, totalCarrito, getCantidadActual, removeItem, isInCarrito}} >
            {children}
        </CarritoContext.Provider>
    )
}



/*
const isInCart = (productId) => {
return cart.some(item => item.id === productId);
}
*/