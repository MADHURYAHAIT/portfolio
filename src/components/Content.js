import React from 'react'
import { useEffect, useRef } from 'react';
import {FaSchool} from 'react-icons/fa'
import {FaDesktop} from 'react-icons/fa'
import {FaDev} from 'react-icons/fa'
import {FaAngleDoubleDown} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaMusic} from 'react-icons/fa'
import Typed from 'typed.js';
import "aos/dist/aos.css"
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../css/about.css'
import { FaLinkedinIn } from "react-icons/fa6";

export default function Content() {

useEffect(() => {
        const options = {
            strings: [" programmer", "developer", " ui-designer", " singer", " song-writer"," producer","i'm"," Madhurya"],
            startDelay: 1000,
            typeSpeed: 30,
            backSpeed: 60,
            backDelay: 1000,
            showCursor: true,
            loop: true,
        };

        const typed = new Typed('.typing-element', options);

        return () => {
            typed.destroy();
        };
}, []);



  return (
    <>
      <div className='Linkdin'>
         <a  id="no-underline" href="https://www.linkedin.com/in/madhuryahait/"> 
          <div className='bx'> 
            <FaLinkedinIn style={{fontSize:'25px'}}/> 
          </div> 
            <div className='rotate-90'><b>connect</b> </div> 
        </a>
      </div>
      

     <section id="hero">
      <h1 style={{color:'#484a00', transform: 'translateY(-70px) translateX(-70px)',position:'fixed'}}>
        WELCOMEWELCOMEWELCOMEWELCOMEWELCOMEWELCOMEWELCOME<br/>
        TOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOT<br/>
        MYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMY<br/>
        PORTFOLIOPORTFOLIOPORTFOLIOPORTFOLIOPORTFOLIOPORTFOLIO<br/>
        WELCOMEWELCOMEWELCOMEWELCOMEWELCOMEWELCOMEWELCOME<br/>
        TOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOT<br/>
        MYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMY<br/>
        PORTFOLIOPORTFOLIOPORTFOLIOPORTFOLIOPORTFOLIOPORTFOLIO<br/>
        WELCOMEWELCOMEWELCOMEWELCOMEWELCOMEWELCOMEWELCOME<br/>
        TOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOT<br/>
        MYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMY<br/>
        PORTFOLIOPORTFOLIOPORTFOLIOPORTFOLIOPORTFOLIOPORTFOLIO<br/>
        WELCOMEWELCOMEWELCOMEWELCOMEWELCOMEWELCOMEWELCOME<br/>
        TOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOT<br/>
        MYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMY<br/>
        PORTFOLIOPORTFOLIOPORTFOLIOPORTFOLIOPORTFOLIOPORTFOLIO<br/>
        WELCOMEWELCOMEWELCOMEWELCOMEWELCOMEWELCOMEWELCOME<br/>
        TOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOT<br/>
        MYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMY<br/>
        PORTFOLIOPORTFOLIOPORTFOLIOPORTFOLIOPORTFOLIOPORTFOLIO<br/>
        WELCOMEWELCOMEWELCOMEWELCOMEWELCOMEWELCOMEWELCOME<br/>
        TOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOT<br/>
        MYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMY<br/>
        PORTFOLIOPORTFOLIOPORTFOLIOPORTFOLIOPORTFOLIOPORTFOLIO<br/>
        WELCOMEWELCOMEWELCOMEWELCOMEWELCOMEWELCOMEWELCOME<br/>
        TOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOT<br/>
        MYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMY<br/>
        PORTFOLIOPORTFOLIOPORTFOLIOPORTFOLIOPORTFOLIOPORTFOLIO<br/>
        WELCOMEWELCOMEWELCOMEWELCOMEWELCOMEWELCOMEWELCOME<br/>
        TOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOT<br/>
        MYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMY<br/>
        PORTFOLIOPORTFOLIOPORTFOLIOPORTFOLIOPORTFOLIOPORTFOLIO<br/>
     
      
      </h1>




              <div class="hero-container" data-aos="fade-up"  >
                <img src='./img/background_img.png' alt="" className="img-fluid profile-pic" id="desk-img" />
              </div>
      </section>   
      
      <div className="container">
     
            <div className='About' >


            <div id='scrollicon'>
              <FaAngleDoubleDown className='scrolliconn'/>
            </div>
            <div className="d-flex flex-column mx-auto mt-5 ">
           
              <div className='hp-logo-left' >MADH</div>
              <div className='hp-logo-right' >URYA</div >

             </div>




          </div>


    
        <div className="container d-flex flex-column mytext" id='intro'>
          <div className='welcome-text fs-2 text-center heading-text' >

           <strong data-aos="fade-up" > Who am I ? </strong>
           <small className="typing-text" id="home"><strong className='welcome-heaading '> <span className="typing-element"/></strong> </small>
          </div>
        </div>

          <VerticalTimeline className='timeline'>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentArrowStyle={{ borderRight: '7px solid  #292828'}}
              date="2003 - present"
              dateClassName={"color-date"}
              icon={<FaSchool/>}
              iconStyle={{ background: '#191919', color: '#fff' }}
            >
              <h3 className="vertical-timeline-element-title"><strong className='text-altdeep'>Education</strong></h3>
              <h4 className="vertical-timeline-element-subtitle">Jamshedpur, India</h4>
              <p>
                I've completed my Schooling from <strong className='text-altdeep'>Jamshedpur Public School</strong> in 2021 <br />
                I'm currently a 3rd year <strong className='text-altdeep'>Artifical Intelligence & Data Science</strong> Undergraduate from <strong className='text-altdeep'>Sikkim Manipal Institute of Technology, </strong>Majitar, Sikkim, India.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2021 - present"
        
               contentArrowStyle={{ borderRight: '7px solid  #292828'}}
              dateClassName={"color-date"}
              icon={<FaDesktop/>}
              iconStyle={{ background: '#191919', color: '#fff' }}
              >
              <h3 className="vertical-timeline-element-title"><strong className='text-altdeep'>Aspiring Web Developer</strong></h3>
              <h4 className="vertical-timeline-element-subtitle">MERN Stack</h4>
              <p>
                I'm an Aspiring <strong className='text-altdeep'>Full-Stack Web Developer</strong> based in <strong className='text-altdeep'> Jamshedpur </strong>, India<br />
                My field of Interest are building new <strong className='text-altdeep'>Web Technologies</strong> and the products of Modern World. <br/>Currently learning <strong className='text-altdeep'>Backend Web Development</strong> using <strong className='text-altdeep'>Javascript</strong> & <strong className='text-altdeep'>Node.js</strong>
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2021 - 2022"
              box-shadow= "0 15px 10px rgb(70, 70, 70)"
         
               contentArrowStyle={{ borderRight: '7px solid  #292828'}}
              dateClassName={"color-date"}
              icon={<FaDev/>}
              iconStyle={{ background: '#191919', color: '#fff' }}
            >
              <h3 className="vertical-timeline-element-title"> <strong className='text-altdeep'>Work Experience</strong></h3>
              <h4 className="vertical-timeline-element-subtitle">& Internships</h4>
              <p>
                Worked as a <strong className='text-altdeep'>Full time Intern</strong> at Gladilous Language Necter pvt. ltd.
              <br/>
                Working as an <strong className='text-altdeep'>Active member in</strong> GDSC Web Development Team & IAESTE IN SMU.
                Hosted several events and conducted workshops on <strong className='text-altdeep'>Web Development</strong>.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="Feb - March, 2023"
               contentArrowStyle={{ borderRight: '7px solid  #292828'}}
              dateClassName={"color-date"}
              icon={<FaGithub/>}
              iconStyle={{ background: '#191919', color: '#fff' }}

            >
              <h3 className="vertical-timeline-element-title"> <strong className='text-altdeep'>Programes</strong></h3>
              <h4 className="vertical-timeline-element-subtitle">& Achievements</h4>
              <p>
              Ranked <strong className='text-altdeep'>#2</strong> in <strong className='text-altdeep'> Rangoli Making</strong><br/>
              Made rangoli <strong className='text-altdeep'>in 2023</strong> and was awarded 2nd prize as the winner of the competiton.<br/>
              Also a Web Developer in <strong className='text-altdeep'>Google Developer Student Club (GDSC)</strong> in Sikkim Manipal Institute of Technology
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="2017 - present"
         
               contentArrowStyle={{ borderRight: '7px solid  #292828'}}
              dateClassName={"color-date"}
              icon={<FaMusic/>}
              iconStyle={{ background: '#191919', color: '#fff' }}

            >
              <h3 className="vertical-timeline-element-title"> <strong className='text-altdeep'>Hobbies</strong> </h3>
              <h4 className="vertical-timeline-element-subtitle">& Extra Curriculum</h4>
              <p>
              I'm a passionate <strong className='text-altdeep'>Singer / Song-Writer </strong> & <strong className='text-altdeep'>Music Producer</strong> <br/>
              I'hv <strong className='text-altdeep'>been producing music for 8 years now</strong> I have mastered softwares like <strong className='text-altdeep'>Logic Pro X , Fl Studio , Filmora , Final Cut Pro </strong>.
              I also run a youtube channel with an artist account and have <strong className='text-altdeep'>over 25k subscribers</strong> on it. I have my artist account on 100+ music platforms like <strong className='text-altdeep'>Spotify , Apple Music , Amazon Music , JioSaavn etc</strong>

              </p>
            </VerticalTimelineElement>


          </VerticalTimeline>
         


          {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/UPECmnym2h8?si=q1-5vY1_GWuT4C6C&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          
{/*               
                <li className='text-altlight'>
                  I'm fluent in languages like <strong className='text-altdeep'>C/C++</strong> & <strong className='text-altdeep'>JavaScript</strong>
                </li>

             
            <div className='p-6 mt-4' id='profile-pic' >
              <img src="./img/profile.jpg" className="rounded-circle" alt="Cinque Terre" width='75%' />
            </div>
        
 */}



      </div>
    </>
  )
}