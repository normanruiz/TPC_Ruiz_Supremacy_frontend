import React from 'react'
import ReactDOM from 'react-dom'

import Panel from './Panel'
import Eliminar from './Eliminar'
import Editar from './Editar'

class Listado extends React.Component {

  state = {
    medicos: [],
    medico: {}
  }

  componentDidMount () {
    fetch('http://localhost:51266/api/Medico')
    .then((res) => res.json())
    .then((medicos) => this.setState({medicos}))
  }

  Recargar () {
    fetch('http://localhost:51266/api/Medico')
    .then((res) => res.json())
    .then((medicos) => this.setState({medicos}))
  }

  EliminarMedico (medico) {
    ReactDOM.render(<Eliminar medico={ medico }/>, document.getElementById('medicoSeccionActiva'))
  }

  EditarMedico (medico) {
    ReactDOM.render(<Editar medico={ medico }/>, document.getElementById('medicoSeccionActiva'))
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
                <th scope="col">Estado</th>
                <th scope="col"> </th>
                <th scope="col"> </th>
              </tr>
            </thead>
            <tbody>
              { this.state.medicos.map((medico) => (
                <tr key={ medico.Id }>
                  <th scope="row">{ medico.Id }</th>
                  <td>{ medico.Nombre }</td>
                  <td>{ medico.Apellido }</td>
                  <td>{ medico.Correo }</td>
                  <td>{ medico.Estado ? 'Activo' : 'Inactivo' }</td>
                  <td><button className="btn btn-outline-success my-2 my-sm-0" type="button" onClick={ () => this.EditarMedico(medico) }>Editar</button></td>
                  <td><button className="btn btn-outline-success my-2 my-sm-0" type="button" onClick={ () => this.EliminarMedico(medico) }>Eliminar</button></td>
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
