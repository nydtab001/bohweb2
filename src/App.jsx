//import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/about.jsx";
import Home from './pages/home.jsx';
import Ministries from './pages/ministries.jsx';
import Events from './pages/events.jsx';
import Sermons from './pages/sermons.jsx';
import Contact from './pages/contact.jsx';
import Adventurers from './pages/adventurers.jsx';
import Pathfinders from './pages/pathfinders.jsx';
import WomensMinistries from './pages/womens-ministries.jsx';
import CommunityServices from './pages/adventist-community-services.jsx';
import PersonalMinistries from './pages/personal-ministries.jsx';
import YouthMinistries from './pages/adventist-youth.jsx';
import SabbathSchool from './pages/sabbath-school.jsx';
import Communications from './pages/communications.jsx';
import MasterGuide from './pages/master-guide.jsx';
import MusicDep from './pages/music-department.jsx';
import Education from './pages/education-department.jsx';
import Health from './pages/health-ministries.jsx';
import ChildrensMin from './pages/childrens-ministries.jsx';
import Stewardship from './pages/stewardship.jsx';
import FamilyMin from './pages/family-ministries.jsx';
import PrayerMin from './pages/prayer-ministries.jsx';
import DonatePage from './pages/donate.jsx';

function App() {
  return (
    
        <Router>
    {/* The AlpsContextProvider and Body components are required as parents other ALPS-React components (normally in your App root)*/}
    <Routes>
      <Route path="/about" element={<About/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/ministries" element={<Ministries/>}/>
      <Route path="/media/sermons" element={<Sermons/>}/>
      <Route path="/media/events" element={<Events/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/ministries/adventurers" element={<Adventurers/>}/>
      <Route path="/ministries/pathfinders" element={<Pathfinders/>}/>
      <Route path="/ministries/womens-ministries" element={<WomensMinistries/>}/>
      <Route path="/ministries/communications" element={<Communications/>}/>
      <Route path="/ministries/master-guide" element={<MasterGuide/>}/>
      <Route path="/ministries/music-department" element={<MusicDep/>}/>
      <Route path="/ministries/education-department" element={<Education/>}/>
      <Route path="/ministries/health-ministries" element={<Health/>}/>
      <Route path="/ministries/adventist-youth-ministries" element={<YouthMinistries/>}/>
      <Route path="/ministries/childrens-ministries" element={<ChildrensMin/>}/>
      <Route path="/ministries/adventist-community-services" element={<CommunityServices/>}/>
      <Route path="/ministries/personal-ministries" element={<PersonalMinistries/>}/>
      <Route path="/ministries/sabbath-school" element={<SabbathSchool/>}/>
      <Route path="/ministries/stewardship" element={<Stewardship/>}/>
      <Route path="/ministries/family-ministries" element={<FamilyMin/>}/>
      <Route path="/ministries/prayer-ministries" element={<PrayerMin/>}/>
      <Route path="/donate" element={<DonatePage/>}/>
      {/* Add more routes as needed */}
    </Routes>
    </Router>
  )
}
export default App;
