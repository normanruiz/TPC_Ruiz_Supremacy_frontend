import React from 'react'
import ReactDOM from 'react-dom'

import Crear from './Crear'

class Panel extends React.Component {

  crear = () => {
    ReactDOM.render(<Crear/>, document.getElementById('pacienteSeccionActiva'))
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

                    <button className="btn btn-outline-success my-2 my-sm-0" type="button" onClick={this.crear}>Nuevo</button>

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
