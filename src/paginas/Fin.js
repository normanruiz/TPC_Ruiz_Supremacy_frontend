import React from 'react'
import { Link } from 'react-router-dom'

const Fin = () => (
  <div>
      <h1>Pagina de despedida y confirmacion de desconeccion </h1>
      <h2>Ver de nuevo el curso extra react router 5 para poder manejar el historial de navegacion y volver a la pagina anterior</h2>
      <Link to='/Administracion'>Volver</Link>
      <Link to='/Inicio'>Salir</Link>
  </div>
)

export default Fin
