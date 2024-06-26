import {Routes, Route} from 'react-router-dom';
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services"
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Graphic from './pages/Graphic';
import Website from './pages/Website';
import VideoAnimation from './pages/VideoAnimation';
import DigitalMarketing from './pages/DigitalMarketing';
import SEO from './pages/SEO';
import WhatsAppButton from './components/WhatsApp';
import ParticleComponent from './components/particle';

function App() {
  return (
    <>
    <div>
    <Navbar/>
    </div>
    <Routes>
      <Route
       path="/"
       element={
         <>
           <RouteIndex />
         </>
       }
      />
     
      <Route path='Home' element={<Home />} />
      <Route path='Particle' eleme={<ParticleComponent />}/>
      <Route path='Services' element={<Services />} />
      <Route path='About' element={<About />} />
      <Route path='Portfolio' element={<Portfolio />} />
      <Route path='Contact' element={<Contact />} />
      <Route path='Graphic' element={<Graphic />} />
      <Route path='Website' element={<Website />} />
      <Route path='VideoAnimation' element={<VideoAnimation />} />
      <Route path='DigitalMarketing' element={<DigitalMarketing />} />
      <Route path='SEO' element={<SEO />} />
    </Routes>
    <Footer/>
    <WhatsAppButton/>
   </>
  );
}

function RouteIndex() {
  return <Home />;
}

export default App;
