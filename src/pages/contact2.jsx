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
      height="450"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="shadow-md mb-14"
    ></iframe>
     <div className="grid gap-8 md:grid-cols-2">
          <div className="bg-blue-50 p-8 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Address</h3>
            <p><strong>Beacon of Hope Seventh-Day Adventist Church</strong><br/>Corner 5th & Josiah Tongogara,<br/> Bulawayo,<br/> Zimbabwe</p>
            <br/>
            <p><strong>Phone: </strong><a href="tel:+263123456789" className="hover:underline">+263 77 123 4567</a></p>
            <p><strong>Email: </strong><a href="mailto:beaconofhope@wzc.adventist.org" className="hover:underline">beaconofhope@wzc.adventist.org</a></p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2"></h3>
            <p></p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2"></h3>
            <p></p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">🕘 Service Times</h3>
            <p>Sabbath: 9:00AM – 12:30PM</p>
          </div>
        </div>
        </Section>
        <Footer/>
        </>
    );
}