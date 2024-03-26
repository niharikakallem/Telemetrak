import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './components/about';
import Projects from './components/projects';
import Team from './components/team';
import Home from './components/home'; // Import Home component

const routes = () => {
  return (
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/project" element={<Projects />} />
      <Route path="/team" element={<Team />} />
      <Route element={<Home />} /> {/* Home route */}
    </Routes>
  );
}

export default routes;