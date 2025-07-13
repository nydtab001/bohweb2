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
        <Section></Section>
        <Footer/>
        </>
    );
}