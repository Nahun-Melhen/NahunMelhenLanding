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
              Me llamo Nahun Melhen, tengo 21 años y contando... Siempre estoy tratando de aprender y una de mis características personales es que todo lo que hago lo hago con constancia y de dedicación, porque siento que la vida es muy corta como para andar haciendo las cosas a medias. Me considero una buena persona para trabajar y para hacer grupo de personas.
            </p>
            <h3 className="cita text-white text-center d-none d-lg-block">
              No son los años de vida, sino la vida de los años.
            </h3>
            <p className="autor text-white text-center d-none d-lg-block">- Jhon F. Kenndy</p>
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
            <p className="descripcion2 text-warning ">
              Me llamo Nahun Melhen, tengo 21 años y contando... Siempre estoy tratando de aprender y una de mis características personales es que todo lo que hago lo hago con constancia y de dedicación, porque siento que la vida es muy corta como para andar haciendo las cosas a medias. Me considero una buena persona para trabajar y para hacer grupo de personas.
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
  
  export default Inicio;
