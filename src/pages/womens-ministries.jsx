import PageHeader from "../components/PageHeader";
import { Helmet } from "react-helmet";
import Section from "../components/Section";
import SectionHeading from "../components/SectionHeading";
import Footer from "../components/Footer";
import MinistryLayout from "../components/MinistryLayout";
import logos from '../data/logos.json';

function WomensMinistries() {
  return (
    <>
    <Helmet>
        <title>
          Women's Ministries - Beacon of Hope Seventh-day Adventist Church
        </title>
      </Helmet>
    <PageHeader
    />
    <SectionHeading title="Women's Ministries" bg="bg-fuchsia-950"/>
    <Section>
      <MinistryLayout image={logos[2].src} director={{ name: "John Doe", photo: "/images/john_doe.jpg" }}>
        <div className="mb-6">
          <p className="text-lg mb-4">Women's Ministries at Beacon of Hope is dedicated to nurturing, empowering, and equipping women of all ages to grow in their relationship with Christ and to serve their families, church, and communities with joy and purpose.</p>
          <p className="text-lg">We believe that every woman has unique gifts and talents that God wants to use for His glory. Through fellowship, study, and service, we create a supportive environment where women can flourish spiritually, emotionally, and socially.</p>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-fuchsia-900">Our Mission</h3>
          <p className="text-lg mb-3">To affirm, support, and challenge Adventist women in their pilgrimage as disciples of Jesus Christ and members of His world church.</p>
          <div className="bg-fuchsia-50 p-5 rounded-lg">
            <p className="text-lg italic text-fuchsia-900">"Charm is deceptive, and beauty is fleeting; but a woman who fears the Lord is to be praised." - Proverbs 31:30</p>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-fuchsia-900">Our Programs & Activities</h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-xl font-semibold mb-2 text-fuchsia-800">Women's Sabbath Services</h4>
              <p className="text-lg">Special quarterly programs celebrating women's contributions to church and society, featuring inspiring messages and testimonies.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2 text-fuchsia-800">Bible Study Groups</h4>
              <p className="text-lg">Regular small group gatherings for in-depth Bible study, prayer, and fellowship that foster spiritual growth and accountability.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2 text-fuchsia-800">Prayer Circles</h4>
              <p className="text-lg">Weekly prayer meetings where women come together to intercede for their families, church, community, and personal needs.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2 text-fuchsia-800">Community Outreach</h4>
              <p className="text-lg">Service projects including visits to hospitals, orphanages, and elderly care facilities, as well as food drives and clothing donations for those in need.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2 text-fuchsia-800">Health & Wellness Seminars</h4>
              <p className="text-lg">Educational programs on nutrition, mental health, stress management, and maintaining a healthy lifestyle based on biblical principles.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2 text-fuchsia-800">Skills Development Workshops</h4>
              <p className="text-lg">Training sessions on parenting, marriage enrichment, financial management, cooking, sewing, and other practical life skills.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2 text-fuchsia-800">Women's Retreats & Conferences</h4>
              <p className="text-lg">Annual spiritual retreats and leadership conferences providing rest, renewal, and inspiration through worship, teaching, and fellowship.</p>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-fuchsia-900">Special Emphasis Days</h3>
          <ul className="list-disc list-inside space-y-2">
            <li className="text-lg">International Women's Day of Prayer - First Sabbath of March</li>
            <li className="text-lg">Women's Ministries Emphasis Day - Second Sabbath of June</li>
            <li className="text-lg">Day of the Adventist Woman - Various dates throughout the year</li>
            <li className="text-lg">Enditnow Emphasis Day - Fourth Sabbath of August (abuse awareness and prevention)</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-fuchsia-900">Enditnow Campaign</h3>
          <p className="text-lg mb-3">Women's Ministries is committed to ending abuse and violence against women and children. Through the Enditnow initiative, we:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li className="text-lg">Raise awareness about domestic violence and abuse</li>
            <li className="text-lg">Provide resources and support for victims</li>
            <li className="text-lg">Educate the church and community on prevention</li>
            <li className="text-lg">Advocate for justice and systemic change</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-fuchsia-900">Leadership Opportunities</h3>
          <p className="text-lg mb-3">We encourage and equip women to develop their leadership potential through:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li className="text-lg">Mentorship programs pairing experienced leaders with emerging ones</li>
            <li className="text-lg">Leadership training workshops and seminars</li>
            <li className="text-lg">Opportunities to serve in various church ministries</li>
            <li className="text-lg">Public speaking and teaching development</li>
          </ul>
        </div>

        <div className="mb-6 bg-gradient-to-r from-fuchsia-100 to-pink-100 p-6 rounded-lg">
          <h3 className="text-2xl font-bold mb-3 text-fuchsia-900">Get Involved</h3>
          <p className="text-lg mb-4">Every woman is welcome in Women's Ministries, regardless of age, background, or spiritual maturity. Whether you're looking for spiritual growth, meaningful friendships, opportunities to serve, or simply a place to belong, you'll find a warm and welcoming community here.</p>
          <p className="text-lg font-semibold text-fuchsia-900">Join us as we journey together in faith, hope, and love. Contact our director or visit us during any of our meetings to learn more about how you can be part of this vibrant ministry.</p>
        </div>

        <div className="mt-8 text-center">
          <p className="text-lg text-gray-600">For more information, meeting times, or to get involved, please contact the Women's Ministries director or the church office.</p>
        </div>
      </MinistryLayout>
    </Section>
    <Footer/>
    </>
  );
}

export default WomensMinistries;