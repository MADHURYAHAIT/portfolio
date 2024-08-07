import React from 'react';
import 'aos/dist/aos.css'
import { IoCodeSlashSharp } from "react-icons/io5";
import { LuEye } from "react-icons/lu";
import Data from './Data';

export default function Projects() {


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
                    Google Solution Challenge
                </div>
                 <div className='music crd'>
                 <iframe width="100%" height="315" src="https://www.youtube.com/embed/11ASRgvo8JM?si=jOShVVAPBn9MKV5p" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <br/>
                
           
                {/* Card deck */}
                
                </div>

        </div>


)
}






   