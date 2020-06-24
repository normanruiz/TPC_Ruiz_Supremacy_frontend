import React from 'react'

class Listado extends React.Component {

  editarPerfil = React.createRef()

  state = {
    perfiles: [],
    perfil: {}
  }

  componentDidMount () {
    fetch('http://localhost:51266/api/Perfil')
    .then((res) => res.json())
    .then((perfiles) => this.setState({perfiles}))
  }

  cargar = () => {
    fetch('http://localhost:51266/api/Perfil')
    .then((res) => res.json())
    .then((perfiles) => this.setState({perfiles}))
  }

  Eliminar = (id) => {
    var api = 'http://localhost:51266/api/Perfil/'+ id

    fetch(api, {
      method: 'DELETE',
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Proceso:', response))

  }

  CargaPerfil = (perfilAux) => {
    this.setState({
      perfil: perfilAux
    })
  }

  Editar = () => {
    var api = 'http://localhost:51266/api/Perfil/' + this.state.perfil.Id
    console.log(this.editarPerfil.current.value)
    this.setState({
      perfil:{Tipo: this.editarPerfil.current.value}
    })

    var perfil = this.state.perfil


    fetch(api, {
      method: 'PUT',
      body: JSON.stringify(perfil),
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Proceso:', response))
  }

  render () {
    return(
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
                  <td>{perfiles.Estado ? 'Activo' : 'Blockeado' }</td>
                  <td><button type="button" className="btn btn-outline-success my-2 my-sm-0" data-toggle="modal" data-target="#staticBackdrop2" onClick={ () => this.CargaPerfil(perfiles) }>Editar</button>

                  <div className="modal fade" id="staticBackdrop2" data-backdrop="static" data-keyboard="false" tabIndex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">Edicion de perfil</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                      <label >Nombre del perfil</label>
                      <input type="text" className="form-control" id="formGroupExampleInput2" placeholder={this.state.perfil.Tipo} ref={this.editarPerfil}></input>



                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                        <button type="button" className="btn btn-primary" onClick={ this.Editar } data-dismiss="modal">Guardar</button>
                      </div>
                    </div>
                  </div>
                  </div>
                  </td>
                  <td><button className="btn btn-outline-success my-2 my-sm-0" type="button" onClick={ () => this.Eliminar(perfiles.Id) }>Eliminar</button></td>
                </tr>
              ))}
            </tbody>
          </table>



        </div>
        <div className="col-sm-2">
        </div>
      </div>
    )
  }
}

export default Listado
