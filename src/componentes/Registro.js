import React from 'react'
import { Link } from 'react-router-dom'
import '../css/componentRegistro.css'

const Registro = () => (
  <div className="login">
  	<h1>Inicio de sesion</h1>
      <form method="post">
      	<input type="text" name="u" placeholder="Usuario" required="required" />
          <input type="password" name="p" placeholder="Contraseña" required="required" />
          <Link to='/Administracion' className="btn-l btn-primary-l btn-block-l btn-large-l">Ingresar</Link>
          //<button type="submit" className="btn-l btn-primary-l btn-block-l btn-large-l">Let me in.</button>
      </form>
  </div>
)

export default Registro
