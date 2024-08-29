import React from 'react'
import { FaSearchLocation } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import WebToLeadForm from './SalesforceForm';
import "../css/contact.css"
import ContactForm from './Form';

export default function Contact() {
    return (
        <>
        
            <div className="container d-flex flex-column mytext" id='contact' data-aos="fade-up">
                
                <div className='fs-2 pb-5 text-center heading-text welcome-text'>
                <div className='Title'>Contact</div>
                <hr/>
                    <strong className='welcome-text'> LETS CONNECT</strong> 
                </div>
                <div class="container1">
{/* 
                    <div class="row">

                    <div class="col-lg-6">
                        <div class="row">

                        <div class="col-sm-12">
                            <div class="info-box">
                            <FaSearchLocation className='icon'/> 
                            <h3>Address</h3>
                                <p> Baridih, Zone no.- 3, Jamshedpur, Jharkhand</p>
                            </div>
                        </div>

                       </div>
                       <div class="row">

                        <div class="col-sm-7">
                            <div class="info-box" >
                           <MdOutlineEmail className='icon'/>
                            <h3>Email Me</h3>
                            <p>haitmadhurya@gmail.com</p>
                            </div>
                        </div>

                        <div class="col-sm-5">
                            <div class="info-box">
                            <IoMdCall className='icon'/>
                            <h3>Call Me</h3>
                            <p> +91-993-111-1589</p>
                            </div>
                        </div>

                        </div>
                    
                    </div>
                </div> */}

                    {/* <a href="#top" style={{ color: 'wheat' ,display: 'flex', flexDirection:'column', alignItems: 'center',paddingBottom:'2%',paddingTop:'2%'}}>
                        <FaCircleArrowUp className="d-flex center" style={{ fontSize: '50px'}} />
                    
                    </a> */}
                      
                        
                <ContactForm/>
                </div>
               
            
               
        </div>


        </>
    )
}