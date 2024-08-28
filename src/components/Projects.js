import React from 'react';
import 'aos/dist/aos.css'
import { IoCodeSlashSharp } from "react-icons/io5";
import { LuEye } from "react-icons/lu";
import Data from './Data';
import { useEffect } from 'react';
import Aos from 'aos';
import Carousel from 'react-elastic-carousel';

const breakpoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
];

export default function Projects() {
    
    useEffect(() => {
        Aos.init({
          useClassNames: true,
          initClassName: false,
          animatedClassName: 'animated',
          duration: 1700
        });
      }, [])

    return (
    
        <div className='text-center heading-text '  id='projects'>
            <div className='Title' data-aos="fade-right" style={{transform: 'translateX(-50%) ',left:'50%',position:'absolute'}}> Projects</div>
            
        <div class="container dabba">


            <div class="card-deck row">
             {
                Data.map((proj,index)=>(
                    
                        <div class="col- col-sm-9 col-md-6 col-lg-6 col-xl-4" data-aos="fade-up">
                    {/* Card */}
                    <div class="card mb-4">

                        {/*Card image*/}
                        <div class="view overlay">
                        <img src={proj.img} alt={proj.title}/>
                        <a href="#!">
                            <div class="mask rgba-white-slight"></div>
                        </a>
                        </div>

                        {/*Card content*/}
                        <div class="card-body">

                        {/*Title*/}
                        <strong className='text-altdeep'><h1>{proj.title}</h1></strong>
                        {/*Text*/}
                        <p class="card-text">{proj.desc}</p>
                        {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
                        <a href={proj.view}> <button type="button" class="category-btn btn-light-blue btn-md"><LuEye className='icon'/></button></a>
                    <a href={proj.code}> <button href="#" type="button" class="category-btn btn-light-blue btn-md"><IoCodeSlashSharp className='icon'/></button></a>

                        </div>

                    </div>
                    {/* Card */}
                </div>
                    ))
             }
                

            </div>

            <br/><br/>
                <div className='welcome-text fs-2 text-center heading-text' data-aos="fade-up">
                    Other Cool Project
                </div>


                <div className='wrapper'>
                    <Carousel className="carousel" breakpoints={breakpoints} transitionMs={1000} enableAutoPlay={false} autoPlaySpeed={3000} >

                        <div className='carousel card'>
                            <iframe src="https://www.youtube.com/embed/yKFQCqVSJpw?si=2-EPoz_6YELNKOGk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                        <div className='carousel card'>
                            <iframe src="https://www.youtube.com/embed/yKFQCqVSJpw?si=2-EPoz_6YELNKOGk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>

                       
                    </Carousel>
                </div>

              
                {/* Card deck */}
                </div>

        </div>


)
}






   