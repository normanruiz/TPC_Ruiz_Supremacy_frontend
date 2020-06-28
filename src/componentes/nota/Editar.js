import React from 'react'
import ReactDOM from 'react-dom'

import Listado from './Listado'

class Editar extends React.Component {

  constructor () {
    super()

    this.Guardar = this.Guardar.bind(this)

  }

  state = {
    pacientes:[],
    nota: {}
  }

  componentDidMount () {
    this.setState ({
      nota: {
        id: this.props.nota.Id,
        idPaciente: this.props.nota.IdPaciente,
        detalle: this.props.nota.Detalle,
        estado: this.props.nota.Estado
      }
    })
    console.log(this.props.nota)
  }

  handleChangePaciente = (event) => {
    this.setState ({
      nota: {
        id: this.state.nota.id,
        idPaciente: event.target.value,
        detalle: this.state.nota.detalle,
        estado: this.state.nota.estado
      }
    })
  }

  handleChangeDetalle = (event) => {
    this.setState ({
      nota: {
        id: this.state.nota.id,
        idPaciente: this.state.nota.idPAciente,
        detalle: event.target.value,
        estado: this.state.nota.estado
      }
    })
  }

  handleChangeEstado = (event) => {
    this.setState ({
      nota: {
        id: this.state.nota.id,
        idPaciente: this.state.nota.idPaciente,
        detalle: this.state.nota.detalle,
        estado: event.target.checked
      }
    })
  }

  Guardar () {

    var api = 'http://localhost:51266/api/Nota/' + this.state.nota.id
    var nota = this.state.nota
    var today = new Date(), date = today.getFullYear() + '/' + (today.getMonth() + 1) + '/' + today.getDate();
    nota.Fecha = today
    console.log(nota)
    console.log(this.state.nota)
    fetch(api, {
      method: 'PUT',
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
            <select className="custom-select is-invalid" id="validationServer04" value={ this.state.nota.idPaciente } onChange={ this.handleChangePaciente } required>
            { this.state.pacientes.filter( paciente => paciente.Estado == 1 ).map( ( paciente ) => {
              console.log(paciente.Id)
              console.log(this.state.nota.IdPaciente)
              console.log(paciente.Id == this.state.nota.idPaciente)
              if ( paciente.Id == this.state.nota.idPaciente ) {
                return <option selected key={ paciente.Id } value={ paciente.Id }> { paciente.Apellido } - { paciente.Nombre } </option>
              } else {
                return <option key={ paciente.Id } value={ paciente.Id }> { paciente.Apellido } - { paciente.Nombre } </option>
              }

            })}
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

        <div className="form-row">
          <div className="custom-control custom-switch">
            <input type="checkbox" className="custom-control-input" id="customSwitch1" checked={ this.state.nota.estado } onChange={ this.handleChangeEstado } />
            <label className="custom-control-label" for="customSwitch1">Estado</label>
          </div>
        </div>

        <hr className="my-4"/>
        <button type="button" className="btn btn-outline-success my-2 my-sm-0" onClick={ this.Guardar } >Guardar</button>
        <button type="button" className="btn btn-outline-success my-2 my-sm-0" onClick={ this.Cancelar } >Cancelar</button>
      </form>

    )
  }
}

export default Editar
