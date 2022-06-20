import '../CSS/animation.css'
import '../CSS/navbar.scss'
import logotest from '../images/logotest.png';
import React from 'react'
import { Link } from "react-router-dom";


export default function Navbar() {

    return(
        <div class="navbar">
  <h1>
    <img width={100} src={logotest} alt="hey" />
    <div id="nav-icon1" onClick={()=>{
    let element=document.getElementById("nav-icon1")
    let navs=document.getElementById("navs")
    let hero=document.getElementById("hero")
    
    if(element.className==="nav-icon1"){
      element.className='nav-icon1 open'
      navs.className="navigation-open"
      hero.style.opacity=0
      
    }
    else{
      element.className='nav-icon1'
      navs.className='navigation-close'
      hero.style.opacity=1
    }
  }}>
  <span></span>
  <span></span>
  <span></span>
</div> </h1>
  <ul id="navs" className="navigation-close">
    <li> <Link to="/agence">Three</Link></li>
    <li><a href="/gsap">Gsap</a></li>
    <li><a href="/css">CSS</a></li>
    <li><a href="#o">A propos de moi</a></li>
    <li><a href="#l">Contact</a></li>
  </ul>
</div>
    )
}