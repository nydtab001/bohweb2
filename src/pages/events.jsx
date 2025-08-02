import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import Section from "../components/Section";
import SectionHeading from "../components/SectionHeading";
import { Helmet } from "react-helmet";
import { useMediaQuery } from "react-responsive";

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
        <PageHeader navItems={[
          { label: "Home", href: "/" },
          { label: "About Us ▼", href: "/about" },
          { label: "Ministries", href: "/ministries" },
          { label: "Media ▼", href: "/media/sermons" },
          { label: "Contact Us", href: "/contact" }
        ]}
        />
        <SectionHeading title="Events"/>
        <Section>
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