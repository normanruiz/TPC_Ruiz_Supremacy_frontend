import React from 'react'
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'

import Inicio from '../paginas/Inicio'
import Administracion from '../paginas/Administracion'
import Recepcion from '../paginas/Recepcion'
import Consultorio from '../paginas/Consultorio'
import Fin from '../paginas/Fin'
import Error from '../paginas/Error'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/Inicio' exact={true} component={Inicio} />
        <Route path='/Administracion' exact={true} component={Administracion} />
        <Route path='/Recepcion' exact={true} render={Administracion} />
        <Route path='/Consultorio' exact={true} render={Administracion} />
        <Route path='/Fin' exact={true} render={Fin} />
        <Route path='/Error' render={Error} />
        <Redirect from='' to='/Inicio' />
      </Switch>
    </BrowserRouter>
  )
}

export default App
