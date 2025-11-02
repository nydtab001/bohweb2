import PageHeader from "../components/PageHeader";
import { Helmet } from "react-helmet";
import Section from "../components/Section";
import SectionHeading from "../components/SectionHeading";
import Footer from "../components/Footer";
import MinistryLayout from "../components/MinistryLayout";
import logos from '../data/logos.json';

function PrayerMin() {
  return (
    <>
    <Helmet>
        <title>
          Prayer Ministries - Beacon of Hope Seventh-day Adventist Church
        </title>
      </Helmet>
    <PageHeader
    />
    <SectionHeading title="Prayer Ministries" bg="bg-amber-900"/>
    <Section>
      <MinistryLayout image={logos[11].src} director={{ name: "John Doe", photo: "/images/john_doe.jpg" }}>
        <div className="mb-6">
          <p className="text-lg mb-4">Prayer Ministries at Beacon of Hope exists to foster a culture of prayer throughout our church, believing that prayer is the breath of the soul and the key to spiritual power and revival. We recognize that every ministry success, every transformed life, and every answered need begins with prayer.</p>
          <p className="text-lg">Through organized prayer initiatives, training, and creating opportunities for corporate and personal intercession, we help our church family develop deeper communion with God and experience His mighty works in our midst.</p>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-amber-900">Our Mission</h3>
          <p className="text-lg mb-3">To cultivate a praying church that seeks God's face, intercedes for others, and experiences divine power through earnest, persistent, and faith-filled prayer.</p>
          <div className="bg-amber-50 p-5 rounded-lg">
            <p className="text-lg italic text-amber-900">"The prayer of a righteous person is powerful and effective." - James 5:16</p>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-amber-900">Prayer Opportunities</h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-xl font-semibold mb-2 text-amber-800">Weekly Prayer Meeting</h4>
              <p className="text-lg">Our mid-week prayer service where we gather to seek God together, share testimonies, study His Word, and lift up personal and corporate requests.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2 text-amber-800">Early Morning Prayer</h4>
              <p className="text-lg">Daily sunrise prayer sessions for those who want to start their day seeking God's guidance and blessing.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2 text-amber-800">Prayer Chains</h4>
              <p className="text-lg">Rapid response prayer network activated when urgent needs arise, ensuring requests are covered in prayer within hours.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2 text-amber-800">Prayer Walks</h4>
              <p className="text-lg">Organized walks through our community praying for families, businesses, schools, and churches in our neighborhood.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2 text-amber-800">Prayer Rooms</h4>
              <p className="text-lg">Designated spaces in our church available throughout the week for private prayer, meditation, and intercession.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2 text-amber-800">24-Hour Prayer Vigils</h4>
              <p className="text-lg">Special occasions where members sign up for time slots to ensure continuous prayer for 24 hours around specific needs or events.</p>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-amber-900">Special Prayer Emphases</h3>
          <ul className="list-disc list-inside space-y-2">
            <li className="text-lg"><strong>Ten Days of Prayer:</strong> Annual church-wide prayer initiative (usually in January) focusing on revival and reformation</li>
            <li className="text-lg"><strong>40 Days of Prayer:</strong> Extended season of focused intercession for specific goals or needs</li>
            <li className="text-lg"><strong>Week of Prayer:</strong> Special emphasis during spring and fall with nightly meetings</li>
            <li className="text-lg"><strong>United Prayer Day:</strong> Quarterly united prayer gathering with other local churches</li>
            <li className="text-lg"><strong>Prayer & Fasting Days:</strong> Set aside times for deeper consecration and seeking God</li>
            <li className="text-lg"><strong>Revival Prayer Summits:</strong> Intensive prayer retreats focusing on spiritual awakening</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-amber-900">Prayer Ministry Teams</h3>
          <div className="space-y-3">
            <p className="text-lg"><strong>Intercessors:</strong> Dedicated prayer warriors committed to regular, focused intercession for church leadership, ministries, and members.</p>
            <p className="text-lg"><strong>Prayer Partners:</strong> Individuals or couples matched to pray regularly for specific missionaries, pastors, or ministry projects.</p>
            <p className="text-lg"><strong>Hospital & Shut-in Prayer Team:</strong> Members who visit and pray with those unable to attend church due to illness or mobility issues.</p>
            <p className="text-lg"><strong>Prayer Meeting Leaders:</strong> Trained facilitators who coordinate and lead various prayer gatherings.</p>
            <p className="text-lg"><strong>Prayer Room Coordinators:</strong> Individuals responsible for maintaining prayer spaces and resources.</p>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-amber-900">Prayer Request & Testimony Sharing</h3>
          <ul className="list-disc list-inside space-y-2">
            <li className="text-lg">Prayer request cards available in the sanctuary and church office</li>
            <li className="text-lg">Online prayer request submission through our website</li>
            <li className="text-lg">Confidential prayer requests handled with discretion and care</li>
            <li className="text-lg">Prayer board displaying current requests and answered prayers</li>
            <li className="text-lg">Regular testimony sharing during worship services celebrating God's faithfulness</li>
            <li className="text-lg">Prayer newsletter highlighting requests and praise reports</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-amber-900">Prayer Training & Resources</h3>
          <p className="text-lg mb-3">We believe effective prayer can be learned and developed. We offer:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li className="text-lg">Prayer seminars teaching different prayer methods and approaches</li>
            <li className="text-lg">How-to-pray workshops for new believers and those wanting to deepen their prayer life</li>
            <li className="text-lg">Prayer journaling guidance and materials</li>
            <li className="text-lg">Scripture-based praying resources</li>
            <li className="text-lg">Books and materials on prayer available in our library</li>
            <li className="text-lg">Biblical teachings on fasting, intercession, and spiritual warfare</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-amber-900">Targeted Prayer Focuses</h3>
          <div className="bg-amber-50 p-5 rounded-lg space-y-2">
            <p className="text-lg">• <strong>Leadership:</strong> Praying for pastors, elders, and ministry leaders</p>
            <p className="text-lg">• <strong>Families:</strong> Interceding for marriages, children, and family unity</p>
            <p className="text-lg">• <strong>Youth & Children:</strong> Protection and guidance for the next generation</p>
            <p className="text-lg">• <strong>Evangelism:</strong> Seeking souls and supporting outreach efforts</p>
            <p className="text-lg">• <strong>Church Growth:</strong> Spiritual and numerical growth of our congregation</p>
            <p className="text-lg">• <strong>Community Needs:</strong> Local schools, government, businesses, and safety</p>
            <p className="text-lg">• <strong>Mission Fields:</strong> Our missionaries and global church work</p>
            <p className="text-lg">• <strong>Personal Needs:</strong> Health, finances, employment, relationships</p>
            <p className="text-lg">• <strong>World Events:</strong> Peace, justice, and God's kingdom advancement</p>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-amber-900">Prayer Retreats & Events</h3>
          <ul className="list-disc list-inside space-y-2">
            <li className="text-lg">Annual prayer retreat providing dedicated time away for communion with God</li>
            <li className="text-lg">Prayer breakfasts and dinners combining fellowship with focused intercession</li>
            <li className="text-lg">Prayer conferences featuring speakers and workshops on prayer topics</li>
            <li className="text-lg">Concert of prayer gatherings with extended worship and intercession</li>
            <li className="text-lg">Men's and women's prayer groups meeting specific gender-related needs</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-amber-900">Prayer for Special Occasions</h3>
          <p className="text-lg mb-3">Coordinated prayer support for:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li className="text-lg">Evangelistic campaigns and revival meetings</li>
            <li className="text-lg">Baptisms and new member dedications</li>
            <li className="text-lg">Church building projects and major decisions</li>
            <li className="text-lg">Youth camps and mission trips</li>
            <li className="text-lg">Pastors' anniversaries and ordinations</li>
            <li className="text-lg">Crisis situations and emergencies</li>
            <li className="text-lg">Holidays and holy days (Christmas, Easter, Day of Atonement)</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-amber-900">Biblical Models of Prayer</h3>
          <p className="text-lg mb-3">We study and practice prayer as taught in Scripture:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li className="text-lg"><strong>ACTS:</strong> Adoration, Confession, Thanksgiving, Supplication</li>
            <li className="text-lg"><strong>The Lord's Prayer:</strong> Jesus' model for comprehensive prayer (Matthew 6:9-13)</li>
            <li className="text-lg"><strong>Intercessory Prayer:</strong> Standing in the gap for others (Ezekiel 22:30)</li>
            <li className="text-lg"><strong>Prayer of Faith:</strong> Believing God for the impossible (Mark 11:24)</li>
            <li className="text-lg"><strong>Corporate Prayer:</strong> Agreement in prayer with others (Matthew 18:19-20)</li>
          </ul>
        </div>

        <div className="mb-6 bg-gradient-to-r from-amber-100 to-yellow-100 p-6 rounded-lg">
          <h3 className="text-2xl font-bold mb-3 text-amber-900">Get Involved</h3>
          <p className="text-lg mb-4">Prayer is not just for spiritual giants—it's for every believer. Whether you're just beginning your prayer journey or you're a seasoned intercessor, there's a place for you in Prayer Ministries.</p>
          <p className="text-lg mb-4">Join us in seeking God's face, experiencing His presence, and seeing His power transform lives. The greatest work we can do is to connect earth with heaven through prayer.</p>
          <p className="text-lg font-semibold text-amber-900">Contact our Prayer Ministries director to join a prayer group, submit a prayer request, or learn how you can become part of this vital ministry!</p>
        </div>

        <div className="mt-6 text-center">
          <div className="bg-amber-900 text-white p-6 rounded-lg">
            <p className="text-xl font-bold mb-2">"Prayer is the key in the hand of faith to unlock heaven's storehouse."</p>
            <p className="text-lg">- Ellen G. White</p>
          </div>
        </div>
      </MinistryLayout>
    </Section>
    <Footer/>
    </>
  );
}

export default PrayerMin;