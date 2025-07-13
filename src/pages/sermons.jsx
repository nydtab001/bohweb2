import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import Section from "../components/Section";
import SectionHeading from "../components/SectionHeading";
import sermons from '../data/sermons.json'
import { Helmet } from "react-helmet";

export default function Sermons2() {
    return(
        <>
        <Helmet>
        <title>
          Sermons - Beacon of Hope Seventh-day Adventist Church
        </title>
      </Helmet>
        <PageHeader navItems={[
                  { label: "Home", href: "/" },
                  { label: "About Us ▼", href: "/about" },
                  { label: "Ministries ▼", href: "/ministries" },
                  { label: "Media ▼", href: "/media/sermons" },
                  { label: "Contact Us", href: "/contact" }
                ]}
        />
        <SectionHeading title="Sermons"/>
        <Section>
            <h1 className="text-3xl font-bold mb-6">Youth Week of Prayer/AWR</h1>
            <br></br>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {sermons.slice(0,4).map((sermon, index) => (
                    <div key={index} className="bg-white shadow-md rounded-lg p-4">
                        <h2 className="text-xl font-semibold text-slate-900">{sermon.title}</h2>
                        <div style={{height:'8px'}}></div>
                        <p className="text-gray-600 text-sm mb-2">{sermon.date}</p>
                        <div style={{height:'3px'}}></div>
                        <audio controls className="w-full">
                        <source src={sermon.audioUrl} type="audio/mpeg" />
                        Your browser does not support the audio element.
                        </audio>
                        {/* <p className="text-gray-700 mt-2">{sermon.description}</p> */}
                        <div style={{height:'20px'}}></div>
                    </div>
                ))}
            </div>
            <br/><br/>
            <h1 className="text-3xl font-bold mb-6">Stewardship Week of Prayer</h1>
            <br></br>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {sermons.slice(4,9).map((sermon, index) => (
                    <div key={index} className="bg-white shadow-md rounded-lg p-4">
                        <h2 className="text-xl font-semibold text-slate-900">{sermon.title}</h2>
                        <div style={{height:'8px'}}></div>
                        <p className="text-gray-600 text-sm mb-2">{sermon.date}</p>
                        <div style={{height:'3px'}}></div>
                        <audio controls className="w-full">
                        <source src={sermon.audioUrl} type="audio/mpeg" />
                        Your browser does not support the audio element.
                        </audio>
                        {/* <p className="text-gray-700 mt-2">{sermon.description}</p> */}
                        <div style={{height:'20px'}}></div>
                    </div>
                ))}
            </div>
        </Section>
        <Footer/>
        </>
    );
}