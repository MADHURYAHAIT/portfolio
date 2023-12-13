import React from 'react'
import Aos from 'aos';
import { useEffect } from 'react';
import "aos/dist/aos.css"
import { FaJava,FaReact,FaGithub,FaNodeJs} from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { SiMysql } from "react-icons/si";
import { SiPandas,SiNumpy } from "react-icons/si";



export default function Skillset() {
    useEffect(() => {
        Aos.init({
            useClassNames: true,
            initClassName: false,
            animatedClassName: 'animated',
            duration: 1800
        });
      }, [])
      
      return (
          <>
                    
            <div className="container d-flex flex-column mytext" 
            data-aos="fade-right" data-aos-offset="0" 
            data-aos-easing="ease-in-out" >
                <div className='welcome-text fs-2 text-center heading-text'>
                <div className='Title'>SKILLSET</div>
                <hr/>
                <strong style={{fontSize:'25px'}}>MY CODING SKILLS </strong>
               
                </div>
                <div className="row">
                    <div className="icons col-md-2 col-4">
                        <img src="./icons/java-script.png" alt="JavaScript" />
                        {/* <DiJavascript className='ico'/> */}
                    </div>
                    <div className="icons col-md-2 col-4">
                        <FaJava className='ico'/>
                    </div>
                    <div className="icons col-md-2 col-4">
                        <img src="./icons/python.png" alt="Python" />
                    </div>
                    <div className="icons col-md-2 col-4">
                        <img src="./icons/html-5-logo.png" alt="Html" />
                    </div>
                    <div className="icons col-md-2 col-4">
                       <SiNumpy className='ico'/>
                    </div>
                    <div className="icons col-md-2 col-4">
                        {/* <img src="./icons/atom.png" alt="React" /> */}
                        <FaReact className='ico'/>
                    </div>
                    <div className="icons col-md-2 col-4">
                        {/* <img src="./icons/nodejs.png" alt="NodeJS" /> */}
                        <FaNodeJs className='ico'/>
                    </div>
                    <div className="icons col-md-2 col-4">
                        <img src="./icons/tailwind.png" alt="Tailwind" />
                    </div>
                    <div className="icons col-md-2 col-4">
                       <SiPandas className='ico'/>
                    </div>
                    <div className="icons col-md-2 col-4">
                        <img src="./icons/firebase.png" alt="Firebase" />
                    </div>
                    <div className="icons col-md-2 col-4">
                        {/* <img src="./icons/mysql.png" alt="MySQL" /> */}
                        <SiMysql className='ico'/>
                    </div>
                    <div className="icons col-md-2 col-4">
                        {/* <img src="./icons/github.png" alt="Github" /> */}
                        <FaGithub className='ico'/>
                    </div>
                    <div className="icons col-md-2 col-4">
                        <img src="./icons/bootstrap.png" alt="Bootstrap" />
                    </div>
                </div>
                </div>
        </>
    )
}