import React from 'react'
import { Link } from 'react-router-dom'

class Perfil extends React.Component {

  nuevoPerfil = React.createRef()

  state = {
    perfiles: []
  }

  cargar = () => {
    fetch('http://localhost:51266/api/Perfil')
    .then((res) => res.json())
    .then((perfiles) => this.setState({perfiles}))
  }

  handleClick = () => {

    var api = 'http://localhost:51266/api/Perfil'
    var perfil = { tipo: this.nuevoPerfil.current.value,
                   estado: 1
    }

    fetch(api, {
      method: 'POST',
      body: JSON.stringify(perfil),
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Proceso:', response))
    this.cargar()
  }

  componentDidMount () {
    fetch('http://localhost:51266/api/Perfil')
    .then((res) => res.json())
    .then((perfiles) => this.setState({perfiles}))
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
              Administracion de Perfiles
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




                  <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                    Nuevo
                  </button>


                  <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">Nuevo perfil</h5>
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div className="modal-body">
                        <form>
                        <label >Nombre del nuevo perfil</label>
                        <input type="text" className="form-control" id="txtPerfil" placeholder="Ingrese el nombre del perfil..." ref={this.nuevoPerfil}></input>
                        </form>
                        </div>
                        <div className="modal-footer">
                          <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                          <button type="button" className="btn btn-primary" onClick={this.handleClick} data-dismiss="modal">Guardar</button>
                        </div>
                      </div>
                    </div>
                  </div>

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
          <th scope="col">Perfil</th>
          <th scope="col">Estado</th>
          <th scope="col"> </th>
          <th scope="col"> </th>
        </tr>
      </thead>
      <tbody>
        {this.state.perfiles.map((perfiles) => (
          <tr key={perfiles.Id}>
          <th scope="row">{perfiles.Id}</th>
          <td>{perfiles.Tipo}</td>
          <td>{perfiles.Estado}</td>
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

export default Perfil
