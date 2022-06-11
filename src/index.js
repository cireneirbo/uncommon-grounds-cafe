import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Menu from './components/Menu';
import MenuItem from './components/MenuItem';
import About from './components/About';
import Contact from './components/Contact';
import Hiring from './components/Hiring';
import Error from './components/Error';
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
