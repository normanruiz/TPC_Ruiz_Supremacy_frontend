import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../img/logo.jpg'
import '../css/pageInicio.css'

const Titulo = () => (
  <div className="container contenedor-titulo" >
    <h1><strong><em>Sistema de turnos</em></strong></h1>
    <h2><strong><em>Turbo Pro 2020</em></strong></h2>
  </div>
)

const Imagen = () => (
  <div className="contenedor-imagen" >
     <img src={ Logo } alt="Logo" className="img-fluid"></img>
  </div>
)

const Botonera = () => (
  <div className="container contenedor-Botonera">
    <Link to='/Inicio/Registro' className="btn btn-outline-light btn-lg">Ingresar</Link>
  </div>
)

const Inicio = () => (
  <div className="container-fluid">
    <Titulo/>
    <Imagen/>
    <Botonera/>
  </div>
)

export default Inicio
