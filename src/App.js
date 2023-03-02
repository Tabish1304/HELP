import './App.css';
import Navbar from './Navbar';

import Home from './pages/Home';
import About from './pages/About';

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";




function App() {
  return (
    <BrowserRouter> 

      <main>
      <Navbar></Navbar>
      <Routes>

      <Route  path='/' element ={<Home />}/>
      <Route  path='about' element ={<About />}/>


      </Routes>


      </main>



    </BrowserRouter>
  );
}

export default App;
