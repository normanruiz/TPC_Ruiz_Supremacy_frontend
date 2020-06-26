import React from 'react'
import '../css/componentRegistro.css'

const Registro = () => (
  <div className="login">
  	<h1>Inicio de sesion</h1>
      <form method="post">
      	<input type="text" name="u" placeholder="Usuario" required="required" />
          <input type="password" name="p" placeholder="Contraseña" required="required" />
          <a href='/Administracion' className="btn-l btn-primary-l btn-block-l btn-large-l">Ingresar</a>
      </form>
  </div>
)

export default Registro
