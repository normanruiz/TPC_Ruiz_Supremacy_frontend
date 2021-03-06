import React from 'react'
import { Link } from 'react-router-dom'

class Paciente extends React.Component {

  state = {
    pacientes: []
  }

  componentDidMount () {
    fetch('http://localhost:51266/api/Paciente')
    .then((res) => res.json())
    .then((pacientes) => this.setState({pacientes}))
    /*.catch((error) => {

    })*/
  }

  render(){
    return (

      <div className="container">

        <div className="row">
          <div className="col-sm-1">
          </div>
          <div className="col-sm-10">
            <div className="container">
              Administracion de Pacientes
            </div>
          </div>
          <div className="col-sm-1">
        </div>
      </div>
        <div className="row">
          <div className="col-sm-1">
          </div>
          <div className="col-sm-10">
            <div className="container">
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/Administracion" >Volver</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <div className="navbar-nav mr-auto">
                  </div>
                  <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Nuevo</button>
                  <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Que busca..." aria-label="Search"></input>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
                  </form>
                </div>
              </nav>
            </div>
          </div>
          <div className="col-sm-1">
          </div>
        </div>

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
    <th scope="col">Sexo</th>
    <th scope="col">Fecha de nacimiento</th>
    <th scope="col">Historial Medico</th>
    <th scope="col">Estado</th>
    <th scope="col"> </th>
    <th scope="col"> </th>
  </tr>
</thead>
<tbody>
{this.state.pacientes.map((pacientes) => (
  <tr key={pacientes.Id}>
    <th scope="row">{pacientes.Id}</th>
    <td>{pacientes.Nombre}</td>
    <td>{pacientes.Apellido}</td>
    <td>{pacientes.Sexo}</td>
    <td>{pacientes.FechaNacimiento}</td>
    <td><button className="btn btn-outline-success my-2 my-sm-0" type="submit">Ver</button></td>
    <td>{pacientes.Estado}</td>
    <td><button className="btn btn-outline-success my-2 my-sm-0" type="submit">Editar</button></td>
    <td><button className="btn btn-outline-success my-2 my-sm-0" type="submit">Eliminar</button></td>
  </tr>
))}
</tbody>
</table>

  </div>
  <div className="col-sm-2">

  </div>
</div>

<div className="row">
  <div className="col-sm-1">

  </div>
  <div className="col-sm-10">
  <div className="container">
    Norman Ruiz - bla bla bla - lalala - Copyright
    </div>
  </div>
  <div className="col-sm-1">

  </div>
</div>

  </div>
    )
  }
}

export default Paciente
