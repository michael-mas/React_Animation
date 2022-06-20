import "../../page3styles.scss";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import { ReactComponent as BrandIcon } from "../../images/yeti.svg";
import Animate from "../../components/PageGsap/Animate"

import Letter from "../../components/PageGsap/AnimatedLetters/Letter";


export default function GSAP() {

   
  return (
    <>
 

    <div className=" mt-3 text-center">
    <h2>Gsap Party !</h2>
    </div>
     <Container>
   <Row>
      <Col> 
      <form action="https://formsubmit.co/masmichael280699@gmail.com" method="POST">
	<div className="svgContainer">
	<div>
      <BrandIcon />
      </div>
      <Animate />
	</div>
	<div className="inputGroup inputGroup1">
		<label for="email1">Email</label>
		<input type="text" id="email" name="email" className="email" maxlength="256"/>
		<p className="helper helper1">email@domain.com</p>
		<span className="indicator"></span>
	</div>
	<div className="inputGroup inputGroup2">
		<label for="Message">Message</label>
		<textarea type="password" id="password" name="message" className="password" />
        <input type="hidden" name="_next" value="http://localhost:3000/gsap"></input>
	</div>
	<div className="inputGroup inputGroup3">
		<button  type="submit" id="login">Envoyer</button>
	</div>	
</form>
      </Col>
    </Row>
    </Container>

    <Container >
   <Row>
      <Col> 
    <Letter />
      </Col>
    </Row>
    </Container>

    <Container >
    <input  type="checkbox" id="active" />
    <label  for="active" className="menu-btn dropbutton"><span></span></label>
    <label  for="active" className="close dropbutton"></label>
    <div className="wrapper">
      <ul>
<li><a href="/">Accueil</a></li>
<li><a href="/agence">Three</a></li>
<li><a href="/gsap">Gsap</a></li>
<li><a href="/css">CSS</a></li>
<li><a href="#2">Contact</a></li>
</ul>
</div>
    </Container>
    </>
  );
}

