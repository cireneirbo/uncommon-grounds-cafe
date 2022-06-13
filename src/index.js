import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import MenuItem from './pages/MenuItem';
import About from './pages/About';
import Contact from './pages/Contact';
import Hiring from './pages/Hiring';
import Error from './pages/Error';
import './index.css';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
  
    <React.StrictMode>
      
      <Routes>
        <Route path="uncommon-grounds-cafe/" element={<App />} >
          <Route exact path="" element={<Home />} />
          <Route exact path="menu" element={<Menu />} />
          {/* <Route path="menu/:menuItem" element={<MenuItem />} /> */}
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="hiring" element={<Hiring />} />
          <Route
            path="*"
            element={<Error />} 
          />
        </Route>
      </Routes>
      
    </React.StrictMode>
  
  </BrowserRouter>,
  document.getElementById('root')
);
