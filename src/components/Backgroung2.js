import React from "react";
import styled from "styled-components";
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)



export default function HeroBackground2() {
  const titleRef = useRef()

  const onLoad = () => {
    gsap.timeline({
      onComplete: function () {
        console.log('animation terminée')
      }
    })
      .fromTo(".letter",
      {
        x: -100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        stagger: 0.33,
        delay: 0.7
      }      
    )
    .to(".title", {
      y: 45,
      delay: 0.7
    })
    .to(".letter", {
      margin: "0 5vw",
      delay: 0.8,
      duration: 0.5
    })
    .to(".letter", {
      margin: "0",
      delay: 0.8,
      duration: 0.5
    })
    .to(".letter", {
      x: -titleRef.current.clientWidth,
      delay: 1,
      duration: 2,
      rotate: -360
    })
   
    .to(".letter", {
      x: 0,
      delay: 1,
      duration: 2
    })
  }

  
    

 

 

  useEffect(() => {
    onLoad();
  }, [])
 
  

  return (
    <Wrapper2 className="wrap2">
      <h1 className="title" ref={titleRef}>
        <span className="letter">D</span>
        <span className="letter">I</span>
        <span className="letter">D</span>
        <span className="letter">I</span>
        <span className="letter">V</span>
        <span className="letter">E</span>
        <span className="letter">S</span>
      </h1>
     

      
      <Parallax pages={2} style={{ top: '0', left: '0' , width: '98%'}} >
  <ParallaxLayer className="canvas4"
    offset={0}
    speed={2.5}
    style={{ display: 'flex', justifyContent: 'center', alignItems: 'start', color:'black' }}>
    <p>En voir plus</p>
    <p>🡻</p>
  </ParallaxLayer>

  <ParallaxLayer offset={1} speed={2} className="canvas3" />

  <ParallaxLayer
    offset={1}
    speed={0.5}
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'start',
      color: 'white',
    }}>
    <p >Remonter 🡹</p>
    
  </ParallaxLayer>
</Parallax>

    </Wrapper2>
  );
}

const Wrapper2 = styled.div`
  position: absolute;
  
  width: 100%;
  height: 100vh;
  background: rgb(9,35,79);
  background: linear-gradient(0deg, rgba(9,35,79,1) 0%, rgba(231,214,188,1) 100%);
  text-align: center;
  overflow: hidden;
`;



