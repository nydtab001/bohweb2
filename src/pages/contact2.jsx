import { Helmet } from "react-helmet";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import SectionHeading from "../components/SectionHeading";
import Section from "../components/Section";

export default function Contact2(){
    return(
        <>
        <Helmet>
        <title>
          Contact Us - Beacon of Hope Seventh-day Adventist Church
        </title>
        </Helmet>
        <PageHeader navItems={[
            { label: "Home", href: "/" },
            { label: "About Us ▼", href: "/about" },
            { label: "Ministries ▼", href: "/ministries" },
            { label: "Media ▼", href: "/media/sermons" },
            { label: "Contact Us", href: "/contact" }
        ]}/>
        <SectionHeading title="Contact Us"/>
        <Section className="px-4 py-8">
            
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3745.5647251692935!2d28.58464908885497!3d-20.152199099999983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1eb55470512b2437%3A0xb244424c1d9f31cd!2sBeacon%20of%20Hope%20Adventist%20Church!5e0!3m2!1sen!2szw!4v1743457677845!5m2!1sen!2szw"
      width="100%"
      height="350"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className=" shadow-md"
    ></iframe>
  
        </Section>
        <Footer/>
        </>
    );
}