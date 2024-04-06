import {Routes, Route} from 'react-router-dom';
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services"


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
    </Routes>
    <Footer/>
   </>
  );
}

function RouteIndex() {
  return <Home />;
}

export default App;
