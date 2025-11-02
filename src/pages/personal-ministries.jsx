import PageHeader from "../components/PageHeader";
import { Helmet } from "react-helmet";
import Section from "../components/Section";
import SectionHeading from "../components/SectionHeading";
import Footer from "../components/Footer";
import MinistryLayout from "../components/MinistryLayout";
import logos from '../data/logos.json';

function PersonalMinistries() {
  return (
    <>
    <Helmet>
        <title>
          Personal Ministries - Beacon of Hope Seventh-day Adventist Church
        </title>
      </Helmet>
    <PageHeader
            
    />
    <SectionHeading title="Personal Ministries" bg="bg-blue-900"/>
    <Section>
      <MinistryLayout image={logos[4].src} director={{ name: "John Doe", photo: "/images/john_doe.jpg" }}>
        <div className="mb-6">
          <p className="text-lg mb-4">Personal Ministries at Beacon of Hope is dedicated to equipping, empowering, and mobilizing every church member to share the gospel and serve their community. We believe that every believer has been called and gifted by God to be a witness for Christ.</p>
          <p className="text-lg">Through training, resources, and practical opportunities, we help members discover their spiritual gifts, develop witnessing skills, and actively participate in fulfilling the Great Commission.</p>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-blue-900">Our Mission</h3>
          <p className="text-lg mb-3">To inspire and equip every member for personal soul-winning ministry and community service, making disciples for Jesus Christ and preparing the world for His soon return.</p>
          <div className="bg-blue-50 p-5 rounded-lg">
            <p className="text-lg italic text-blue-900">"Go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, and teaching them to obey everything I have commanded you." - Matthew 28:19-20</p>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-blue-900">Evangelism & Outreach</h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-xl font-semibold mb-2 text-blue-800">Public Evangelism</h4>
              <p className="text-lg">Organizing evangelistic meetings, prophecy seminars, and revival series to share the Three Angels' Messages with our community.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2 text-blue-800">Literature Ministry</h4>
              <p className="text-lg">Distribution of Bibles, books, magazines (like Signs of the Times), and tracts sharing present truth and health principles.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2 text-blue-800">Bible Studies & Correspondence Courses</h4>
              <p className="text-lg">Training members to give personal Bible studies and coordinating correspondence courses for those seeking to learn more about the Bible.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2 text-blue-800">Door-to-Door Visitation</h4>
              <p className="text-lg">Organized community visits offering prayer, literature, and Bible study enrollment to our neighbors.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2 text-blue-800">Online Evangelism</h4>
              <p className="text-lg">Leveraging social media, websites, and digital platforms to share the gospel message and connect with seekers.</p>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-blue-900">Training & Equipping</h3>
          <ul className="list-disc list-inside space-y-2">
            <li className="text-lg"><strong>Witness Training Classes:</strong> Practical instruction on sharing your faith naturally and effectively</li>
            <li className="text-lg"><strong>Bible Study Methods:</strong> Learning various approaches to giving meaningful Bible studies</li>
            <li className="text-lg"><strong>Spiritual Gifts Discovery:</strong> Helping members identify and use their God-given talents</li>
            <li className="text-lg"><strong>Lay Preaching Development:</strong> Training members in sermon preparation and public speaking</li>
            <li className="text-lg"><strong>Soul-Winning Workshops:</strong> Regular seminars on evangelistic methods and best practices</li>
            <li className="text-lg"><strong>Mission Trip Preparation:</strong> Equipping teams for short-term mission projects</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-blue-900">Community Service Projects</h3>
          <p className="text-lg mb-3">Demonstrating Christ's love through practical service:</p>
          <div className="space-y-3">
            <p className="text-lg"><strong>Food Distribution:</strong> Operating food pantries and meal programs for those in need</p>
            <p className="text-lg"><strong>Clothing Drives:</strong> Collecting and distributing clothing to individuals and families</p>
            <p className="text-lg"><strong>Prison Ministry:</strong> Visiting incarcerated individuals with hope, Bible studies, and support</p>
            <p className="text-lg"><strong>Hospital Visitation:</strong> Bringing comfort and prayer to the sick and their families</p>
            <p className="text-lg"><strong>Community Clean-up:</strong> Organized efforts to beautify and serve our neighborhoods</p>
            <p className="text-lg"><strong>Disaster Relief:</strong> Rapid response teams providing aid during emergencies and crises</p>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-blue-900">Small Group Ministry</h3>
          <p className="text-lg mb-3">Fostering spiritual growth and outreach through small groups:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li className="text-lg">Home-based Bible study groups for members and interested friends</li>
            <li className="text-lg">Prayer groups focused on intercession for personal and community needs</li>
            <li className="text-lg">Interest-based groups (cooking, health, parenting) as bridges to sharing faith</li>
            <li className="text-lg">Youth and young adult outreach groups</li>
            <li className="text-lg">New believer nurture groups for baptismal candidates</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-blue-900">Follow-up & Nurture</h3>
          <p className="text-lg mb-3">Ensuring that new believers are established in their faith:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li className="text-lg">Baptismal preparation classes teaching fundamental beliefs</li>
            <li className="text-lg">Mentorship programs pairing new members with mature Christians</li>
            <li className="text-lg">New member orientation and integration into church life</li>
            <li className="text-lg">Ongoing discipleship through small groups and Bible study</li>
            <li className="text-lg">Re-engagement ministry reaching out to missing and inactive members</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-blue-900">Mission Initiatives</h3>
          <ul className="list-disc list-inside space-y-2">
            <li className="text-lg"><strong>Week of Prayer:</strong> Annual intensive focus on spiritual renewal and evangelism</li>
            <li className="text-lg"><strong>Revelation Seminars:</strong> Prophecy series revealing God's end-time message</li>
            <li className="text-lg"><strong>Health Evangelism:</strong> Using health programs as bridges to share the full gospel</li>
            <li className="text-lg"><strong>Vacation Bible School:</strong> Reaching children and their families with the gospel</li>
            <li className="text-lg"><strong>Mission Trips:</strong> Short-term mission experiences locally and abroad</li>
            <li className="text-lg"><strong>Adopt-a-Block:</strong> Taking responsibility for ministry in specific neighborhoods</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-blue-900">Resources & Materials</h3>
          <p className="text-lg mb-3">We provide tools to support your witnessing efforts:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li className="text-lg">Evangelistic literature and Bible study guides</li>
            <li className="text-lg">Training manuals and witnessing resources</li>
            <li className="text-lg">Audio-visual materials for presentations</li>
            <li className="text-lg">Sabbath School quarterly lesson study guides</li>
            <li className="text-lg">Online tools and apps for Bible study and evangelism</li>
            <li className="text-lg">Lending library with evangelism and discipleship books</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-blue-900">Partnership Ministries</h3>
          <p className="text-lg">Personal Ministries works closely with:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li className="text-lg">Adventist Community Services for humanitarian outreach</li>
            <li className="text-lg">Health Ministries for health evangelism initiatives</li>
            <li className="text-lg">Publishing Ministries for literature distribution</li>
            <li className="text-lg">Conference and Union evangelism departments</li>
            <li className="text-lg">Global Mission for cross-cultural outreach</li>
          </ul>
        </div>

        <div className="mb-6 bg-gradient-to-r from-blue-100 to-indigo-100 p-6 rounded-lg">
          <h3 className="text-2xl font-bold mb-3 text-blue-900">Get Involved</h3>
          <p className="text-lg mb-4">You don't need to be a pastor or trained theologian to share Jesus! God has placed you where you are for a reason, and He has equipped you with unique gifts and experiences to reach people in your sphere of influence.</p>
          <p className="text-lg mb-4">Whether you're comfortable speaking to large groups, prefer one-on-one conversations, enjoy serving behind the scenes, or want to learn how to start—Personal Ministries has a place for you.</p>
          <p className="text-lg font-semibold text-blue-900">Contact our Personal Ministries director today to discover how you can participate in the greatest work on earth—winning souls for Jesus!</p>
        </div>
      </MinistryLayout>
    </Section>
    <Footer/>
    </>
  );
}

export default PersonalMinistries;