import React from 'react';
import { useState } from 'react';

export default function Navbar() {

  const [navbarhai, setnavbar] = useState(false);

  const changeBackground = () => {
      if(window.scrollY >= 70){
        setnavbar(true);
      }
      else  
        setnavbar(false);
  }

  window.addEventListener('scroll', changeBackground)

  return (
    <>
      {/* <nav className={navbar ? "navbar active navbar-expand-lg navbar-dark fixed-top" : "navbar navbar-expand-lg navbar-dark fixed-top"}> */}


  

    <nav className={navbarhai? "navbar navbar-dark anim fixed-top" : "navoff"} >
  <div class="container-fluid" >

  <div class="transparent fixed-top">
    <a class="navbar-brand" href="#">P.</a>
    <div class="Bigscreen">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto" id='navbar-list'>
        <li className="nav-item px-2">
          <a className="nav-link" aria-current="page" href="#home">Home</a>
        </li>
        <li className="nav-item px-2">
          <a className="nav-link" href="#intro">About</a>
        </li>
        <li className="nav-item px-2">
          <a className="nav-link" href="#projects">Projects</a>
        </li>
        <li className="nav-item px-2">
          <a className="nav-link" href="#skill">Skills</a>
        </li>
        <li className="nav-item px-2">
          <a className="nav-link" href="#music">Music</a>
        </li>
        <li className="nav-item px-2">
          <a className="nav-link" href="#contact">Contact</a>
        </li>
        <li className="nav-item px-2">
          <a className="nav-link" href="https://drive.google.com/file/d/1qh6wgz9iZeonQiNp8DZlNrgHBBBXX3tC/view?usp=sharing" target="_blank">Resume</a>
        </li>
      </ul>      
      </div>

    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    </div>


    <div class="offcanvas offcanvas-end " tabindex="3" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div class="offcanvas-header">

        <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">P.</h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto" id='navbar-list'>
        <li className="nav-item px-2">
          <a className="nav-link" aria-current="page" href="#home">Home</a>
        </li>
        <li className="nav-item px-2">
          <a className="nav-link" href="#intro">About</a>
        </li>
        <li className="nav-item px-2">
          <a className="nav-link" href="#projects">Projects</a>
        </li>
        <li className="nav-item px-2">
          <a className="nav-link" href="#skill">Skills</a>
        </li>
        <li className="nav-item px-2">
          <a className="nav-link" href="#music">Music</a>
        </li>
        <li className="nav-item px-2">
          <a className="nav-link" href="#contact">Contact</a>
        </li>
        <li className="nav-item px-2">
          <a className="nav-link" href="https://drive.google.com/file/d/1qh6wgz9iZeonQiNp8DZlNrgHBBBXX3tC/view?usp=sharing" target="_blank">Resume</a> 
        </li>
      </ul>      
      </div>
    </div>
  </div>
</nav>

 
    
{/* </nav> */}




    </>
  )
}
