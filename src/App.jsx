import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/Navbar';
import Inicio from './components/paginaInicio/Inicio';
import Seccion2 from '/src/components/seccion2/Seccion2.jsx';

function App() {
  return (
    <>
    
    <Navbar />
    <Inicio />
    <Seccion2 />
    </>
  )
}

export default App
