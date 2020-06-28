import React from 'react'
import ReactDOM from 'react-dom'

import Panel from './Panel'
import Eliminar from './Eliminar'
import Editar from './Editar'

class Listado extends React.Component {

  state = {
    pacientes: []
  }

  componentDidMount () {
    fetch('http://localhost:51266/api/Paciente')
    .then((res) => res.json())
    .then((pacientes) => this.setState({pacientes}))
  }

  Recargar () {
    fetch('http://localhost:51266/api/Paciente')
    .then((res) => res.json())
    .then((pacientes) => this.setState({pacientes}))
  }

  EliminarPaciente (paciente) {
    ReactDOM.render(<Eliminar paciente={ paciente }/>, document.getElementById('pacienteSeccionActiva'))
  }

  EditarPaciente (paciente) {
    ReactDOM.render(<Editar paciente={ paciente }/>, document.getElementById('pacienteSeccionActiva'))
  }

  render () {
    this.Recargar()

    return(
      <div>
      <Panel/>
      <div className="row">
        <div className="col-sm-12">
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Id.</th>
                <th scope="col">Nombre</th>
                <th scope="col">Apellido</th>
                <th scope="col">Sexo</th>
                <th scope="col">Fecha de nacimiento</th>
                <th scope="col">Estado</th>
                <th scope="col">Historial medico</th>
                <th scope="col"> </th>
                <th scope="col"> </th>
                <th scope="col"> </th>
              </tr>
            </thead>
            <tbody>
              { this.state.pacientes.map((paciente) => (
                <tr key={ paciente.Id }>
                  <th scope="row">{ paciente.Id }</th>
                  <td>{ paciente.Nombre }</td>
                  <td>{ paciente.Apellido }</td>
                  <td>{ paciente.Sexo == 'M' ? 'Masculino' : 'Femenino' }</td>
                  <td>{ paciente.FechaNacimiento }</td>
                  <td>{ paciente.Estado ? 'Activo' : 'Inactivo' }</td>
                  <td><button className="btn btn-outline-success my-2 my-sm-0" type="button" onClick={ () => this.VerHistorial(paciente) }>Ver</button></td>
                  <td><button className="btn btn-outline-success my-2 my-sm-0" type="button" onClick={ () => this.EditarPaciente(paciente) }>Editar</button></td>
                  <td><button className="btn btn-outline-success my-2 my-sm-0" type="button" onClick={ () => this.EliminarPaciente(paciente) }>Eliminar</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      </div>
    )
  }

}

export default Listado
