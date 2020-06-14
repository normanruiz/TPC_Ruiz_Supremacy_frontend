import React from 'react'
import { Link } from 'react-router-dom'

const Error =()=> (
  <div>
    <h1>Pagina de error</h1>
    <h2>Ver de nuevo el curso extra react router 5 para poder manejar el historial de navegacion y volver a la pagina anterior</h2>
    <Link to='/Administracion'>volver</Link>
  </div>
)

export default Error 
