//import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/about.jsx";
import Home from "./pages/home.jsx";
import Contact from './pages/contact.jsx';
import Ministries from './pages/ministries.jsx';
import Sermons from './pages/sermons.jsx';


import { Body,/* Div, Button, Blockquote, MediaBlock,
  Sabbath, */BasicPage
} from './alps-components.js'; // Import from your custom file
//import { BOH } from './boh';

function App() {
  return (
    
        <Router>
    {/* The AlpsContextProvider and Body components are required as parents other ALPS-React components (normally in your App root)*/}
    <Routes>
      <Route path="/about" element={<About/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/ministries" element={<Ministries/>}/>
      <Route path="/media/sermons" element={<Sermons/>}/>
    </Routes>
    </Router>
  )
}
export default App;
