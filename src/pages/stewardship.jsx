import PageHeader from "../components/PageHeader";
import { Helmet } from "react-helmet";
import Section from "../components/Section";
import SectionHeading from "../components/SectionHeading";
import Footer from "../components/Footer";
import MinistryLayout from "../components/MinistryLayout";
import logos from '../data/logos.json';

function Stewardship() {
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
    <SectionHeading title="Stewardship" bg="bg-violet-950" colour="text-amber-500"/>
    <Section>
      <MinistryLayout image={logos[9].src} director={{ name: "John Doe", photo: "/images/john_doe.jpg" }}>
        <div className="mb-6">
          <p className="text-lg mb-6">The Adventurer Club is a family-centered program that provides fun and challenging activities for children ages 4 to 9. We help children and their families grow closer to Jesus thorugh Bible learning, life skills, and outdoor activities.</p>
        </div>
        <div className="mb-6">
          <h3 className="text-lg font-bold mb-1">Our Activities</h3>
          <ul className="list-disc list-inside">
            <li className="text-lg mb-2">Bible lessons and crafts</li>
            <li className="text-lg mb-2">Family involvement programs that encourage parents to take part in thier children's spiritual growth</li>
            <li className="text-lg mb-2">Outdoor activities like nature walks and camping</li>
            <li className="text-lg mb-2">Special events such as Adventurer Day and conference-wide gatherings</li>
            </ul>
        </div>
         <div className="mb-6">
          <h3 className="text-lg font-bold mb-1">Get Involved</h3>
          <p className="text-lg">If you have children within this age group, or if you'd like to werve as a keader or helpers, we welcome you to join the Adventurer club Family.</p>
        </div>
      </MinistryLayout>
    </Section>
    <Footer/>
    </>
  );
}

export default Stewardship;