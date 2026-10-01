import { Routes, Route, Navigate } from 'react-router-dom'

import Encabezado from './layout/Encabezado.jsx'
import PieDePagina from './layout/PieDePagina.jsx'
import IrArriba from './layout/IrArriba.jsx'

import Inicio from './paginas/inicio/Inicio.jsx'
import Servicios from './paginas/servicios/Servicios.jsx'
import Sedes from './paginas/sedes/Sedes.jsx'
import Nosotros from './paginas/nosotros/Nosotros.jsx'
import Reservar from './paginas/reservar/Reservar.jsx'

/*
  SPA de cinco vistas. El encabezado y el pie viven fuera de <Routes>, así que
  no se desmontan al navegar: solo cambia el contenido de <main>.
*/
export default function App() {
  return (
    <>
      <div className="ambiente" aria-hidden="true" />
      <a className="saltar" href="#contenido">Saltar al contenido</a>

      <IrArriba />
      <Encabezado />

      <main id="contenido">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/sedes" element={<Sedes />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/reservar" element={<Reservar />} />
          {/* Cualquier ruta desconocida vuelve al inicio en lugar de dejar
              al usuario en una pantalla en blanco. */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <PieDePagina />
    </>
  )
}
