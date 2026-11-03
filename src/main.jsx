import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { CarritoProvider } from './components/Context/CarritoContext'
import { AuthProvider } from './components/Context/AuthContext'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <CarritoProvider>
          <App/>
        </CarritoProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
