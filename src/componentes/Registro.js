import React from 'react'
import { Redirect } from 'react-router-dom'
import '../css/componentRegistro.css'


class Registro extends React.Component {

  constructor(){
    super()

    this.Registrarse = this.Registrarse.bind(this)

  }

  state = {
    usuario: {
      Usr: '',
      Pwd: ''
    }
  }

  handleChangeUsuario = (event) => {
    this.setState ({
      usuario: {
        Usr: event.target.value,
        Pwd: this.state.usuario.Pwd
      }
    })
  }

  handleChangeContrasenia = (event) => {
    this.setState ({
      usuario: {
        Usr: this.state.usuario.Usr,
        Pwd: event.target.value
      }
    })
  }

  Registrarse () {
    var api = 'http://localhost:51266/api/Usuario/registrarse'
    var usuario = this.state.usuario
        console.log(this.state.usuario)
    fetch(api, {
      method: 'POST',
      body: JSON.stringify(usuario),
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .then((usuario) => {
          console.log(usuario)
      if(usuario == null) {
        alert('Usuario o contraseña incorrectos !!!')
      } else {
        this.setState({usuario})
        console.log(this.state.usuario)
        if(this.state.usuario.Perfil.Tipo == 'Administrador'){
          alert('Ingresa un adminsitrador')
        } else if (this.state.usuario.Perfil.Tipo == 'Recepcionista') {
          alert('Ingresa un recepcionista')
        } else {
          alert('Comuniquese con el administrador')
        }
      }
    }
)


  }

  render() {
      return (

        <div className="login">
  	     <h1>Inicio de sesion</h1>
          <form method="post">
      	   <input type="text" name="u" placeholder="Usuario" required="required" value={ this.state.usuario.Usr } onChange={ this.handleChangeUsuario } />
          <input type="password" name="p" placeholder="Contraseña" required="required" value={ this.state.usuario.Pwd } onChange={ this.handleChangeContrasenia } />
          <button className="btn btn-outline-success my-2 my-sm-0" type="button" onClick={ this.Registrarse }>Ingresar</button>
          <a href='/Administracion' className="btn-l btn-primary-l btn-block-l btn-large-l">Ingresar</a>
        </form>
      </div>
    )
  }
}

export default Registro
