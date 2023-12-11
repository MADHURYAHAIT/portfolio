import Navbar from "./components/Navbar";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Content from "./components/Content";
import Footer from "./components/Footer";
import Skillset from "./components/Skillset";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Music from "./components/Music";

// import ParticleBackground from "./components/ParticleBackground";

import './css/custom.min.css'
import './css/main.css'
import './css/handset.css'


function App() {
  return (
    

    <>
        {/* <ParticleBackground/> */}
        <div id="main">
          <Navbar/>
          <Content/>
          <Skillset/>
          {/* <Projects/> */}
          <Music/>
          <Contact/>
         
          
        <Footer/>
        </div>
    </>
  );
}

export default App;