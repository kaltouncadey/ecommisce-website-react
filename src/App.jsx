 import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Service from './pages/Service';
// import  Projects from './pages/About';
// import About from './pages/About';
import Shoping from './pages/Courses';
import  Contact  from './pages/Contact';
import Login from './pages/Login';

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          {/* <Route path='/projects' element={<Projects/>}  /> */}
          {/* <Route path='/About' element={<About/>} /> */}
          <Route path='/Shoping' element={< Shoping/>} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Login' element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;


// style.nav ? "nav-menu active" : "nav-menu";