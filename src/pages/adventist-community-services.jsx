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
          Adventist Community Services - Beacon of Hope Seventh-day Adventist Church
        </title>
      </Helmet>
    <PageHeader
            
    />
    <SectionHeading title="Adventist Community Services" bg="bg-rose-950" colour="text-amber-400"/>
    <Section>
      <div className="flex flex-col gap-8 md:flex-row items-center justify-between mb-8 border-b-2 border-gray-300 pb-10">
        <img src={logos[3].src} alt="Ministry Logo" className="h-auto w-full max-w-[280px] object-cover" />
        <div className="flex flex-col gap-6">
          {/* Dorcas Director */}
          <div className="flex items-top gap-2">
            <div>
              <p className="font-semibold max-sm:text-2xl mb-1 text-4xl">Dorcas Director</p>
              <p className="text-xl text-gray-500">[Name TBD]</p>
            </div>
          </div>
          {/* AMO Director */}
          <div className="flex items-top gap-2">
            <div>
              <p className="font-semibold max-sm:text-2xl mb-1 text-4xl">AMO Director</p>
              <p className="text-xl text-gray-500">[Name TBD]</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-2xl font-bold mb-6">About the Ministry</h1>
        
        {/* Introduction */}
        <div className="mb-8">
          <p className="text-lg mb-4">
            Adventist Community Services (ACS) is the humanitarian arm of our church, dedicated to serving those in need regardless of race, religion, or background. Through our two main programs—Dorcas Society and Adventist Men's Organization (AMO)—we provide essential services, compassionate care, and practical support to our community.
          </p>
          <p className="text-lg mb-4">
            Our ministry is built on the example of Jesus Christ, who went about doing good and ministering to those in need. We believe that true religion involves caring for the physical, emotional, and spiritual needs of others.
          </p>
        </div>

        {/* Dorcas Section */}
        <div className="mb-12 pb-8 border-b-4 border-green-300">
          <h2 className="text-3xl font-bold text-green-900 mb-6">Dorcas Society</h2>
          
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-green-800 mb-4">Our Mission</h3>
            <p className="text-lg mb-4">
              Named after the biblical Dorcas (also known as Tabitha), who was "always doing good and helping the poor" (Acts 9:36), the Dorcas Society has been a cornerstone of Adventist community service for over a century. Our dedicated members work tirelessly to provide practical assistance to families and individuals facing hardship.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-2xl font-bold text-green-800 mb-4">What We Do</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-green-100 p-6 rounded-lg border-l-4 border-green-600">
                <h4 className="text-xl font-bold text-green-900 mb-3">Food Assistance</h4>
                <ul className="list-disc list-inside space-y-2 text-green-800">
                  <li>Emergency food parcels for families in crisis</li>
                  <li>Regular food distribution programs</li>
                  <li>Hot meals for those in need</li>
                  <li>Food pantry services</li>
                </ul>
              </div>

              <div className="bg-green-100 p-6 rounded-lg border-l-4 border-green-600">
                <h4 className="text-xl font-bold text-green-900 mb-3">Clothing & Essentials</h4>
                <ul className="list-disc list-inside space-y-2 text-green-800">
                  <li>Clean, quality clothing for all ages</li>
                  <li>School uniforms and supplies</li>
                  <li>Baby items and maternity wear</li>
                  <li>Bedding and household items</li>
                </ul>
              </div>

              <div className="bg-green-100 p-6 rounded-lg border-l-4 border-green-600">
                <h4 className="text-xl font-bold text-green-900 mb-3">Family Support</h4>
                <ul className="list-disc list-inside space-y-2 text-green-800">
                  <li>Assistance with utility bills</li>
                  <li>Support for single parents</li>
                  <li>Help for elderly and disabled individuals</li>
                  <li>Referrals to community resources</li>
                </ul>
              </div>

              <div className="bg-green-100 p-6 rounded-lg border-l-4 border-green-600">
                <h4 className="text-xl font-bold text-green-900 mb-3">Skills Training</h4>
                <ul className="list-disc list-inside space-y-2 text-green-800">
                  <li>Sewing and mending workshops</li>
                  <li>Cooking and nutrition classes</li>
                  <li>Budgeting and financial literacy</li>
                  <li>Job readiness programs</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-2xl font-bold text-green-800 mb-4">How We Work</h3>
            <p className="text-lg mb-4">
              Our Dorcas members meet regularly to sort donations, prepare food parcels, organize clothing, and coordinate community outreach. We work with local social services, schools, and other organizations to identify families in need and provide appropriate assistance with dignity and respect.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-2xl font-bold text-green-800 mb-4">Get Involved with Dorcas</h3>
            <p className="text-lg mb-4">
              Whether you can sew, sort, organize, cook, or simply have a heart to help, there's a place for you in Dorcas Society. Join us at our regular meetings and become part of a compassionate team making a real difference in people's lives.
            </p>
            <div className="bg-gradient-to-br from-green-100 to-green-200 p-6 rounded-lg border-l-4 border-green-700">
              <p className="text-lg italic text-green-900 font-semibold">
                "Every act of kindness, no matter how small, makes a difference in someone's life. Our Dorcas members are the hands and feet of Jesus in our community."
              </p>
            </div>
          </div>
        </div>

        {/* AMO Section */}
        <div className="mb-12 pb-8 border-b-4 border-blue-300">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Adventist Men's Organization (AMO)</h2>
          
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-blue-800 mb-4">Our Mission</h3>
            <p className="text-lg mb-4">
              The Adventist Men's Organization (AMO) mobilizes men in service to the church and community. AMO members are committed to being spiritual leaders in their families while actively serving others through health initiatives, community projects, and practical assistance. We believe that real men serve.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-2xl font-bold text-blue-800 mb-4">What We Do</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-blue-100 p-6 rounded-lg border-l-4 border-blue-600">
                <h4 className="text-xl font-bold text-blue-900 mb-3">Health Ministries</h4>
                <ul className="list-disc list-inside space-y-2 text-blue-800">
                  <li>Health screenings and blood pressure checks</li>
                  <li>Health education workshops</li>
                  <li>Smoking cessation programs</li>
                  <li>Stress management seminars</li>
                  <li>Nutrition and cooking demonstrations</li>
                </ul>
              </div>

              <div className="bg-blue-100 p-6 rounded-lg border-l-4 border-blue-600">
                <h4 className="text-xl font-bold text-blue-900 mb-3">Community Projects</h4>
                <ul className="list-disc list-inside space-y-2 text-blue-800">
                  <li>Home repairs for elderly and disabled</li>
                  <li>Community clean-up initiatives</li>
                  <li>Building and renovation projects</li>
                  <li>Disaster relief assistance</li>
                  <li>Transportation services</li>
                </ul>
              </div>

              <div className="bg-blue-100 p-6 rounded-lg border-l-4 border-blue-600">
                <h4 className="text-xl font-bold text-blue-900 mb-3">Mentorship & Leadership</h4>
                <ul className="list-disc list-inside space-y-2 text-blue-800">
                  <li>Mentoring young men and boys</li>
                  <li>Supporting Pathfinders and Adventurers</li>
                  <li>Leadership development workshops</li>
                  <li>Father-son activities</li>
                  <li>Men's spiritual growth groups</li>
                </ul>
              </div>

              <div className="bg-blue-100 p-6 rounded-lg border-l-4 border-blue-600">
                <h4 className="text-xl font-bold text-blue-900 mb-3">Practical Assistance</h4>
                <ul className="list-disc list-inside space-y-2 text-blue-800">
                  <li>Moving assistance for families</li>
                  <li>Yard work and maintenance</li>
                  <li>Vehicle repairs and basic maintenance</li>
                  <li>Emergency response support</li>
                  <li>Security and safety initiatives</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-2xl font-bold text-blue-800 mb-4">AMO Fellowship</h3>
            <p className="text-lg mb-4">
              Beyond service projects, AMO provides opportunities for men to build meaningful friendships, support one another, and grow spiritually. Through regular meetings, retreats, and activities, AMO members encourage each other to be godly husbands, fathers, and community leaders.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-2xl font-bold text-blue-800 mb-4">Get Involved with AMO</h3>
            <p className="text-lg mb-4">
              Men of all ages are welcome to join AMO and make a difference through service, fellowship, and spiritual growth. Whether you have special skills in construction, health, mechanics, or simply a willing heart, your contribution matters.
            </p>
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-6 rounded-lg border-l-4 border-blue-700">
              <p className="text-lg italic text-blue-900 font-semibold">
                "Iron sharpens iron, and one man sharpens another." - Proverbs 27:17. Together, we grow stronger as we serve Christ and our community.
              </p>
            </div>
          </div>
        </div>

        {/* Working Together Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-rose-950 mb-6">Dorcas & AMO: Working Together</h2>
          <div className="bg-gradient-to-r from-rose-50 to-amber-50 p-8 rounded-lg">
            <p className="text-lg mb-4">
              While Dorcas and AMO have distinct focuses, they often collaborate on community service projects. When a family needs both practical assistance and home repairs, or when a community event requires food distribution and setup, these two ministries work seamlessly together to meet the need completely.
            </p>
            <p className="text-lg">
              Through our combined efforts, we demonstrate the love of Christ in practical, tangible ways that touch lives and transform communities.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-rose-950 text-white p-8 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Need Assistance or Want to Help?</h2>
          <p className="text-xl mb-6">
            Adventist Community Services is here for you. Whether you need support or want to serve others, we welcome you with open arms.
          </p>
          <div className="grid md:grid-cols-2 gap-6 text-left max-w-2xl mx-auto">
            <div>
              <h3 className="font-bold text-amber-400 text-lg mb-2">For Assistance:</h3>
              <p className="mb-2">Contact the church office during business hours</p>
              <p className="mb-2">All requests are handled with confidentiality and respect</p>
            </div>
            <div>
              <h3 className="font-bold text-amber-400 text-lg mb-2">To Volunteer:</h3>
              <p className="mb-2">Speak with the Dorcas or AMO director</p>
              <p className="mb-2">Join us at our next meeting or service project</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
    <Footer/>
    </>
  );
}

export default CommunityServices;