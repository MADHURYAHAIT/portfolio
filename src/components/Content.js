import React from "react";
import { useEffect, useRef } from "react";
import { FaSchool } from "react-icons/fa";
import { FaDesktop } from "react-icons/fa";
import { FaDev } from "react-icons/fa";
import { FaAngleDoubleDown } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaMusic } from "react-icons/fa";
import Typed from "typed.js";
import { ImOffice } from "react-icons/im";
import { BiSolidInstitution } from "react-icons/bi";
import "aos/dist/aos.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../css/about.css";
import { FaLinkedinIn } from "react-icons/fa6";

export default function Content() {
  useEffect(() => {
    const options = {
      strings: [
        " programmer",
        "developer",
        " ui-designer",
        " singer",
        " song-writer",
        " producer",
        "i'm",
        " Madhurya",
      ],
      startDelay: 1000,
      typeSpeed: 30,
      backSpeed: 60,
      backDelay: 1000,
      showCursor: true,
      loop: true,
    };

    const typed = new Typed(".typing-element", options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="Linkdin">
        <a id="no-underline" href="https://www.linkedin.com/in/madhuryahait/">
          <div className="bx">
            <FaLinkedinIn style={{ fontSize: "25px" }} />
          </div>
          <div className="rotate-90">
            <b>connect</b>{" "}
          </div>
        </a>
      </div>

      <section id="hero">
        <h1
          style={{
            color: "#484a00",
            transform: "translateY(-70px) translateX(-70px)",
            position: "fixed",
          }}
        >
          WELCOMEWELCOMEWELCOMEWELCOMEWELCOMEWELCOMEWELCOME
          <br />
          TOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOT
          <br />
          MYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMY
          <br />
          PORTFOLIOPORTFOLIOPORTFOLIOPORTFOLIOPORTFOLIOPORTFOLIO
          <br />
          WELCOMEWELCOMEWELCOMEWELCOMEWELCOMEWELCOMEWELCOME
          <br />
          TOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOT
          <br />
          MYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMY
          <br />
          PORTFOLIOPORTFOLIOPORTFOLIOPORTFOLIOPORTFOLIOPORTFOLIO
          <br />
          WELCOMEWELCOMEWELCOMEWELCOMEWELCOMEWELCOMEWELCOME
          <br />
          TOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOT
          <br />
          MYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMY
          <br />
          PORTFOLIOPORTFOLIOPORTFOLIOPORTFOLIOPORTFOLIOPORTFOLIO
          <br />
          WELCOMEWELCOMEWELCOMEWELCOMEWELCOMEWELCOMEWELCOME
          <br />
          TOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOT
          <br />
          MYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMY
          <br />
          PORTFOLIOPORTFOLIOPORTFOLIOPORTFOLIOPORTFOLIOPORTFOLIO
          <br />
          WELCOMEWELCOMEWELCOMEWELCOMEWELCOMEWELCOMEWELCOME
          <br />
          TOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOT
          <br />
          MYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMY
          <br />
          PORTFOLIOPORTFOLIOPORTFOLIOPORTFOLIOPORTFOLIOPORTFOLIO
          <br />
          WELCOMEWELCOMEWELCOMEWELCOMEWELCOMEWELCOMEWELCOME
          <br />
          TOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOT
          <br />
          MYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMY
          <br />
          PORTFOLIOPORTFOLIOPORTFOLIOPORTFOLIOPORTFOLIOPORTFOLIO
          <br />
          WELCOMEWELCOMEWELCOMEWELCOMEWELCOMEWELCOMEWELCOME
          <br />
          TOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOT
          <br />
          MYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMY
          <br />
          PORTFOLIOPORTFOLIOPORTFOLIOPORTFOLIOPORTFOLIOPORTFOLIO
          <br />
          WELCOMEWELCOMEWELCOMEWELCOMEWELCOMEWELCOMEWELCOME
          <br />
          TOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOTOT
          <br />
          MYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMYMY
          <br />
          PORTFOLIOPORTFOLIOPORTFOLIOPORTFOLIOPORTFOLIOPORTFOLIO
          <br />
        </h1>

        <div class="hero-container" data-aos="fade-up">
          <img
            src="./img/background_img.jpg"
            alt=""
            className="img-fluid profile-pic"
            id="desk-img"
          />
        </div>
      </section>

      <div className="container">
        <div className="About">
          <div id="scrollicon">
            <FaAngleDoubleDown className="scrolliconn" />
          </div>
          <div className="d-flex flex-column mx-auto mt-5 ">
            <div className="hp-logo-left">MADH</div>
            <div className="hp-logo-right">URYA</div>
          </div>
        </div>

        <div className="container d-flex flex-column mytext" id="intro">
          <div className="welcome-text fs-2 text-center heading-text">
            <strong data-aos="fade-up"> Who am I ? </strong>
            <small className="typing-text" id="home">
              <strong className="welcome-heaading ">
                {" "}
                <span className="typing-element" />
              </strong>{" "}
            </small>
          </div>
        </div>

        <VerticalTimeline className="timeline">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentArrowStyle={{ borderRight: "7px solid  #292828" }}
            date="2007 - 2021"
            dateClassName={"color-date"}
            icon={<FaSchool />}
            iconStyle={{ background: "#191919", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">
              <strong className="text-altdeep">Education</strong>
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Jamshedpur, India
            </h4>
            <p>
              I've completed my primary & secondary education from{" "}
              <strong className="text-altdeep">Jamshedpur Public School</strong>{" "}
              in 2021. <br />
              Won the <strong className="text-altdeep"> Bhartiya Sanskriti Gyan Pariksha</strong>.
              State Level Winner of  <strong className="text-altdeep">Inspire-Manak Awards</strong>.
              I scored {" "}
              <strong className="text-altdeep">
                91%
              </strong>{" "}
              in {" "}
              <strong className="text-altdeep">
              CBSE Boards 2021.{" "}

              </strong>
            </p>

          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentArrowStyle={{ borderRight: "7px solid  #292828" }}
            date="2021 - present"
            dateClassName={"color-date"}
            icon={<BiSolidInstitution/>}
            iconStyle={{ background: "#191919", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">
              <strong className="text-altdeep">B.Tech in (AI & DS)</strong>
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Sikkim, India
            </h4>
            <p>
              I'm currently a final year{" "}
              <strong className="text-altdeep">
                Artifical Intelligence & Data Science
              </strong>{" "}
              Undergraduate from{" "}
              <strong className="text-altdeep">
                Sikkim Manipal Institute of Technology,{" "}
              </strong>
              Majitar, Sikkim, India.
              Have actively participated in various clubs like
              <strong className="text-altdeep"> GDSC & IAESTE </strong>, held and taught hundreads of students.  
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2019 - present"
            contentArrowStyle={{ borderRight: "7px solid  #292828" }}
            dateClassName={"color-date"}
            icon={<FaDesktop />}
            iconStyle={{ background: "#191919", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">
              <strong className="text-altdeep">Aspiring Developer</strong>
            </h3>
            <h4 className="vertical-timeline-element-subtitle">MERN Stack</h4>
            <p>
              I'm an Aspiring{" "}
              <strong className="text-altdeep">Full-Stack Web / App Developer</strong>{" "}
              based in <strong className="text-altdeep"> Jamshedpur </strong>,
              India
              <br />
              My field of Interest are building new{" "}
              <strong className="text-altdeep">Web Technologies</strong> and the
              products of Modern World. <br />
              Currently learning technologies like{" "}
              <strong className="text-altdeep">
                Salesforce , CRM
              </strong>{" "}
              and working on<strong className="text-altdeep">Oracle CPQ</strong> &{" "}
              <strong className="text-altdeep">Logik IO</strong>
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021 - 2024"
            box-shadow="0 15px 10px rgb(70, 70, 70)"
            contentArrowStyle={{ borderRight: "7px solid  #292828" }}
            dateClassName={"color-date"}
            icon={<FaDev />}
            iconStyle={{ background: "#191919", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">
              {" "}
              <strong className="text-altdeep">Work Experience</strong>
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              & Minor Internships
            </h4>
            <p>
              Worked as a{" "}
              <strong className="text-altdeep">Full time Intern</strong> at
              Gladilous Language Necter pvt. ltd.
              <br />
              Working as an{" "}
              <strong className="text-altdeep">Active member in</strong> GDSC
              Web Development Team & IAESTE IN SMU. Hosted several events and
              conducted workshops on{" "}
              <strong className="text-altdeep">Web Development</strong>.
              Worked as a Machine Learning Intern in{" "}
              <strong className="text-altdeep">Tata Steel SNTI</strong> for 3 months.
              Worked as a DS Intern at{" "}
              <strong className="text-altdeep">Vixplor Analtics Pvt Ltd.</strong> .
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Feb - March, 2023"
            contentArrowStyle={{ borderRight: "7px solid  #292828" }}
            dateClassName={"color-date"}
            icon={<FaGithub />}
            iconStyle={{ background: "#191919", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">
              {" "}
              <strong className="text-altdeep">Programes</strong>
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              & Achievements
            </h4>
            <p>
              Became one of the<strong className="text-altdeep">Top 10</strong>{" "}
              Contributors of{" "}
              <strong className="text-altdeep">
                {" "}
                Kharagpur Winter of Code 2023{" "}
              </strong>
              .<br />
              Ranked <strong className="text-altdeep">#1</strong> in 2022 &{" "}
              <strong className="text-altdeep">#2</strong> in 2023 in{" "}
              <strong className="text-altdeep">
                {" "}
                Rangoli Making competition.{" "}
              </strong>
              <br />
              Hosted <strong className="text-altdeep">4 workshops</strong> in
              2023-24 &{" "}
              <strong className="text-altdeep">taught hundreads</strong> as a
              GDSC core Web-Developement member.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="July 2024 - present"
            contentArrowStyle={{ borderRight: "7px solid  #292828" }}
            dateClassName={"color-date"}
            icon={<ImOffice/>}
            iconStyle={{ background: "#191919", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">
              {" "}
              <strong className="text-altdeep">Industry</strong>
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Keysight Technologies
            </h4>
            <p>
             Currently working at <strong className="text-altdeep">Keysight Technologies (IT Department)  </strong> as a Salesforce Developer in Gurugram, India
             which is helping me to develope as a professional understanding the working of a company and contributing to it's growth.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2017 - present"
            contentArrowStyle={{ borderRight: "7px solid  #292828" }}
            dateClassName={"color-date"}
            icon={<FaMusic />}
            iconStyle={{ background: "#191919", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">
              {" "}
              <strong className="text-altdeep">Hobbies</strong>{" "}
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              & Extra Curriculum
            </h4>
            <p>
              I'm a passionate{" "}
              <strong className="text-altdeep">Singer / Song-Writer </strong> &{" "}
              <strong className="text-altdeep">Music Producer</strong>. I've{" "}
              <strong className="text-altdeep">
                been producing music for 7 years now
              </strong>{" "}
              I have mastered softwares like{" "}
              <strong className="text-altdeep">
                Logic Pro X , FL Studio , Filmora , Final Cut Pro{" "}
              </strong>
              . I also run a youtube channel with an artist account and have{" "}
              <strong className="text-altdeep">over 25k subscribers</strong> on
              it. I have my artist account on 100+ music platforms like{" "}
              <strong className="text-altdeep">
                Spotify , Apple Music , Amazon Music , JioSaavn etc
              </strong>
            </p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </>
  );
}
