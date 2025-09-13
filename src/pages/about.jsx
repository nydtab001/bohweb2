import React from "react";
import { Helmet } from "react-helmet";
//import logo from './logo.svg';
//import './App.css';
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';
import SectionHeading from '../components/SectionHeading';
import UnderConstruction from "../components/under_construction";
import Section from "../components/Section";
import leaders from "../data/leaders.json";

const date = new Date();

function About() {
  return (
    <>
      <Helmet>
        <title>
          About Us - Beacon of Hope Seventh-day Adventist Church
        </title>
      </Helmet>
        <PageHeader
        navItems={[
          { label: "Home", href: "/" },
          { label: "About Us ▼", href: "/about" },
          { label: "Ministries", href: "/ministries" },
          { label: "Media ▼", href: "/media/sermons" },
          { label: "Contact Us", href: "/contact" }
        ]}
      />
      <SectionHeading title="About Us"/>
      <Section>
  {/* <h2 className="md:text-4xl text-2xl font-bold mb-12">Church Leadership</h2> */}
  <h2 className="md:text-4xl text-2xl font-bold mb-8" id="elders">Pastor</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:mb-16 mb-10 md:grid-cols-3 gap-8">
    {leaders.filter(m=>m.role==="Pastor").map((leader, index) => (
      <div key={index} className="bg-amber-800 rounded-lg shadow-md p-6 text-center">
        <h3 className="text-lg font-bold mb-1 text-white">{leader.name}</h3>
        <p className="text-sm text-white font-medium">{leader.role}</p>
        {leader.bio && (
          <p className="mt-4 text-sm text-white">{leader.bio}</p>
        )}
      </div>
    ))}
  </div>
  <h2 className="md:text-4xl text-2xl font-bold mb-8" id="elders">Elders</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:mb-16 mb-10 md:grid-cols-3 gap-8">
    {leaders.filter(m=>m.role==="Elder").map((leader, index) => (
      <div key={index} className="bg-blue-900 rounded-lg shadow-md p-6 text-center">
        <h3 className="text-lg font-bold mb-1 text-white">{leader.name}</h3>
        <p className="text-sm text-white font-medium">{leader.position}</p>
        {leader.bio && (
          <p className="mt-4 text-sm text-white">{leader.bio}</p>
        )}
      </div>
    ))}
  </div>
  <h2 className="md:text-4xl text-2xl font-bold mb-8">Deacons</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mb-6 gap-8">
    {leaders.filter(m=>m.role==="Deacon" | m.role==="Deaconess").map((leader, index) => (
      <div key={index} className="bg-indigo-50 rounded-lg shadow-md p-6 text-center">
        <h3 className="text-lg font-bold mb-1 text-gray-600">{leader.name}</h3>
        <p className="text-sm text-gray-600 font-medium">{leader.role}</p>
        {leader.bio && (
          <p className="mt-4 text-sm text-gray-500">{leader.bio}</p>
        )}
      </div>
    ))}
  </div>
      </Section>
      <Footer/>
      </>
  );
}

export default About;