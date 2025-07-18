import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import bohbg from "/bohbg.jpg";
import UnderConstruction from "../components/under_construction";


function Home(){
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
          { label: "Ministries ▼", href: "/ministries" },
          { label: "Media ▼", href: "/media/sermons" },
          { label: "Contact Us", href: "/contact" }
        ]}/>        
<section className="relative bg-no-repeat mt-[113px] bg-cover bg-center h-[400px] md:h-[550px] py-16 text-center" style={{backgroundImage: `url(${bohbg})`}}>
    <div className="absolute inset-0 bg-black/30"></div>
  <h1 className="text-4xl md:text-7xl md:pt-12 font-bold py-auto text-white relative z-99">Welcome to Beacon of Hope</h1>
  <p className="text-lg md:text-3xl mt-4 text-white relative z-99">The Warmest Church South of the Pyramids</p>
  <div className="mt-6">
    <button className="bg-blue-700 text-white relative z-999 px-6 py-3 rounded-full shadow hover:bg-blue-800 transition">
      Watch Sermons
    </button>
  </div>
</section>
<UnderConstruction/>
<Footer/>
</>
    );
}

export default Home;
