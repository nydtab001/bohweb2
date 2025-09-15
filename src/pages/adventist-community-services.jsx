import PageHeader from "../components/PageHeader";
import { Helmet } from "react-helmet";
import Section from "../components/Section";
import SectionHeading from "../components/SectionHeading";
import Footer from "../components/Footer";
import MinistryLayout from "../components/MinistryLayout";
import logos from '../data/logos.json';

function CommunityServices() {
  return (
    <>
    <Helmet>
        <title>
          Adventurer Club - Beacon of Hope Seventh-day Adventist Church
        </title>
      </Helmet>
    <PageHeader
            
    />
    <SectionHeading title="Adventist Community Services" bg="bg-rose-950" colour="text-amber-400"/>
    <Section>
      <MinistryLayout image={logos[3].src} director={{ name: "John Doe", photo: "/images/john_doe.jpg" }}>
        <div>
          <p className="text-lg mb-6">The Adventurer Club is a family-centered program that provides fun and challenging activities for children ages 4 to 9. It aims to strengthen their spiritual growth, develop their skills, and foster a sense of community.</p>
          <p className="text-lg mb-6">Join us for exciting adventures, learning experiences, and spiritual growth!</p>
        </div>
      </MinistryLayout>
    </Section>
    <Footer/>
    </>
  );
}

export default CommunityServices;