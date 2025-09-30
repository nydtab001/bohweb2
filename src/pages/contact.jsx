import { Helmet } from "react-helmet";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import SectionHeading from "../components/SectionHeading";
import Section from "../components/Section";

export default function Contact(){
    return(
        <>
        <Helmet>
        <title>
          Contact Us - Beacon of Hope Seventh-day Adventist Church
        </title>
        </Helmet>
        <PageHeader />
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
            <p><strong>Phone: </strong><a href="tel:#" className="hover:underline">+263 77 123 4567</a></p>
            <p><strong>Email: </strong><a href="mailto:beaconofhope@wzc.adventist.org" className="hover:underline">beaconofhope@wzc.adventist.org</a></p>
          </div>
          <div className="bg-green-100 p-8 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Service Times</h3>
            <p><strong>Sabbath School:</strong> Saturday, 9:00 AM – 10:00 AM</p>
            <p><strong>Main Service:</strong> Saturday, 10:30 AM – 12:00 PM</p>
            <p><strong>Afternoon Service:</strong> Saturday, 2:00 PM – 4:00 PM</p>
            <p><strong>Vespers:</strong> Saturday, Sunset</p>
          </div>
        </div>
        <div className="mt-8 bg-yellow-50 p-8 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Church Contact Directory</h3>
          <p><strong>Pastor:</strong> Clifford Sibanda<br/>Phone: <a className="text-orange-800 underline" href="tel:#">+263 77 987 6543</a><br/>
          Email: <a className="text-orange-800 underline" href="mailto:#">pastor@wzc.adventist.org</a></p>
          <p className="mt-4"><strong>Head Elder:</strong> Michael Ncube<br/>Phone: +263 77 222 3344<br/>Email: elder@wzc.adventist.org</p>
          <p className="mt-4"><strong>Communications Department</strong><br/>
          Email: <a className="text-orange-800 underline" href="mailto:bohsdacomms@gmail.com">bohsdacomms@gmail.com</a></p>
          <p className="mt-4"><strong>Church Clerk:</strong> Faith Ncube(Head)<br/>
          Phone: <a className="text-orange-800 underline" href="tel:#">+263 77 555 1234</a>
          <br/>
          Email: <a className="text-orange-800 underline" href="mailto:#">clerk@wzc.adventist.org</a></p>
          <p className="mt-4"><strong>Church Clerk:</strong> Charity Ngwenya<br/>
          Phone: <a className="text-orange-800 underline" href="tel:#">+263 77 555 1234</a>
          <br/>
          Email: <a className="text-orange-800 underline" href="mailto:#">clerk@wzc.adventist.org</a></p>
          <p className="mt-4"><strong>Church Clerk:</strong> Bridget Maplanka<br/>
          Phone: <a className="text-orange-800 underline" href="tel:#">+263 77 555 1234</a>
          <br/>
          Email: <a className="text-orange-800 underline" href="mailto:#">clerk@wzc.adventist.org</a></p>
        </div>
        </Section>
        <Footer/>
        </>
    );
}