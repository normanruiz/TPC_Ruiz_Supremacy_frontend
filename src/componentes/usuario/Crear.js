import React from 'react'
import ReactDOM from 'react-dom'

import Listado from './Listado'

class Crear extends React.Component {

  constructor () {
    super()

    this.Guardar = this.Guardar.bind(this)

  }

  state = {
    usuario: {
      nombre: '',
      apellido: '',
      correo: '',
      perfil: {
        id: ''
      },
      usr: '',
      pwd: '',
      estado: ''
    },
    perfiles: []
  }

  handleChangeNombre = (event) => {
    this.setState ({
      usuario: {
        nombre: event.target.value,
        apellido: this.state.usuario.apellido,
        correo: this.state.usuario.correo,
        perfil: {
          id: this.state.usuario.perfil.id
        },
        usr: this.state.usuario.usr,
        pwd: this.state.usuario.pwd,
        estado: 1
      }
    })
  }

  handleChangeApellido = (event) => {
    this.setState ({
      usuario: {
        nombre: this.state.usuario.nombre,
        apellido: event.target.value,
        correo: this.state.usuario.correo,
        perfil: {
          id: this.state.usuario.perfil.id
        },
        usr: this.state.usuario.usr,
        pwd: this.state.usuario.pwd,
        estado: 1
      }
    })
  }

  handleChangeCorreo = (event) => {
    this.setState ({
      usuario: {
        nombre: this.state.usuario.nombre,
        apellido: this.state.usuario.apellido,
        correo: event.target.value,
        perfil: {
          id: this.state.usuario.perfil.id
        },
        usr: this.state.usuario.usr,
        pwd: this.state.usuario.pwd,
        estado: 1
      }
    })
  }

  handleChangePerfil = (event) => {
    this.setState ({
      usuario: {
        nombre: this.state.usuario.nombre,
        apellido: this.state.usuario.apellido,
        correo: this.state.usuario.correo,
        perfil: {
          id: event.target.value,
        },
        usr: this.state.usuario.usr,
        pwd: this.state.usuario.pwd,
        estado: 1
      }
    })
  }

  handleChangeUsuario = (event) => {
    this.setState ({
      usuario: {
        nombre: this.state.usuario.nombre,
        apellido: this.state.usuario.apellido,
        correo: this.state.usuario.correo,
        perfil: {
          id: this.state.usuario.perfil.id
        },
        usr: event.target.value,
        pwd: this.state.usuario.pwd,
        estado: 1
      }
    })
  }

  handleChangeContrasenia = (event) => {
    this.setState ({
      usuario: {
        nombre: this.state.usuario.nombre,
        apellido: this.state.usuario.apellido,
        correo: this.state.usuario.correo,
        perfil: {
          id: this.state.usuario.perfil.id
        },
        usr: this.state.usuario.usr,
        pwd: event.target.value,
        estado: 1
      }
    })
  }

  CargarPerfiles () {
      fetch('http://localhost:51266/api/Perfil')
      .then((res) => res.json())
      .then((perfiles) => this.setState({perfiles}))
  }

  Guardar () {

    var api = 'http://localhost:51266/api/usuario'
    var usuario = this.state.usuario

    fetch(api, {
      method: 'POST',
      body: JSON.stringify(usuario),
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Proceso:', response))

    ReactDOM.render(<Listado/>, document.getElementById('usuarioSeccionActiva'))
  }

  Cancelar () {
    ReactDOM.render(<Listado/>, document.getElementById('usuarioSeccionActiva'))
  }

  render () {
    this.CargarPerfiles()
    return (
      <form>
        <h4>Alta de usuario</h4>
        <hr className="my-4"/>

        <div className="form-row">
          <div className="col-md-6 mb-3">
            <label for="validationServer01">Nombre</label>
            <input type="text" className="form-control is-valid" id="validationServer01" value={ this.state.usuario.nombre } onChange={ this.handleChangeNombre } required/>
            <div className="valid-feedback">
              Looks good!
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <label for="validationServer02">Apellido</label>
            <input type="text" className="form-control is-valid" id="validationServer02" value={ this.state.usuario.apellido } onChange={ this.handleChangeApellido } required/>
            <div className="valid-feedback">
              Looks good!
            </div>
          </div>
        </div>

        <div className="form-row">
          <div className="col-md-9 mb-3">
            <label for="validationServer03">Correo</label>
            <input type="email" className="form-control is-invalid" id="validationServer03" value={ this.state.usuario.correo } onChange={ this.handleChangeCorreo } required/>
            <div className="invalid-feedback">
              Please provide a valid city.
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <label for="validationServer04">Perfil</label>
            <select className="custom-select is-invalid" id="validationServer04" value={ this.state.usuario.perfil.Id } onChange={ this.handleChangePerfil } required>
            { this.state.perfiles.filter( perfil => perfil.Estado == 1 ).map( ( perfil ) => (
              <option key={ perfil.Id } value={ perfil.Id }> { perfil.Tipo } </option>
            ))}
            </select>
            <div className="invalid-feedback">
              Please select a valid state.
            </div>
          </div>
        </div>

        <div className="form-row">
          <div className="col-md-6 mb-3">
            <label for="validationServer01">Usuario</label>
            <input type="text" className="form-control is-valid" id="validationServer01" value={ this.state.usuario.usr } onChange={ this.handleChangeUsuario } required/>
            <div className="valid-feedback">
              Looks good!
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <label for="validationServer02">Contraseña</label>
            <input type="password" className="form-control is-valid" id="validationServer02" value={ this.state.usuario.pwd } onChange={ this.handleChangeContrasenia } required/>
            <div className="valid-feedback">
              Looks good!
            </div>
          </div>
        </div>

        <hr className="my-4"/>
        <button type="button" className="btn btn-outline-success my-2 my-sm-0" onClick={ this.Guardar } >Guardar</button>
        <button type="button" className="btn btn-outline-success my-2 my-sm-0" onClick={ this.Cancelar } >Cancelar</button>
      </form>

    )
  }

}

export default Crear
