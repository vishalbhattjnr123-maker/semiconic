
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home';
import About1 from './Pages/About1';
import About from './components/About';
import Segment1 from './Pages/Segment1';
import Smps1 from './Pages/Smps1';
import Industrial1 from './Pages/Industrial1';
import Lighting1 from './Pages/Lighting1';
import Linecard1 from './Pages/Linecard1';
import Smc1 from './Pages/Smc1';
import Research1 from './Pages/Research1';
import Solution1 from './Pages/Solultion1';
import Servies1 from './Pages/Servies1';
import Clients1 from './Pages/Clients1';
import Contect1 from './Pages/Contect1';
import Career1 from './Pages/Career1';
import Bldc1 from './Pages/Bldc1';
import Emeter1 from './Pages/Emeter';
import Auto1 from './Pages/Auto1';
import Medical1 from './Pages/Medical1';
import Solar1 from './Pages/Solar';
import Module1 from './Pages/Module1';
import Io1 from './Pages/Io1';
function App() {
 

  return (
    <>
      <BrowserRouter>
     

    
      <Routes>
        <Route path="/" element={<Home/>} />
    <Route path="/About" element={<About1/>} />
     <Route path="/Segment" element={<Segment1/>} />
      <Route path="/Smps" element={<Smps1/>} />
      <Route path="/Industrial" element={<Industrial1/>} />
 <Route path="/Lighting" element={<Lighting1/>} />

 <Route path="/Linecard" element={<Linecard1/>} />
 <Route path="/Smc" element={<Smc1/>} />
  <Route path="/Research" element={<Research1/>} />
  <Route path="/Solutions" element={<Solution1/>} />
<Route path="/Servies" element={<Servies1/>} />
<Route path="/Clients" element={<Clients1/>} />
<Route path="/Contect" element={<Contect1/>} />
<Route path="/Career" element={<Career1/>} />
<Route path="/Bldc" element={<Bldc1/>} />
<Route path="/Emeter" element={<Emeter1/>} />
<Route path="/Auto" element={<Auto1/>} />
<Route path="/Medical" element={<Medical1/>} />
<Route path="/Solar" element={<Solar1/>} />
<Route path="/Module" element={<Module1/>} />
<Route path="/Io" element={<Io1/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
