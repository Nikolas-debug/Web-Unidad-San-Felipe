import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'

import './estilos/tokens.css'
import './estilos/base.css'
import './estilos/cascaron.css'
import './estilos/inicio.css'
import './estilos/servicios.css'
import './estilos/sedes.css'
import './estilos/nosotros.css'
import './estilos/reservar.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
