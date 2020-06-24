import React from 'react'


class Usuario extends React.Component {

  state = {
    usuarios: []
  }

  componentDidMount () {
    fetch('http://localhost:51266/api/Usuario')
    .then((res) => res.json())
    .then((usuarios) => this.setState({usuarios}))
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
              Administracion de Usuarios
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
{this.state.usuarios.map((usuarios) => (
  <tr key={usuarios.Id}>
    <th scope="row">{usuarios.Id}</th>
    <td>{usuarios.Nombre}</td>
    <td>{usuarios.Apellido}</td>
    <td>{usuarios.Correo}</td>
    <td>{usuarios.Perfil.Tipo}</td>
    <td>{usuarios.Usr}</td>
    <td>{usuarios.Pwd}</td>
    <td>{usuarios.Estado}</td>
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

export default Usuario
