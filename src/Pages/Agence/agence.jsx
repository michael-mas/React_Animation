import "../../page2styles.css";

import Agencenav from "../../components/Page2/navbar";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import AppA from "./canvas1/AppA";
import Canva1 from "../../components/Page2/canva1/canva1";
import Footer2 from "../../components/Page2/footer/Footer2";






export default function Agence() {
  return (
    <>
    <Agencenav />
    <Container className="text-center margostitle cont1">
      
      
    <Row>
      <Col><h1>Controles et collisions</h1></Col>
    <Col>
    <Canva1 />
    

    </Col>
  
    </Row>
    </Container>
    <Container className="text-center mt-4 cont1">
    <Row>
    <Col className="margostitle col-12"><h1>Animations et activation</h1></Col>
    <Col className="d-flex justify-content-center" style={{ width: '100%'}}>
      
    <AppA />
    
   
    </Col>
    </Row>
    
    </Container>
    <Footer2 />
    </>
  );
}

