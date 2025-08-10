import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import bohbg from "/bohbg.jpg";
import UnderConstruction from "../components/under_construction";
import Section from "../components/Section";
import { useNavigate } from "react-router-dom";
import bulletinData from "../data/bulletins.json";
import MultiPageBulletinCarousel from "../components/BulletinCarousel";

function Home(){
    const navigate = useNavigate();
    return(
        <>
        <Helmet>
        <title>
          Beacon of Hope Seventh-day Adventist Church
        </title>
      </Helmet>
        <PageHeader 
         navItems={[
          { label: "Home", href: "/" },
          { label: "About Us ▼", href: "/about" },
          { label: "Ministries", href: "/ministries" },
          { label: "Media ▼", href: "/media/sermons" },
          { label: "Contact Us", href: "/contact" }
        ]}/>        
<section className="relative bg-no-repeat mt-[113px] bg-cover bg-center h-[400px] md:h-[550px] py-16 text-center" style={{backgroundImage: `url(${bohbg})`}}>
    <div className="absolute inset-0 bg-black/30"></div>
  <h1 className="text-4xl md:text-7xl md:pt-12 font-bold py-auto text-white relative z-99">Welcome to Beacon of Hope</h1>
  <p className="text-lg md:text-3xl mt-4 text-white relative z-99">The Warmest Church South of the Pyramids</p>
  <div className="mt-6">
    <button className=" text-white relative z-999 px-6 py-3 border-white rounded-full shadow transition-colors hover:ease-in ease-out duration-100 hover:bg-blue-800/80"
    onClick={() => navigate("/media/sermons")}>
      Listen to Sermons
    </button>
  </div>
</section>
<Section className="bg-gray-100">
  <section className=" px-6 text-center">
  <h2 className="text-3xl font-semibold mb-4">A Message from Our Pastor</h2>
  <p className="max-w-2xl mx-auto text-lg text-gray-700">
    “At Beacon of Hope, we believe in nurturing faith, fostering community, and living out the love of Christ. Whether you're a lifelong believer or just curious, you're welcome here.”
  </p>
</section>
</Section>
<section className="md:px-16 max-w-7xl mx-auto px-8 py-12 pt-12">
  <MultiPageBulletinCarousel bulletins={bulletinData} />
</section>
<Footer/>
</>
    );
}

export default Home;
