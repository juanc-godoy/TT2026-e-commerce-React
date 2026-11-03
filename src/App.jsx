import "./App.css"
import {Layout} from "./components/Layout/Layout"
import { Route, Routes } from "react-router-dom"
import Productos from "./components/Productos/Productos"
import Carrito from "./components/Carrito"
import UnicoProducto from "./components/Productos/UnicoProducto"
import AltaProducto from "./components/Productos/AltaProducto"
import ProductosNacionales from "./components/ProductosNacionales"
import UnicoProductoNac from "./components/UnicoProductoNac"
import Gestion from "./components/Gestion/Gestion"
import Login from "./components/Login/Login"
//import FormularioContainer from "./components/FormularioContainer"


function App(){
  return (
    <>
      <Routes>
        <Route element={<Layout/>} >
          <Route path="/" element={<Productos />} />
          <Route path="/contacto" element={<h1>Contacto...EN DESARROLLO</h1> } />
          <Route path="/productos/" element={<Productos/>} />
          <Route path="/producto/:id" element={<UnicoProducto />} />
          <Route path="/productosNac/" element={<ProductosNacionales/>} />
          <Route path="/productosNac/:id" element={<UnicoProductoNac/>} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/alta" element={<AltaProducto />} /> 
          <Route path="/gestion" element={<Gestion />} /> 
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </>
    
  )
}

export default App