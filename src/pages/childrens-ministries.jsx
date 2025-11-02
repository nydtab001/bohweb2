import PageHeader from "../components/PageHeader";
import { Helmet } from "react-helmet";
import Section from "../components/Section";
import SectionHeading from "../components/SectionHeading";
import Footer from "../components/Footer";
import MinistryLayout from "../components/MinistryLayout";
import logos from '../data/logos.json';

function ChildrensMin() {
  return (
    <>
    <Helmet>
        <title>
          Children's Ministries - Beacon of Hope Seventh-day Adventist Church
        </title>
      </Helmet>
    <PageHeader
            
    />
    <SectionHeading title="Children's Ministries" bg="bg-violet-950" colour="text-red-500"/>
    <Section>
      <MinistryLayout image={logos[8].src} director={{ name: "John Doe", photo: "/images/john_doe.jpg" }}>
        <div className="mb-6">
          <p className="text-lg mb-4">Children's Ministries at Beacon of Hope is dedicated to nurturing the spiritual, emotional, and social development of children from birth through adolescence. We believe that children are a precious gift from God and that it is our privilege and responsibility to help them grow in their relationship with Jesus.</p>
          <p className="text-lg">Through age-appropriate programs, engaging activities, and loving mentorship, we create a safe and joyful environment where children can learn about God's love, develop Christian character, and discover their unique purpose in God's kingdom.</p>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-violet-900">Our Mission</h3>
          <p className="text-lg mb-3">To lead children into a saving relationship with Jesus Christ and help them grow as His disciples, preparing them for a life of service and witness.</p>
          <div className="bg-violet-50 p-5 rounded-lg">
            <p className="text-lg italic text-violet-900">"Train up a child in the way he should go, and when he is old he will not depart from it." - Proverbs 22:6</p>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-violet-900">Age-Specific Programs</h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-xl font-semibold mb-2 text-violet-800">Cradle Roll (Birth - 3 years)</h4>
              <p className="text-lg">Special attention for our youngest members and their parents, including dedication services, parenting resources, and age-appropriate Sabbath School materials.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2 text-violet-800">Kindergarten (4 - 5 years)</h4>
              <p className="text-lg">Interactive Bible stories, songs, crafts, and activities designed to introduce young children to God's love in fun and memorable ways.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2 text-violet-800">Primary (6 - 9 years)</h4>
              <p className="text-lg">Engaging lessons that help children understand Bible stories, memorize scripture, and apply Christian principles to their daily lives.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2 text-violet-800">Junior (10 - 12 years)</h4>
              <p className="text-lg">More in-depth Bible study, character development activities, and opportunities for ministry involvement and leadership.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2 text-violet-800">Early Teen (13 - 14 years)</h4>
              <p className="text-lg">Discussion-based learning addressing relevant topics, building faith foundations, and preparing for the transition to youth ministry.</p>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-violet-900">Weekly Programs & Activities</h3>
          <ul className="list-disc list-inside space-y-2">
            <li className="text-lg"><strong>Sabbath School:</strong> Age-appropriate Bible lessons every Saturday morning with trained teachers and engaging materials</li>
            <li className="text-lg"><strong>Children's Church:</strong> Special worship services designed for children during the main worship hour</li>
            <li className="text-lg"><strong>Story Time:</strong> Captivating Bible stories told in creative ways that capture children's imagination</li>
            <li className="text-lg"><strong>Music & Praise:</strong> Learning worship songs, playing instruments, and participating in children's choir</li>
            <li className="text-lg"><strong>Vacation Bible School (VBS):</strong> Annual week-long summer program filled with games, crafts, music, and Biblical lessons</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-violet-900">Special Events & Outreach</h3>
          <div className="space-y-3">
            <p className="text-lg"><strong>Children's Day:</strong> Annual celebration featuring children's presentations, talents, and special recognition</p>
            <p className="text-lg"><strong>Bible Fun Days:</strong> Quarterly themed events with games, contests, prizes, and Bible learning</p>
            <p className="text-lg"><strong>Community Service Projects:</strong> Age-appropriate opportunities for children to serve others and share God's love</p>
            <p className="text-lg"><strong>Holiday Programs:</strong> Special presentations during Christmas, Easter, and other occasions</p>
            <p className="text-lg"><strong>Family Ministry Events:</strong> Activities designed to strengthen family bonds and spiritual connections</p>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-violet-900">Character Development</h3>
          <p className="text-lg mb-3">We focus on helping children develop Christ-like character through:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li className="text-lg">Bible memory programs and scripture learning</li>
            <li className="text-lg">Teaching values such as honesty, kindness, respect, and responsibility</li>
            <li className="text-lg">Conflict resolution and emotional intelligence skills</li>
            <li className="text-lg">Service opportunities that build empathy and compassion</li>
            <li className="text-lg">Positive peer relationships and mentoring</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-violet-900">Safety & Security</h3>
          <p className="text-lg">The safety of our children is paramount. We maintain:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li className="text-lg">Background checks for all volunteers and staff</li>
            <li className="text-lg">Check-in/check-out procedures for all programs</li>
            <li className="text-lg">Adequate supervision with trained leaders</li>
            <li className="text-lg">Age-appropriate facilities and equipment</li>
            <li className="text-lg">Clear safety protocols and emergency procedures</li>
          </ul>
        </div>

        <div className="mb-6 bg-gradient-to-r from-violet-100 to-purple-100 p-6 rounded-lg">
          <h3 className="text-2xl font-bold mb-3 text-violet-900">Parent Partnership</h3>
          <p className="text-lg mb-3">We recognize that parents are the primary spiritual leaders in their children's lives. We support families through:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li className="text-lg">Regular communication and updates about programs and activities</li>
            <li className="text-lg">Parenting workshops and resources</li>
            <li className="text-lg">Take-home materials to reinforce lessons at home</li>
            <li className="text-lg">Family devotional guides and worship ideas</li>
            <li className="text-lg">Opportunities for parent involvement and volunteering</li>
          </ul>
        </div>

        <div className="mb-6 bg-gradient-to-r from-violet-100 to-pink-100 p-6 rounded-lg">
          <h3 className="text-2xl font-bold mb-3 text-violet-900">Get Involved</h3>
          <p className="text-lg mb-4">Whether you have children who would benefit from our programs or you feel called to work with children, we invite you to be part of this vital ministry. We need teachers, assistants, greeters, musicians, craft coordinators, and prayer warriors.</p>
          <p className="text-lg font-semibold text-violet-900">Contact our Children's Ministries director to learn how you can help shape the next generation for Christ!</p>
        </div>
      </MinistryLayout>
    </Section>
    <Footer/>
    </>
  );
}

export default ChildrensMin;