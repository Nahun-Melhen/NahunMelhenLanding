import React from 'react'
import '/src/components/estilos.css';
import { Col, Container, Row } from 'react-bootstrap';

const Seccion2 = () => {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <p className='text-center text-white'> Hace poco empecé con la programacíon, y estos fueron mis primero proyectos “oficiales” con un equipo.
                        Soy programador Full Stack</p>
                </Col>
                <Col>
                <p className='text-center text-white'>Estas son mis primeras paginas como programador y en equipo</p>
                
                </Col>
            </Row>
        </Container>
    )
}

export default Seccion2