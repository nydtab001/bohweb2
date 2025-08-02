import React from "react";
import { Helmet } from "react-helmet";
//import logo from './logo.svg';
//import './App.css';
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';
import SectionHeading from '../components/SectionHeading';
import UnderConstruction from "../components/under_construction";

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
      <UnderConstruction/>
      <Footer/>
      </>
  );
}

export default About;