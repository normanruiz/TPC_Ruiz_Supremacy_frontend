import React from 'react'
import ReactDOM from 'react-dom'

import Panel from './Panel'
import Eliminar from './Eliminar'
import Editar from './Editar'

class Listado extends React.Component {

  state = {
    notas: []
  }

  componentDidMount () {
    fetch('http://localhost:51266/api/Nota')
    .then((res) => res.json())
    .then((notas) => this.setState({notas}))
  }

  Recargar () {
    fetch('http://localhost:51266/api/Nota')
    .then((res) => res.json())
    .then((notas) => this.setState({notas}))
  }

  EliminarNota (nota) {
    ReactDOM.render(<Eliminar nota={ nota }/>, document.getElementById('notaSeccionActiva'))
  }

  EditarNota (nota) {
    ReactDOM.render(<Editar nota={ nota }/>, document.getElementById('notaSeccionActiva'))
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
                <th scope="col">IdPaciente.</th>
                <th scope="col">Fecha</th>
                <th scope="col">Detalle</th>
                <th scope="col">estado</th>
                <th scope="col"> </th>
                <th scope="col"> </th>
              </tr>
            </thead>
            <tbody>
              { this.state.notas.map((nota) => (
                <tr key={ nota.Id }>
                  <th scope="row">{ nota.Id }</th>
                  <td>{ nota.IdPaciente }</td>
                  <td>{ nota.Fecha }</td>
                  <td>{ nota.Detalle }</td>
                  <td>{ nota.Estado ? 'Activo' : 'Inactivo' }</td>
                  <td><button className="btn btn-outline-success my-2 my-sm-0" type="button" onClick={ () => this.EditarNota(nota) }>Editar</button></td>
                  <td><button className="btn btn-outline-success my-2 my-sm-0" type="button" onClick={ () => this.EliminarNota(nota) }>Eliminar</button></td>
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
