import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from '../components/about';
import Projects from '../components/projects';
import Team from '../components/team';
import Home from '../components/home'; 
import TopBar from './topbar';
import NavBar from './navbar';
import Footer from './footer';

const Layout = () => {
  return (
    <div>
      <div className="sticky top-0 z-10">
     <TopBar/>
     <NavBar/>
     </div>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/team" element={<Team />} />
        <Route path="/" element={<Home />} /> {/* Home route */}
      </Routes>
      <Footer/>
    </div>
  );
}

export default Layout;