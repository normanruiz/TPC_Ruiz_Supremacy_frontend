import React from 'react'
import ReactDOM from 'react-dom'

import Panel from './Panel'
import Eliminar from './Eliminar'
import Editar from './Editar'

class Listado extends React.Component {

  state = {
    usuarios: [],
    usuario: {}
  }

  componentDidMount () {
    fetch('http://localhost:51266/api/Usuario')
    .then((res) => res.json())
    .then((usuarios) => this.setState({usuarios}))
  }

  Recargar () {
    fetch('http://localhost:51266/api/Usuario')
    .then((res) => res.json())
    .then((usuarios) => this.setState({usuarios}))
  }

  EliminarUsuario (usuario) {
    ReactDOM.render(<Eliminar usuario={ usuario }/>, document.getElementById('usuarioSeccionActiva'))
  }

  EditarUsuario (usuario) {
    ReactDOM.render(<Editar usuario={ usuario }/>, document.getElementById('usuarioSeccionActiva'))
  }

  render () {
    this.Recargar()
    return(
      <div>
      <Panel/>
      <div className="row">
        <div className="col-sm-2">
        </div>
        <div className="col-sm-8">
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Id.</th>
                <th scope="col">Nombre</th>
                <th scope="col">Apellido</th>
                <th scope="col">Correo</th>
                <th scope="col">Perfil</th>
                <th scope="col">Usuario</th>
                <th scope="col">Contraseña</th>
                <th scope="col">Estado</th>
                <th scope="col"> </th>
                <th scope="col"> </th>
              </tr>
            </thead>
            <tbody>
              { this.state.usuarios.map((usuario) => (
                <tr key={ usuario.Id }>
                  <th scope="row">{ usuario.Id }</th>
                  <td>{ usuario.Nombre }</td>
                  <td>{ usuario.Apellido }</td>
                  <td>{ usuario.Correo }</td>
                  <td>{ usuario.Perfil.Tipo }</td>
                  <td>{ usuario.Usr }</td>
                  <td>{ usuario.Pwd }</td>
                  <td>{ usuario.Estado ? 'Activo' : 'Inactivo' }</td>
                  <td><button className="btn btn-outline-success my-2 my-sm-0" type="button" onClick={ () => this.EditarUsuario(usuario) }>Editar</button></td>
                  <td><button className="btn btn-outline-success my-2 my-sm-0" type="button" onClick={ () => this.EliminarUsuario(usuario) }>Eliminar</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="col-sm-2">
        </div>
      </div>
      </div>
    )
  }

}

export default Listado
