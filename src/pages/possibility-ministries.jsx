import PageHeader from "../components/PageHeader";
import { Helmet } from "react-helmet";
import Section from "../components/Section";
import SectionHeading from "../components/SectionHeading";
import Footer from "../components/Footer";
import MinistryLayout from "../components/MinistryLayout";
import logos from '../data/logos.json';

function PossibilityMinistries() {
  return (
    <>
    <Helmet>
        <title>
          Possibility Ministries - Beacon of Hope Seventh-day Adventist Church
        </title>
      </Helmet>
    <PageHeader
    />
    <SectionHeading title="Possibility Ministries" bg="bg-purple-800" colour="text-slate-100"/>
    <Section>
      <MinistryLayout image={logos[14].src} director={{ name: "TBD", photo: "/images/placeholder.jpg" }}>
        <div className="space-y-6">
          <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-r-lg">
            <h2 className="text-2xl font-bold text-purple-900 mb-4">Who We Are</h2>
            <p className="text-lg text-gray-700 mb-4">
              We are <strong>Adventist Possibility Ministries (APM)</strong> – grounded in the belief that the gospel transforms 
              the way we see ourselves, others, and God. How we perceive personal value while having bodies that are less than 
              perfect is changed when we understand the implications of the gospel message.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              We are APM – recognizing disabilities and loss, but it does not stop there. Rather, we view these through the 
              transforming lens of possibilities—what individuals can do and what they can become because of God's grace.
            </p>
            <p className="text-lg text-gray-700">
              We are APM – advocating for the recognition of dignity and respect of every person and helping to make possible 
              the discovery of unrealized abilities despite stigmas associated with a disability or loss.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">What We Affirm</h2>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
              <p className="text-gray-700 mb-4">We are APM – affirming that:</p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-purple-600 font-bold mr-3 text-xl">•</span>
                  <span>All are gifted, needed, and treasured.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 font-bold mr-3 text-xl">•</span>
                  <span>People go where they are welcomed but stay where they are valued.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 font-bold mr-3 text-xl">•</span>
                  <span>Value is inherent through Creation and not determined by what a person can or cannot do.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 font-bold mr-3 text-xl">•</span>
                  <span>Each person is unique and has a God-given purpose.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 font-bold mr-3 text-xl">•</span>
                  <span>Included in that purpose is the call to enrich the lives of others which flows out of a sense of gratitude for what they themselves have received.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-r-lg">
            <h2 className="text-2xl font-bold text-purple-900 mb-4">A Movement, Not a Program</h2>
            <p className="text-lg text-gray-700 mb-4">
              We are APM – a "movement", not a "program", guided by the Holy Spirit to help us see through the eyes of a 
              loving God the strengths and possibilities of people.
            </p>
            <p className="text-lg text-gray-700">
              We are APM – sharing the confident belief that we can be whole in Christ and called to service regardless of 
              disabilities we may have.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Seven Unique People Groups</h2>
            <p className="text-gray-700 mb-4">
              We are guided by the Holy Spirit to help us see through the eyes of a loving God the strengths and possibilities of seven unique people groups:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-purple-500">
                <h3 className="text-xl font-semibold text-purple-800 mb-2">The Deaf</h3>
                <p className="text-gray-600">
                  Ministering to the deaf community and ensuring accessibility through sign language interpretation and deaf-friendly resources.
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-purple-500">
                <h3 className="text-xl font-semibold text-purple-800 mb-2">The Blind</h3>
                <p className="text-gray-600">
                  Supporting individuals with visual impairments through accessible materials, technology, and inclusive worship experiences.
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-purple-500">
                <h3 className="text-xl font-semibold text-purple-800 mb-2">The Physically Immobile</h3>
                <p className="text-gray-600">
                  Creating accessible spaces and opportunities for those with physical mobility challenges to fully participate in church life.
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-purple-500">
                <h3 className="text-xl font-semibold text-purple-800 mb-2">Mental Health Challenges</h3>
                <p className="text-gray-600">
                  Providing support, understanding, and resources for those facing mental health challenges and their families.
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-purple-500">
                <h3 className="text-xl font-semibold text-purple-800 mb-2">Orphans & Vulnerable Children</h3>
                <p className="text-gray-600">
                  Caring for orphans and vulnerable children, ensuring they experience God's love and have opportunities to thrive.
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-purple-500">
                <h3 className="text-xl font-semibold text-purple-800 mb-2">Those Mourning Loss of Spouse</h3>
                <p className="text-gray-600">
                  Supporting individuals through the grief of losing a spouse with compassion, community, and hope.
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-purple-500">
                <h3 className="text-xl font-semibold text-purple-800 mb-2">Caregivers</h3>
                <p className="text-gray-600">
                  Providing support, resources, and respite for caregivers who selflessly serve those with special needs.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white p-8 rounded-lg shadow-xl">
            <h2 className="text-2xl font-bold mb-4">Join the Journey!</h2>
            <p className="text-lg mb-4">
              We are Adventist Possibility Ministries. Join the journey! Discover the possibilities!
            </p>
            <p className="text-lg mb-6">
              Whether you are someone with a disability, a caregiver, or simply someone who wants to support this vital ministry, 
              there is a place for you in APM. Together, we can create a community where everyone is valued, included, and 
              empowered to fulfill their God-given purpose.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                <span>Connect with our ministry team</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                <span>Volunteer to serve one of our seven people groups</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                <span>Learn about accessibility and inclusion</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                <span>Support caregivers in our community</span>
              </li>
            </ul>
            <div className="text-center">
              <a 
                href="/contact" 
                className="inline-block bg-white text-purple-700 font-bold py-3 px-8 rounded-full hover:bg-purple-50 transition-colors duration-300 shadow-lg"
              >
                Contact Us to Learn More
              </a>
            </div>
          </div>

          <div className="text-center italic text-gray-600 text-lg border-t pt-6">
            <p className="font-semibold text-purple-800">"I can do all things through Christ who strengthens me."</p>
            <p className="text-sm mt-2">- Philippians 4:13</p>
          </div>
        </div>
      </MinistryLayout>
    </Section>
    <Footer/>
    </>
  );
}

export default PossibilityMinistries;
