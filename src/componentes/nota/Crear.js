import React from 'react'
import ReactDOM from 'react-dom'

import Listado from './Listado'

class Crear extends React.Component {

  constructor () {
    super()

    this.Guardar = this.Guardar.bind(this)

  }

  state = {
    pacientes:[],
    nota: {}
  }

  componentDidMount () {
    fetch('http://localhost:51266/api/Paciente')
    .then((res) => res.json())
    .then((pacientes) => this.setState({pacientes}))
  }

  handleChangePaciente = (event) => {
    this.setState ({
      nota: {
        idPAciente: event.target.value,
        detalle: this.state.nota.detalle,
        estado: 1
      }
    })
  }

  handleChangeDetalle = (event) => {
    this.setState ({
      nota: {
        idPAciente: this.state.nota.idPAciente,
        detalle: event.target.value,
        estado: 1
      }
    })
  }

  Guardar () {

    var api = 'http://localhost:51266/api/nota'
    var nota = this.state.nota
    var today = new Date(), date = today.getFullYear() + '/' + (today.getMonth() + 1) + '/' + today.getDate();
    nota.Fecha = today
    fetch(api, {
      method: 'POST',
      body: JSON.stringify(nota),
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Proceso:', response))

    ReactDOM.render(<Listado/>, document.getElementById('notaSeccionActiva'))
  }

  Cancelar () {
    ReactDOM.render(<Listado/>, document.getElementById('notaSeccionActiva'))
  }

  CargarPacientes() {
      fetch('http://localhost:51266/api/Paciente')
      .then((res) => res.json())
      .then((pacientes) => this.setState({pacientes}))
  }

  render () {
    this.CargarPacientes()
    return (
      <form>
        <h4>Alta de notas</h4>
        <hr className="my-4"/>

        <div className="form-row">
          <div className="col-md-6 mb-3">
            <label for="validationServer04">Pacientes</label>
            <select className="custom-select is-invalid" id="validationServer04" value={ this.state.nota.IdPaciente } onChange={ this.handleChangePaciente } required>
            { this.state.pacientes.filter( paciente => paciente.Estado == 1 ).map( ( paciente ) => (
              <option key={ paciente.Id } value={ paciente.Id }> { paciente.Apellido } - { paciente.Nombre } </option>
            ))}
            </select>
            <div className="invalid-feedback">
              Please select a valid state.
            </div>
          </div>

        </div>

        <div className="form-row">
          <div className="col-md-9 mb-3">
            <label for="validationServer01">Detalle</label>
            <textarea class="form-control is-valid" id="exampleFormControlTextarea1" rows="3" value={ this.state.nota.detalle } onChange={ this.handleChangeDetalle } required></textarea>
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
