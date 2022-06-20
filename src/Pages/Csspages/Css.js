import "../../page4styles.scss";

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import gif from '../../images/loading.gif'






export default function Css() {
  return (
    <>
  
    <Container>
      
      
    <Row>
      <Col><h1>En travaux</h1></Col>
    <Col>
 
    <div class="background">
   <span><img  src={gif} alt="hey" /></span>
   <span><img  src={gif} alt="hey" /></span>
   <span><img  src={gif} alt="hey" /></span>
   <span><img  src={gif} alt="hey" /></span>
   <span><img  src={gif} alt="hey" /></span>
   <span><img  src={gif} alt="hey" /></span>
   <span><img  src={gif} alt="hey" /></span>
   <span><img  src={gif} alt="hey" /></span>
   <span><img  src={gif} alt="hey" /></span>
   <span><img  src={gif} alt="hey" /></span>
   <span><img  src={gif} alt="hey" /></span>
  
</div>

    </Col>
  
    </Row>
    </Container>
   
    </>
  );
}