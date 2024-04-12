import {Routes, Route} from 'react-router-dom';
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services"
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

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
      <Route path='Services' element={<Services />} />
      <Route path='About' element={<About />} />
      <Route path='Portfolio' element={<Portfolio />} />
      <Route path='Contact' element={<Contact />} />
    </Routes>
    <Footer/>
   </>
  );
}

function RouteIndex() {
  return <Home />;
}

export default App;
