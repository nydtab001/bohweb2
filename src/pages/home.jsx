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
<section className="relative md:mt-[113px] mt-[96px] h-[400px] md:h-[550px] py-16 text-center overflow-hidden bg-black">
  {/* Background image */}
  <img
    src={bohbg}
    alt="Beacon of Hope background"
    className="absolute inset-0 w-full h-full object-cover z-[0]"
    loading="eager"
    decoding="async"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/30 z-[1]" />

  {/* Content */}
  <h1 className="text-4xl md:text-7xl px-8 md:pt-12 font-bold text-white relative z-10">
    Welcome to Beacon of Hope
  </h1>
  <p className="text-lg md:text-3xl px-8 mt-4 text-white relative z-10">
    The Warmest Church South of the Pyramids
  </p>
  <div className="mt-6 relative z-10">
    <button
      className="text-white max-sm:text-sm px-6 py-3 border border-white rounded-full shadow transition-colors duration-100 ease-out hover:bg-blue-800/80"
      onClick={() => navigate("/media/sermons")}
    >
      Listen to Sermons
    </button>
  </div>
</section>

<section className="bg-gray-100">
<Section className=" text-center">
  <h2 className="md:text-5xl text-2xl font-semibold mb-8">A Message from Our Pastor</h2>
  <p className="max-w-full mx-auto md:text-2xl text-lg text-gray-700">
    “At Beacon of Hope, we believe in nurturing faith, fostering community, and living out the love of Christ. Whether you're a lifelong believer or just curious, you're welcome here.”
  </p>
</Section>
</section>
<section className="md:px-16 max-w-6xl mx-auto px-8 md:pt-10 pt-8">
  <MultiPageBulletinCarousel bulletins={bulletinData} />
</section>
<section className="pt-8 bg-white text-center">
  <h2 className="md:text-5xl max-sm:text-2xl max-sm:mb-8 text-3xl font-semibold mb-12">Last Sabbath Livestream</h2>
  <div className="relative w-full max-w-4xl mx-auto aspect-video">
    <iframe
      src="https://www.youtube.com/embed/U90UV9RpsDY?si=GDJXX_-QTOdqpp98"
      title="Last Sabbath Livestream"
      className="absolute inset-0 w-full h-full"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      loading="lazy"
    />
  </div>
</section>
<Footer/>
</>
    );
}

export default Home;
