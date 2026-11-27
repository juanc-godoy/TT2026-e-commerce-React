import "./App.css"
import {Layout} from "./components/Layout/Layout"
import { Route, Routes } from "react-router-dom"
import Productos from "./components/Productos/Productos"
import Carrito from "./components/Carrito"
import UnicoProducto from "./components/Productos/UnicoProducto"
import Gestion from "./components/Gestion/Gestion"
import Login from "./components/Login/Login"
import Registro from "./components/Registro/Registro"
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute"
import { SearchProvider } from "./components/Context/SearchContext"

function App(){
  return (
    <>
      <SearchProvider>
        <Routes>
          <Route element={<Layout/>} >
            <Route path="/" element={<Productos />} />
            <Route path="/contacto" element={<h1>Contacto...EN DESARROLLO</h1> } />
            <Route path="/productos/" element={<Productos/>} />
            <Route path="/producto/:id" element={<UnicoProducto />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/gestion" element={
              <ProtectedRoute rolesPermitidos={['admin']}>
                <Gestion />
              </ProtectedRoute>} />
            <Route path="/registro" element={<Registro />} /> 
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </SearchProvider>
    </>
    
  )
}

export default App