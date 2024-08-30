import Navbar from "./components/Navbar";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Content from "./components/Content";
import Footer from "./components/Footer";
import Skillset from "./components/Skillset";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Music from "./components/Music";
import PreLoader from "./components/PreLoader";
// import ParticleBackground from "./components/ParticleBackground";

import './css/custom.min.css'
import './css/main.css'
import './css/handset.css'
import { useEffect, useState } from "react";


function App() {
  const [isPageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    const simulatePageLoad = () => {
      setTimeout(() => {
        setPageLoaded(true);
      }, 4900); // Change this timeout to match your actual loading time
    };

    simulatePageLoad();
  }, []);
  return (
    
     // <ParticleBackground/> 
    <>
      {!isPageLoaded && <PreLoader />}
      {isPageLoaded && (
       
        <div id="main">
          <Navbar/>
          <Content/>
          <Projects/>
          <Skillset/>
          <Music/>
          <Contact/>
    
        <Footer/>
        </div>

      )}
    </>
  );
}

export default App;