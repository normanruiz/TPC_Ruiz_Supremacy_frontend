import React from 'react'
import ReactDOM from 'react-dom'

import Listado from './Listado'

class Editar extends React.Component {

  constructor () {
    super()

    this.Guardar = this.Guardar.bind(this)

  }

  state = {
    estado: {}
  }

  componentDidMount () {
    console.log(this.props.estado)
    this.setState ({
      estado: {
        id: this.props.estado.Id,
        tipo: this.props.estado.Tipo,
        estado: this.props.estado.estado
      }
    })
  }

  handleChangeTipo = (event) => {
    this.setState ({
      estado: {
        id: this.state.estado.id,
        tipo: event.target.value,
        estado: this.state.estado.estado
      }
    })
  }

  handleChangeEstado= (event) => {
      this.setState ({
        estado: {
          id: this.state.estado.id,
          tipo: this.state.estado.tipo,
          estado: event.target.checked
        }
      })
  }


  Guardar () {
console.log(this.state.estado)
    var api = 'http://localhost:51266/api/Estado/' + this.state.estado.id
    var estado = this.state.estado

    fetch(api, {
      method: 'PUT',
      body: JSON.stringify(estado),
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Proceso:', response))

    ReactDOM.render(<Listado/>, document.getElementById('estadoSeccionActiva'))
  }

  Cancelar () {
    ReactDOM.render(<Listado/>, document.getElementById('estadoSeccionActiva'))
  }

  render () {
    return (
      <form>
        <h4>Alta de medico</h4>
        <hr className="my-4"/>

        <div className="form-row">
          <div className="col-md-12 mb-3">
            <label for="validationServer03">Tipo</label>
            <input type="email" className="form-control is-invalid" id="validationServer03" value={ this.state.estado.tipo } onChange={ this.handleChangeTipo } required/>
            <div className="invalid-feedback">
              Please provide a valid city.
            </div>
          </div>
        </div>

        <div className="form-row">
          <div className="custom-control custom-switch">
            <input type="checkbox" className="custom-control-input" id="customSwitch1" checked={ this.state.estado.estado } onChange={ this.handleChangeEstado } />
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
