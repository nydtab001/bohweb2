import PageHeader from "../components/PageHeader";
import { Helmet } from "react-helmet";
import Section from "../components/Section";
import SectionHeading from "../components/SectionHeading";
import Footer from "../components/Footer";
import MinistryLayout from "../components/MinistryLayout";
import logos from '../data/logos.json';

function Pathfinders() {
  return (
    <>
    <Helmet>
        <title>
          Adventurer Club - Beacon of Hope Seventh-day Adventist Church
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
    <SectionHeading title="Pathfinder Club" bg="bg-green-900"/>
    <Section>
      <MinistryLayout image={logos[1].src} director={{ name: "George Tsumbalagwa", photo: "/images/john_doe.jpg" }}>
        <div className="mb-6">
          <p className="text-lg mb-6">The Pathfinder Club is a worldwide organization of young people ages 10 to 15, dedicated to building character, developing leadership, and deepening their walk with Christ. Through hands-on learning, service, and adventure, Pathfinders grow spiritually, socially, and physically in a Christ-centered environment.
</p>
        </div>
        <div className="mb-6">
          <h3 className="text-lg font-bold mb-1">Our Activities</h3>
          <ul className="list-disc list-inside">
            <li className="text-lg mb-2">Bible study and spiritual development. Encouraging youth to explore Scripture and apply it to daily life.</li>
            <li className="text-lg mb-2">Skill-building through honors and challenges. From firt aid and camping to creative arts and community service.</li>
            <li className="text-lg mb-2">Outdoor adventures. Including hiking camping, and survival skills.</li>
            <li className="text-lg mb-2">Leadership and teamwork. Opportunities to lead, mentor, and serve withing the club and church.</li>
            <li className="text-lg mb-2">Special events. Pathfinder day, camporees, investiture ceremonies, and regional gatherings.</li>
            </ul>
        </div>
         <div className="mb-6">
          <h3 className="text-lg font-bold mb-1">Get Involved</h3>
          <p className="text-lg">If you have children between the ages of 10 and 15, or if you’re passionate about mentoring youth, we invite you to become part of the Pathfinder Club family. Whether as a member, leader, or volunteer, your involvement helps shape the next generation of Christ-centered leaders.</p>
        </div>
      </MinistryLayout>
    </Section>
    <Footer/>
    </>
  );
}

export default Pathfinders;