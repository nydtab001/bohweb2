import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import bohbg from "/bohbg.jpg";
import UnderConstruction from "../components/under_construction";
import Section from "../components/Section";
import { useNavigate } from "react-router-dom";
import bulletinData from "../data/bulletins.json";
import MultiPageBulletinCarousel from "../components/BulletinCarousel";
import BgCarousel from "../components/BgCarousel";
import backgrounds from "../data/backgrounds.json";
import DonatePage from "./donate";

function Home(){
    const navigate = useNavigate();
    return(
        <>
        <Helmet>
        <title>
          Beacon of Hope Seventh-day Adventist Church
        </title>
        <link rel="preload" as="image" href="backgrounds/bg1.webp" />
        <link rel="preload" as="image" href="backgrounds/bg2.webp" />
        <link rel="preload" as="image" href="backgrounds/bg3.webp" />
        <link rel="preload" as="image" href="/bohlogo.png" />
      </Helmet>
        <PageHeader />        
<section className="relative md:mt-[113px] mt-[96px] max-sm:h-[300px] h-[400px] md:h-[620px] text-center">
  {/* Background image */}
  {/* <img
    src={bohbg}
    alt="Beacon of Hope background"
    className="absolute inset-0 w-full h-full object-cover z-[0]"
    loading="eager"
    decoding="async"
  /> */}
  <div className="absolute inset-0 h-full m-auto z-0 overflow-hidden">
    <BgCarousel slides={backgrounds} />
  </div>

  {/* Content */}
  {/* <h1 className="text-4xl md:text-7xl px-8 md:pt-12 text-shadow-lg font-bold text-white relative z-10">
    Welcome to Beacon of Hope
  </h1>
  <p className="text-lg md:text-3xl text-shadow-lg px-8 mt-4 text-white relative z-10">
    The Warmest Church South of the Pyramids
  </p>
  <div className="mt-6 relative z-10">
    <button
      className="text-white max-sm:text-sm px-6 py-3 border border-white rounded-full shadow transition-colors duration-100 ease-out hover:bg-blue-800/80"
      onClick={() => navigate("/media/sermons")}
    >
      Listen to Sermons
    </button>
  </div> */}
</section>

<section className="bg-gray-100">
<Section className=" text-center">
  <h2 className="md:text-5xl text-2xl font-semibold mb-8">A Message from Our Pastor</h2>
  <p className="max-w-full mx-auto md:text-2xl text-lg text-gray-700">
    “At Beacon of Hope, we believe in nurturing faith, fostering community, and living out the love of Christ. Whether you're a lifelong believer or just curious, you're welcome here.”
  </p>
</Section>
</section>
<section className="md:px-16 max-w-6xl mx-auto px-8 md:pt-10 md:pb-10 pt-8">
  <MultiPageBulletinCarousel bulletins={bulletinData} />
</section>
<section className="bg-blue-900 ">
<Section className="py-12 md:pt-10 pt-8 text-center border-t border-gray-200">
  <h2 className="text-2xl md:text-5xl font-semibold text-white mb-4">
    Partner With Us in Building God's House
  </h2>
  <p className="md:text-2xl text-lg text-white max-w-full mx-auto mb-8">
    Beacon of Hope is expanding its church structure to create more space for worship, youth programs, and community outreach. Your support helps us lay every brick with purpose and prayer.
  </p>
  <div className="flex justify-center">
    <a
      href="/give#building-fund" // Replace with actual donation URL
      rel="noopener noreferrer"
      className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 py-3 rounded-full shadow-md transition-colors duration-200"
    >
      Donate to the Expansion Project
    </a>
  </div>
  <p className="mt-6 text-sm text-white">
    Every contribution brings us closer to a space where faith, fellowship, and service can flourish.
  </p>
</Section>
</section>
<section className="md:pt-16 bg-white text-center md:pb-16">
  <h2 className="md:text-5xl max-sm:text-2xl max-sm:mb-8 pt-8 text-3xl font-semibold mb-12">Sabbath Livestream</h2>
  <div className="relative w-full max-w-4xl mx-auto aspect-video ">
    <iframe
      src="https://www.youtube.com/embed/09WjXQJZMKg?si=a187uUgJ5DkLjnhI"
      title="Sabbath Livestream"
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
