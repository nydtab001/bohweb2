import React from "react";
import { Helmet } from "react-helmet";
//import logo from './logo.svg';
//import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';
import SectionHeading from '../components/SectionHeading';
import UnderConstruction from "../components/under_construction";
import Section from "../components/Section";
import logos from '../data/logos.json';

const date = new Date();

function Ministries() {
  return (
    <>
      <Helmet>
        <title>
          Ministries - Beacon of Hope Seventh-day Adventist Church
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
      <SectionHeading title="Ministries"/>
      <Section>
        <div className="flex flex-col md:grid md:grid-cols-4 md:gap-14 px-4 py-8">
          {logos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center transition-all hover:scale-110">
              <a href="#"><img src={logo.src} alt={logo.alt} className="h-auto max-w-[190px] w-full object-cover mb-4 md:mb-0" /></a>
            </div>
          ))}
        </div>
      </Section>
      {/* <UnderConstruction/> */}
      <Footer/>
      </>
  );
}

export default Ministries;