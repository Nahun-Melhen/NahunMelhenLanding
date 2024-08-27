import React from 'react'
import { Container, Row } from 'react-bootstrap'
import '/src/components/estilos.css'

const Navbar = () => {
  return (
    <Container fluid>
      <Row>
        <div>
          <h1 className='text-center text-white nombre'>Nahun Melhen</h1>
        </div>
        <hr className='linea-blanca' />
      </Row>
    </Container>
  )
}

export default Navbar