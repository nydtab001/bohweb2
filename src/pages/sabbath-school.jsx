import PageHeader from "../components/PageHeader";
import { Helmet } from "react-helmet";
import Section from "../components/Section";
import SectionHeading from "../components/SectionHeading";
import Footer from "../components/Footer";
import MinistryLayout from "../components/MinistryLayout";
import logos from '../data/logos.json';

function SabbathSchool() {
  return (
    <>
    <Helmet>
        <title>
          Sabbath School - Beacon of Hope Seventh-day Adventist Church
        </title>
      </Helmet>
    <PageHeader />
    <SectionHeading title="Sabbath School" bg="bg-red-700"/>
    <Section>
      <MinistryLayout image={logos[6].src} director={{ name: "John Doe", photo: "/images/john_doe.jpg" }}>
        <div className="mb-8">
          <p className="text-lg mb-4">
            Sabbath School is the Bible study and fellowship arm of our church, meeting every Saturday morning before the worship service. It's a time when we come together as a community to study God's Word, share insights, pray together, and build meaningful relationships with fellow believers.
          </p>
          <p className="text-lg mb-4">
            Whether you're new to the Bible or have been studying it for years, Sabbath School offers something for everyone. We provide age-appropriate classes for all ages, from cradle roll to seniors, ensuring that everyone can grow in their understanding of Scripture and their relationship with Jesus.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold text-red-700 mb-4">Our Mission</h3>
          <p className="text-lg mb-4">
            Sabbath School exists to create a welcoming environment where people can study the Bible together, ask questions, share experiences, and support one another in their spiritual journey. We believe that studying God's Word in community enriches our understanding and strengthens our faith.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold text-red-700 mb-4">What to Expect</h3>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-600">
              <h4 className="text-xl font-bold text-red-900 mb-3">Opening Exercise</h4>
              <ul className="list-disc list-inside space-y-2 text-red-800">
                <li>Mission story sharing</li>
                <li>Mission offerings for global outreach</li>
                <li>Song service and praise</li>
                <li>Prayer time</li>
              </ul>
            </div>

            <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-600">
              <h4 className="text-xl font-bold text-red-900 mb-3">Bible Study</h4>
              <ul className="list-disc list-inside space-y-2 text-red-800">
                <li>In-depth Bible lesson discussion</li>
                <li>Small group interaction</li>
                <li>Practical application to daily life</li>
                <li>Opportunity to ask questions</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold text-red-700 mb-4">Classes for All Ages</h3>
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-red-50 to-white p-4 rounded-lg border-l-4 border-red-500">
              <h4 className="text-lg font-bold text-red-900 mb-2">Cradle Roll (Birth - 3 years)</h4>
              <p className="text-gray-700">Gentle introduction to Bible stories through songs, simple activities, and play.</p>
            </div>

            <div className="bg-gradient-to-r from-red-50 to-white p-4 rounded-lg border-l-4 border-red-500">
              <h4 className="text-lg font-bold text-red-900 mb-2">Kindergarten (Ages 4-5)</h4>
              <p className="text-gray-700">Interactive Bible stories with crafts, games, and age-appropriate lessons.</p>
            </div>

            <div className="bg-gradient-to-r from-red-50 to-white p-4 rounded-lg border-l-4 border-red-500">
              <h4 className="text-lg font-bold text-red-900 mb-2">Primary (Ages 6-9)</h4>
              <p className="text-gray-700">Engaging Bible lessons with memory verses, activities, and practical applications.</p>
            </div>

            <div className="bg-gradient-to-r from-red-50 to-white p-4 rounded-lg border-l-4 border-red-500">
              <h4 className="text-lg font-bold text-red-900 mb-2">Junior (Ages 10-12)</h4>
              <p className="text-gray-700">Deeper Bible study with discussion, questions, and understanding God's plan.</p>
            </div>

            <div className="bg-gradient-to-r from-red-50 to-white p-4 rounded-lg border-l-4 border-red-500">
              <h4 className="text-lg font-bold text-red-900 mb-2">Teen (Ages 13-18)</h4>
              <p className="text-gray-700">Relevant Bible study addressing real-life issues teens face today.</p>
            </div>

            <div className="bg-gradient-to-r from-red-50 to-white p-4 rounded-lg border-l-4 border-red-500">
              <h4 className="text-lg font-bold text-red-900 mb-2">Young Adult</h4>
              <p className="text-gray-700">Contemporary Bible study for young adults navigating career, relationships, and faith.</p>
            </div>

            <div className="bg-gradient-to-r from-red-50 to-white p-4 rounded-lg border-l-4 border-red-500">
              <h4 className="text-lg font-bold text-red-900 mb-2">Adult Classes</h4>
              <p className="text-gray-700">Multiple adult classes studying the quarterly lesson with discussion and fellowship.</p>
            </div>

            <div className="bg-gradient-to-r from-red-50 to-white p-4 rounded-lg border-l-4 border-red-500">
              <h4 className="text-lg font-bold text-red-900 mb-2">Senior Adult</h4>
              <p className="text-gray-700">Bible study tailored for seniors with time for sharing testimonies and prayer requests.</p>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold text-red-700 mb-4">Sabbath School Quarterly</h3>
          <p className="text-lg mb-4">
            We use the Adult Bible Study Guide (Sabbath School Quarterly) published by the Seventh-day Adventist Church. Each quarter focuses on a different theme or book of the Bible, with daily lessons for personal study and weekly discussion in class. The quarterlies are available in print and digital formats.
          </p>
          <div className="bg-red-100 p-6 rounded-lg">
            <p className="text-lg mb-2"><span className="font-bold text-red-900">Current Quarter:</span> [Theme TBD]</p>
            <p className="text-lg"><span className="font-bold text-red-900">Study Resources:</span> Available at the church or online at <a href="https://www.absg.adventist.org" className="text-red-700 underline hover:text-red-900">absg.adventist.org</a></p>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold text-red-700 mb-4">Mission Focus</h3>
          <p className="text-lg mb-4">
            A key part of Sabbath School is our mission emphasis. Each week we hear stories from around the world about how God is working through the Seventh-day Adventist Church. Our mission offerings support evangelism, education, healthcare, and community development projects globally.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-red-50 rounded-lg">
              <div className="text-3xl font-bold text-red-900 mb-2">13th Sabbath</div>
              <p className="text-gray-700">Special quarterly offering for mission projects</p>
            </div>
            <div className="text-center p-4 bg-red-50 rounded-lg">
              <div className="text-3xl font-bold text-red-900 mb-2">World Missions</div>
              <p className="text-gray-700">Supporting global evangelism efforts</p>
            </div>
            <div className="text-center p-4 bg-red-50 rounded-lg">
              <div className="text-3xl font-bold text-red-900 mb-2">Local Outreach</div>
              <p className="text-gray-700">Community service and witnessing</p>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold text-red-700 mb-4">Special Sabbath School Events</h3>
          <ul className="list-disc list-inside space-y-2 ml-4 text-lg">
            <li><span className="font-bold">Teacher Training:</span> Regular workshops to equip teachers with effective methods</li>
            <li><span className="font-bold">Sabbath School Rally Day:</span> Special celebration with awards and recognition</li>
            <li><span className="font-bold">Investment Programs:</span> Creative fundraising projects for missions</li>
            <li><span className="font-bold">Guest Speakers:</span> Special presentations from missionaries and church leaders</li>
            <li><span className="font-bold">Baptismal Classes:</span> Preparation for baptism and church membership</li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold text-red-700 mb-4">Get Involved</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-red-600">
              <h4 className="text-xl font-bold text-red-900 mb-3">Join a Class</h4>
              <p className="text-gray-700 mb-3">
                Find the right class for your age group and dive into Bible study with others who share your desire to know God better.
              </p>
              <p className="font-semibold text-red-900">Sabbath School Time: [Schedule TBD]</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-red-600">
              <h4 className="text-xl font-bold text-red-900 mb-3">Become a Teacher</h4>
              <p className="text-gray-700 mb-3">
                Share your love for God's Word by teaching a Sabbath School class. Training and support are provided for all teachers.
              </p>
              <p className="font-semibold text-red-900">Contact: Sabbath School Director</p>
            </div>
          </div>
        </div>

        <div className="bg-red-700 text-white p-8 rounded-lg text-center">
          <h3 className="text-3xl font-bold mb-4">Join Us This Sabbath!</h3>
          <p className="text-xl mb-4">
            Experience the joy of studying God's Word in community. Whether you're a lifelong Adventist or visiting for the first time, you'll find a warm welcome in Sabbath School.
          </p>
          <p className="text-2xl font-bold">Every Saturday Morning</p>
          <p className="text-lg mt-2">Come as you are, leave encouraged and inspired.</p>
        </div>
      </MinistryLayout>
    </Section>
    <Footer/>
    </>
  );
}

export default SabbathSchool;