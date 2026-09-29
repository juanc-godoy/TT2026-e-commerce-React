import "./App.css"
import {Layout} from "./components/Layout/Layout"
import Productos from "./components/Productos/Productos"
import Carrito from "./components/Carrito"
//import FormularioContainer from "./components/FormularioContainer"
import { Route, Routes } from "react-router-dom"

function App(){
  return (
    <>
      <Routes>
        <Route element={<Layout/>} >
          <Route path="/" element={<Productos />} />
          <Route path="/contacto" element={<h1>Contacto</h1> } />
          <Route path="/productos/" element={<Productos/>} />
          <Route path="/producto/:id" element={<h1>Producto X ID</h1>} />
          <Route path="/carrito" element={<Carrito />} />
        </Route>
      </Routes>
    </>
    
  )
}

export default App

/*
  <Layout>
        <h1 className= "titulo" >¡Bienvenidos a mi página!</h1>
        <p className= "titulo" >Este es el contenido principal</p>
        <Productos />
        <FormularioContainer />
  </Layout>
*/