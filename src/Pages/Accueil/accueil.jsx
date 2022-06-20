import "../../styles.css";
import '../../App.scss'
import styled from "styled-components";
import Navbar from "../../components/Navbar";

import Background from "../../components/Background";
import Backgroung2 from "../../components/Backgroung2";
import Background3 from "../../components/Background3";
import Separator from "../../components/Separator";
import TextSection from "../../components/TextSection";
import TextSection2 from "../../components/TextSection2";
import TextSection3 from "../../components/TextSection3";
import Box from "../../components/Box"; 
import Footer from "../../components/footer/Footer";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";


import  Model  from "../../components/Model";


export default function Accueil() {
  return (
    <>
    <Wrapper className="App">
      <Navbar />
      <div className="section">
      <Background />
      <TextSection2 />
      <TextSection3 />
      <div style={{ width: "40vw", height: "90vh"}}>
      <Canvas>
        <OrbitControls></OrbitControls>
        <ambientLight intentity={[0.5]} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Model />
      </Canvas>
      </div>
      </div>
      <Separator />
      <div style={{ width: "40vw", height: "30vh"}}>
      <Canvas>
       
      </Canvas>
      </div>
      <Backgroung2 />
      <TextSection />
      <div className="margg" style={{ width: "40vw", height: "100vh"}}>
      <Canvas className="canvas2">
        <OrbitControls></OrbitControls>
        <ambientLight intentity={[0.5]} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Box />
      </Canvas>
      </div>
      <Background3 />
      <Footer />
    </Wrapper>
     
     </>
  );
}

const Wrapper = styled.div`
  background: #1f1144;
 

  canvas {
    height:200px; 
    widht:200px;
    margin-top:7%;
  }
`;