import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '/src/components/estilos.css';
const Inicio = () => {
  return (
    <Container fluid>
      <Row className="align-items-center my-4">
        <Col xs={12} lg={12} className="d-flex align-items-center justify-content-center">
          <img
            src="/src/assets/YoLanding.png"
            alt="Perfil"
            className='imgYo img-fluid'
          />
          <Col>

            <p className="descripcion1 text-white d-none d-lg-block text-center">
              Soy Nahun Melhen, tengo 21 años y estoy en constante crecimiento. Siempre estoy buscando aprender algo nuevo, porque creo que cada día es una oportunidad para mejorar. Si hay algo que me define, es la pasión y el compromiso que pongo en todo lo que hago. Para mí, la vida es demasiado corta para no darle todo lo que tengo. Disfruto trabajar en equipo y conectarme con las personas a mi alrededor; creo que juntos podemos lograr grandes cosas.            </p>
            <h3 className="cita text-center d-none d-lg-block">
              No son los años de vida, sino la vida de los años.
            </h3>
            <p className="autor text-center d-none d-lg-block">- Jhon F. Kenndy</p>
          </Col>
          <div className="ms-3 d-lg-none">
            <h3 className="cita text-white text-center">
              No son los años de vida, sino la vida de los añoszz.
            </h3>
            <p className="autor text-white text-center">- Jhon F. Kenndy</p>
          </div>
        </Col>
      </Row>

      <Row className="align-items-center">
        <Col xs={12} className="text-center">
          <p className="descripcion2 text-warning d-lg-none">
            Soy Nahun Melhen, tengo 21 años y estoy en constante crecimiento. Siempre estoy buscando aprender algo nuevo, porque creo que cada día es una oportunidad para mejorar. Si hay algo que me define, es la pasión y el compromiso que pongo en todo lo que hago. Para mí, la vida es demasiado corta para no darle todo lo que tengo. Disfruto trabajar en equipo y conectarme con las personas a mi alrededor; creo que juntos podemos lograr grandes cosas.            </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Inicio;
