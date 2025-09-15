import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import Section from "../components/Section";
import SectionHeading from "../components/SectionHeading";
import { Helmet } from "react-helmet";
import { useMediaQuery } from "react-responsive";
import events from "../data/events.json";

export default function Events(){
  const isSmallScreen = useMediaQuery({ maxWidth: 767 });
  const calendarView = isSmallScreen ? "&mode=AGENDA" : ""
    return(
        <>
        <Helmet>
        <title>
          Events - Beacon of Hope Seventh-day Adventist Church
        </title>
        </Helmet>
        <PageHeader 
        />
        <SectionHeading title="Events"/>
        <Section>
          <h1 className="text-2xl font-bold mb-4">Upcoming Events</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {events.map((event, index) => (
      <div key={index} className="bg-white rounded-lg shadow hover:shadow-lg gr transition duration-300 overflow-hidden">
        <img
          src={event.flyer}
          alt={event.title}
          className="w-full h-64 object-cover"
          loading="lazy"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold">{event.title}</h3>
          <p className="text-sm text-gray-600 mt-1">{event.date}</p>
          <p className="text-sm text-gray-500 mt-2">{event.location}</p>
          <a
            href={event.link}
            className="inline-block mt-4 text-blue-600 hover:underline text-sm font-medium"
          >
            View Details →
          </a>
        </div>
      </div>
    ))}
          </div>
      <h1 className="text-2xl font-bold mb-4">Church Events Calendar</h1>
        <iframe
        src={`https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Africa%2FJohannesburg&showPrint=0${calendarView}&src=Ym9oc2RhY29tbXNAZ21haWwuY29t&src=ZmNjNjQ4YWUxMzllYmI3OGM5YzhmNWE5YjAyYmJjNTBhOTdhNmQ4ZDYyNWQyODBmMWExNGE5ZTQ5ZTJlMmVmMkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23039be5&color=%23f6bf26`}
        // https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Africa%2FJohannesburg&showPrint=0&mode=AGENDA&src=Ym9oc2RhY29tbXNAZ21haWwuY29t&src=ZmNjNjQ4YWUxMzllYmI3OGM5YzhmNWE5YjAyYmJjNTBhOTdhNmQ4ZDYyNWQyODBmMWExNGE5ZTQ5ZTJlMmVmMkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23039be5&color=%23f6bf26" style="border:solid 1px #777" width="800" height="600" frameborder="0" scrolling="no"
        style={{ border: 0 }}
        width="100%"
        height="600"
        title="Church Calendar"
        ></iframe>
        
        </Section>
        <Footer/>
        </>
    );
}