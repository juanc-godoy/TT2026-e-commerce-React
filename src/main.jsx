import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { CarritoProvider } from './components/Context/CarritoContext.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <CarritoProvider>
        <App />
      </CarritoProvider>
    </BrowserRouter>
  </StrictMode>,
)
const API='/data/productos.json'
fetch(API)
  .then(respuesta => {
    console.log('Respuesta cruda del servidor:', respuesta);
    return respuesta.json()})
  .then(datos => console.log('¡Productos cargados!', datos))
  .catch(error => console.error('¡Ups! Hubo un error:', error))
  .finally(() => console.log("llegamos al finally"))