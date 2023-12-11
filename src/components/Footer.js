import React from 'react'
import { FaYoutube,FaInstagram,FaLinkedin} from 'react-icons/fa6';
import { FaGithubSquare } from "react-icons/fa";
import { LuGithub,LuInstagram,LuLinkedin, LuYoutube } from "react-icons/lu";

const Footer = () => {
    return (
        <>
                <div className='Footer'>
                    <div className='footer-container'>
                        <div>
                            <a href="https://www.instagram.com/madhuryahait/" target="_blank">
                                <LuInstagram />
                            </a>       
                            <a href="https://www.youtube.com/@mxdyofficial" target="_blank">
                                <LuYoutube />
                            </a>              
                            <a href="https://www.linkedin.com/in/madhuryahait/" target="_blank">
                                <LuLinkedin />
                            </a>
                            <a href="https://github.com/MADHURYAHAIT" target="_blank">
                                <LuGithub/>
                            </a>
                        </div>
                    <div>
                            Designed and Developed by Madhurya Hait |
                            © 2023 All rights reserved.
                        </div>
                    </div>
                </div>

        </>
    )
}

export default Footer