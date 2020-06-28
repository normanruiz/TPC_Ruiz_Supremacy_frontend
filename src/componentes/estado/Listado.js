import React from 'react'
import ReactDOM from 'react-dom'

import Panel from './Panel'
import Eliminar from './Eliminar'
import Editar from './Editar'

class Listado extends React.Component {

  state = {
    estados: []
  }

  componentDidMount () {
    fetch('http://localhost:51266/api/Estado')
    .then((res) => res.json())
    .then((estados) => this.setState({estados}))
  }

  Recargar () {
    fetch('http://localhost:51266/api/Estado')
    .then((res) => res.json())
    .then((estados) => this.setState({estados}))
  }

  EliminarEstado (estado) {
    ReactDOM.render(<Eliminar estado={ estado }/>, document.getElementById('estadoSeccionActiva'))
  }

  EditarEstado (estado) {
    ReactDOM.render(<Editar estado={ estado }/>, document.getElementById('estadoSeccionActiva'))
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
                <th scope="col">Tipo</th>
                <th scope="col">Estado</th>
                <th scope="col"> </th>
                <th scope="col"> </th>
              </tr>
            </thead>
            <tbody>
              { this.state.estados.map((estado) => (
                <tr key={ estado.Id }>
                  <th scope="row">{ estado.Id }</th>
                  <td>{ estado.Tipo }</td>
                  <td>{ estado.estado ? 'Activo' : 'Inactivo' }</td>
                  <td><button className="btn btn-outline-success my-2 my-sm-0" type="button" onClick={ () => this.EditarEstado(estado) }>Editar</button></td>
                  <td><button className="btn btn-outline-success my-2 my-sm-0" type="button" onClick={ () => this.EliminarEstado(estado) }>Eliminar</button></td>
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
