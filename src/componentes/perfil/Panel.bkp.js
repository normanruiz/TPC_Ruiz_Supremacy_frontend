import React from 'react'
import ReactDOM from 'react-dom'


class Panel extends React.Component {

  nuevoPerfil = React.createRef()

  crear = () => {
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
  }

  render () {
    return(
      <div className="row">

        <div className="col-sm-1">
        </div>

        <div className="col-sm-10">
          <div className="container">

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="navbar-nav mr-auto">

                  <form className="form-inline my-2 my-lg-0">


<button type="button" className="btn btn-outline-success my-2 my-sm-0" data-toggle="modal" data-target="#staticBackdrop">Nuevo</button>

<div className="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabIndex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
<div className="modal-dialog modal-dialog-centered">
  <div className="modal-content">
    <div className="modal-header">
      <h5 className="modal-title" id="staticBackdropLabel">Alta de perfil</h5>
      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div className="modal-body">

  <label >Nombre del perfil</label>
  <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Ingrese el nuevo perfil..." ref={this.nuevoPerfil}></input>

    </div>
    <div className="modal-footer">
      <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
      <button type="button" className="btn btn-primary" onClick={ this.crear} data-dismiss="modal">Guardar</button>
    </div>
  </div>
</div>
</div>


                    <input className="form-control mr-sm-2" type="search" placeholder="Que busca..." aria-label="Search"></input>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
                  </form>

                </div>
              </div>
            </nav>

          </div>
        </div>

        <div className="col-sm-1">
        </div>

      </div>
    )
  }
}

export default Panel
