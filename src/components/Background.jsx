import React from "react";
import styled from "styled-components";
import Card from "./card/Card";
import { Parallax, ParallaxLayer } from '@react-spring/parallax';


import staff1 from "../images/ambiance3.jpg";
import staff2 from "../images/cedric-a.jpg";
import staff3 from "../images/melissande.jpg";
import staff4 from "../images/paulette.jpg";
import staff5 from "../images/pierre.jpg";
import staff6 from "../images/pierreg.jpg";
import staff7 from "../images/romain.jpg";
import mountain1 from "../images/mountain1.svg";
import mountain2 from "../images/mountain2.svg";
import mountain3 from "../images/mountain3.svg";
import mountain4 from "../images/mountain4.svg";
import mountain5 from "../images/mountain5.svg";
import heroWave from "../images/hero-wave.svg";
import blurLayer from "../images/blur-layer.webp";


export default function HeroBackground() {
  return (
  
      <Parallax pages={6} style={{ top: '18%', left: '0',position: 'absolute',
      width: '98%'
     }}>
  <ParallaxLayer
    offset={0}
    speed={0.5}
    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <Wave1 />
  </ParallaxLayer>

  <ParallaxLayer
    offset={0}
    speed={0.8}
    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <Wave2 />
  </ParallaxLayer>

  <ParallaxLayer
    offset={0}
    speed={0.9}
    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <Wave3 />
  </ParallaxLayer>

  <ParallaxLayer
    offset={0}
    speed={1}
    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <Wave4 />
  </ParallaxLayer>

  <ParallaxLayer
    offset={0}
    speed={1.2}
    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  
    <Wave5 />
  </ParallaxLayer>

  <ParallaxLayer offset={0} speed={1.4} >
  <BlurLayer />
  <Wave6 />
  </ParallaxLayer>

  <ParallaxLayer offset={0} speed={1.7} >
  <Staff1 />
  </ParallaxLayer>

  <ParallaxLayer offset={0} speed={1.8} >
  <Staff2 />
  </ParallaxLayer>

  <ParallaxLayer offset={0} speed={1.6} >
  <Staff3 />
  </ParallaxLayer>

  <ParallaxLayer offset={0} speed={2.1} >
  <Staff4 />
  </ParallaxLayer>

  <ParallaxLayer offset={0} speed={2.1} >
  <Staff5 />
  </ParallaxLayer>

  <ParallaxLayer offset={0} speed={2.1} >
  <Staff6 />
  </ParallaxLayer>

  <ParallaxLayer offset={0} speed={2.9} >
  <Staff7 />
  </ParallaxLayer>


  <ParallaxLayer offset={1} speed={1.9} >
  <Collab>
  
  <div className="boxshow" style={{width: '200px', color:'white'}}>
  <img src="https://images.emojiterra.com/google/android-11/512px/1f44d.png" width={40} alt="pix"  />
    <div >
      <h4>Exemples</h4>
      <br />
      <p>lorem lorem lorem lorem lorem lorem lorem</p>
    </div>
  </div>

  
  
  
  </Collab>
  </ParallaxLayer>

  <ParallaxLayer
    offset={1}
    speed={0.5}
    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <Wave1 />
  </ParallaxLayer>

  <ParallaxLayer
    offset={1}
    speed={0.8}
    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <Wave2 />
  </ParallaxLayer>

  <ParallaxLayer
    offset={1}
    speed={0.9}
    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <Wave3 />
  </ParallaxLayer>

  <ParallaxLayer
    offset={1}
    speed={1}
    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <Wave4 />
  </ParallaxLayer>

  <ParallaxLayer
    offset={1}
    speed={1.2}
    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  
    <Wave5 />
  </ParallaxLayer>

  <ParallaxLayer offset={1} speed={1.4} >
  <BlurLayer />
  <Wave6 />
  </ParallaxLayer>

  <ParallaxLayer
    offset={2.2}
    speed={0.5}
    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <Wave1 />
  </ParallaxLayer>

  <ParallaxLayer
    offset={2.2}
    speed={0.8}
    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <Wave2 />
  </ParallaxLayer>

  <ParallaxLayer
    offset={2.2}
    speed={0.9}
    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <Wave3 />
  </ParallaxLayer>

  <ParallaxLayer
    offset={2.2}
    speed={1}
    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <Wave4 />
  </ParallaxLayer>

  <ParallaxLayer
    offset={2.2}
    speed={1.2}
    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  
    <Wave5 />
  </ParallaxLayer>

  <ParallaxLayer offset={2.2} speed={1.4} >
  <BlurLayer />
  <Wave6 />
  </ParallaxLayer>


  <ParallaxLayer
    offset={4.1}
    speed={0.5}
    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <Wave1 />
  </ParallaxLayer>

  <ParallaxLayer
    offset={4.1}
    speed={0.8}
    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <Wave2 />
  </ParallaxLayer>

  <ParallaxLayer
    offset={4.1}
    speed={0.9}
    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <Wave3 />
  </ParallaxLayer>

  <ParallaxLayer
    offset={4.1}
    speed={1}
    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <Wave4 />
  </ParallaxLayer>

  <ParallaxLayer
    offset={4.1}
    speed={1.2}
    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  
    <Wave5 />
  </ParallaxLayer>

  <ParallaxLayer offset={4.1} speed={1.4} >
  <BlurLayer />
  <Wave6 />
  </ParallaxLayer>

  <ParallaxLayer offset={4.4} speed={1.4} >
    <Boox><Card /></Boox>
  
  </ParallaxLayer>
  
</Parallax>

    
  );
}



const Wave = styled.div`
  position: absolute;
  width: 100%;
  background-position: top center;
  background-repeat: no-repeat;
  background-size: 100%;

  @media (max-width: 1440px) {
    background-size: 1440px;
  }
`;

const Boox = styled.div`
  margin-left:60%;
`;

const Pix = styled.div`
  position: absolute;
  width: 50%;
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 1440px) {
    background-size: 1440px;
  }
`;

const Collab = styled(Pix)`
 width:30%;
 display: grid;
 grid-template-columns: 6fr 6fr;
 grid-column-gap: 20px
 grid-row-gap: 20px
 justify-items: stretch
 align-items: stretch
 top: 570px;
 left:5%;

  @media (max-width: 1440px) {
    background-size: 1440px;
  }
`;

const Wave1 = styled(Wave)`
  top: 190px;
  height: 446px;
  background-image: url(${mountain1});
`;

const Staff1 = styled(Pix)`
  top: 570px;
  right:5%;
  height: 25vh;
  background-size: cover;
  width: 25vh;
  background-image: url(${staff1});
  border-radius:30%;
`;

const Staff2 = styled(Pix)`
  top: 570px;
  right:19%;
  height: 25vh;
  background-size: cover;
  width: 25vh;
  background-image: url(${staff2});
  border-radius:30%;
`;

const Staff3 = styled(Pix)`
  top: 770px;
  right:5%;
  height: 25vh;
  background-size: cover;
  width: 25vh;
  background-image: url(${staff3});
  border-radius:30%;
`;

const Staff4 = styled(Pix)`
  top: 780px;
  right:21%;
  height: 25vh;
  background-size: cover;
  width: 25vh;
  background-image: url(${staff4});
  border-radius:30%;
`;

const Staff5 = styled(Pix)`
  top: 1020px;
  right:22%;
  height: 25vh;
  background-size: cover;
  width: 25vh;
  background-image: url(${staff5});
  border-radius:30%;
`;

const Staff6 = styled(Pix)`
  top: 1130px;
  right:6%;
  height: 25vh;
  background-size: cover;
  width: 25vh;
  background-image: url(${staff6});
  border-radius:30%;
`;

const Staff7 = styled(Pix)`
  top: 1530px;
  right:17%;
  height: 25vh;
  background-size: cover;
  width: 25vh;
  background-image: url(${staff7});
  border-radius:30%;
`;

const Wave2 = styled(Wave)`
  top: 160px;
  height: 464px;
  background-image: url(${mountain2});
`;

const Wave3 = styled(Wave)`
  top: 347px;
  height: 408px;
  background-image: url(${mountain3});
`;

const Wave4 = styled(Wave)`
  top: 466px;
  height: 457px;
  background-image: url(${mountain4});
`;

const Wave5 = styled(Wave)`
  top: 450px;
  height: 867px;
  background-image: url(${mountain5});
`;

const Wave6 = styled(Wave)`
  top: 700px;
  height: 630px;
  background-image: url(${heroWave});
`;

const BlurLayer = styled(Wave)`
  top: 100px;
  height: 500px;
  background-image: url(${blurLayer});
`;