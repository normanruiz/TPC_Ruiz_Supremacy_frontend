import React from 'react'
import ReactDOM from 'react-dom'

import Eliminar from './Eliminar'
import Editar from './Editar'

class Listado extends React.Component {

  state = {
    perfiles: [],
    perfil: {}
  }

  componentDidMount () {
    fetch('http://localhost:51266/api/Perfil')
    .then((res) => res.json())
    .then((perfiles) => this.setState({perfiles}))
  }

  Recargar () {
    fetch('http://localhost:51266/api/Perfil')
    .then((res) => res.json())
    .then((perfiles) => this.setState({perfiles}))
  }

  EliminarPerfil (perfil) {
    ReactDOM.render(<Eliminar perfil={ perfil }/>, document.getElementById('perfilSeccionActiva'))
  }

  EditarPerfil (perfil) {
    ReactDOM.render(<Editar perfil={ perfil }/>, document.getElementById('perfilSeccionActiva'))
  }

  render () {
    this.Recargar()
    return(
      <div className="row">
        <div className="col-sm-2">
        </div>
        <div className="col-sm-8">
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Id.</th>
                <th scope="col">Perfil</th>
                <th scope="col">Estado</th>
                <th scope="col"> </th>
                <th scope="col"> </th>
              </tr>
            </thead>
            <tbody>
              { this.state.perfiles.map((perfil) => (
                <tr key={ perfil.Id }>
                  <th scope="row">{ perfil.Id }</th>
                  <td>{ perfil.Tipo }</td>
                  <td>{ perfil.Estado ? 'Activo' : 'Inactivo' }</td>
                  <td><button className="btn btn-outline-success my-2 my-sm-0" type="button" onClick={ () => this.EditarPerfil(perfil) }>Editar</button></td>
                  <td><button className="btn btn-outline-success my-2 my-sm-0" type="button" onClick={ () => this.EliminarPerfil(perfil) }>Eliminar</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="col-sm-2">
        </div>
      </div>
    )
  }

}

export default Listado
