import React from 'react'
import { FaSearchLocation } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { IoMdCall } from "react-icons/io";

export default function Contact() {
    return (
        <>
        
            <div className="container d-flex flex-column mytext" id='contact'>
                
                <div className='fs-2 pb-5 text-center heading-text welcome-text'>
                <div className='Title'>Contacts</div>
                <hr/>
                    <strong className='welcome-text'> FIND ME</strong>  ON
                </div>

                <div class="container1">

                    <div class="row">

                    <div class="col-lg-6">
                        <div class="row">

                        <div class="col-sm-12">
                            <div class="info-box">
                            <FaSearchLocation className='icon'/> 
                            <h3>Address</h3>
                                <p>Pradhan Colony, Zone no.- 3, Jamshedpur, Jharkhand</p>
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
                       
                        {/* <div class="row" >

                            <div class="col-sm-12">
                                <div class="info-box" style={{paddingTop:'25px',paddingBottom:'4%',border:'0px'}}>
                                    <h2>  MY <strong className='welcome-text' >SOCIALS</strong></h2>
                                    <hr/>
                                </div>
                            </div>
                        </div>

                        <div class="row" style={{paddingBottom:'8%', border:'0px'}}>

                          
                                <div class="info-box" style={{border:'0px'}}>
                                <div className="social" >
                                <div class="col-sm-10">
            
                                            <a href="https://www.facebook.com/profile.php?id=100076243074598" target="_blank">
                                                <FaSquareFacebook className='Sicon'/>
                                            </a>
                                        
                                            <a href="https://www.instagram.com/pooranjoyz_.ig/" target="_blank">
                                               <FaInstagram className='Sicon'/>
                                            </a>
                                       
                                            <a href="https://www.linkedin.com/in/pooranjoy-bhattacharya-baa23721a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B6TjHse3sTvqtMyPLyupHBQ%3D%3D" target="_blank">
                                                <FaLinkedin className='Sicon'/>
                                            </a>
                                        
                                            <a href="https://github.com/pooranjoyb" target="_blank">
                                                <FaGithubSquare className='Sicon'/>
                                            </a>
                                    </div>
                                
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
                    {/* <a href="#top" style={{ color: 'wheat' ,display: 'flex', flexDirection:'column', alignItems: 'center',paddingBottom:'2%',paddingTop:'2%'}}>
                        <FaCircleArrowUp className="d-flex center" style={{ fontSize: '50px'}} />
                    
                    </a> */}
                </div>
               
            
               
        </div>


        </>
    )
}