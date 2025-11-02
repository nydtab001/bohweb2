import PageHeader from "../components/PageHeader";
import { Helmet } from "react-helmet";
import Section from "../components/Section";
import SectionHeading from "../components/SectionHeading";
import Footer from "../components/Footer";
import MinistryLayout from "../components/MinistryLayout";
import logos from '../data/logos.json';

function YouthMinistries() {
  return (
    <>
    <Helmet>
        <title>
          Adventist Youth Ministries - Beacon of Hope Seventh-day Adventist Church
        </title>
      </Helmet>
    <PageHeader
            
    />
    <SectionHeading title="Adventist Youth Ministries" bg="bg-blue-900" colour="text-yellow-300"/>
    <Section>
      <MinistryLayout image={logos[5].src} director={{ name: "John Doe", photo: "/images/john_doe.jpg" }}>
        <div className="mb-6">
          <p className="text-lg mb-4">Adventist Youth Ministries (AYM) at Beacon of Hope exists to lead young people into a saving relationship with Jesus Christ and help them embrace His mission for their lives. We believe that youth are not just the church of tomorrow—they are the church of today, with unique gifts, energy, and passion to make a difference in the world.</p>
          <p className="text-lg">Through dynamic programs, meaningful relationships, and authentic worship experiences, we create spaces where teens and young adults can explore their faith, discover their purpose, and be equipped for ministry and leadership.</p>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-blue-900">Our Mission</h3>
          <p className="text-lg mb-3">To lead young people to love God supremely, love others compassionately, and engage the world redemptively as committed disciples of Jesus Christ.</p>
          <div className="bg-blue-50 p-5 rounded-lg">
            <p className="text-lg italic text-blue-900">"Don't let anyone look down on you because you are young, but set an example for the believers in speech, in conduct, in love, in faith and in purity." - 1 Timothy 4:12</p>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-blue-900">Age Groups & Programs</h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-xl font-semibold mb-2 text-blue-800">AY Society (Ages 16-30)</h4>
              <p className="text-lg">Our core youth program meeting weekly for worship, Bible study, service projects, and fellowship. AY (Adventist Youth) provides leadership opportunities and spiritual growth experiences tailored for teens and young adults.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2 text-blue-800">Youth Sabbath School (Ages 14-18)</h4>
              <p className="text-lg">Interactive Bible study every Saturday morning with discussion-based learning, relevant topics, and engaging activities designed specifically for teens.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2 text-blue-800">Young Adults (Ages 18-35)</h4>
              <p className="text-lg">Ministry for college students, young professionals, and young married couples addressing unique challenges and opportunities of this life stage.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2 text-blue-800">Pathfinders (Ages 10-15)</h4>
              <p className="text-lg">Internationally recognized club program combining outdoor skills, honors, camping, community service, and spiritual development in a fun, challenging environment.</p>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-blue-900">Weekly Programs & Activities</h3>
          <ul className="list-disc list-inside space-y-2">
            <li className="text-lg"><strong>AY Meeting:</strong> Saturday afternoons featuring worship, testimonies, talent showcases, Bible studies, and discussion forums</li>
            <li className="text-lg"><strong>Youth Prayer Meeting:</strong> Mid-week gathering for prayer, praise, and spiritual encouragement</li>
            <li className="text-lg"><strong>Small Groups:</strong> Home-based Bible studies and accountability groups for deeper connection</li>
            <li className="text-lg"><strong>Youth Choir & Worship Team:</strong> Musical ministry opportunities for talented young people</li>
            <li className="text-lg"><strong>Sports & Recreation:</strong> Basketball, volleyball, soccer, and other activities building fitness and friendship</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-blue-900">Special Events & Outreach</h3>
          <div className="space-y-3">
            <p className="text-lg"><strong>Youth Camp:</strong> Annual week-long camp experience with nature, adventure, worship, and spiritual renewal</p>
            <p className="text-lg"><strong>Youth Congress:</strong> Regional and division-level gatherings bringing thousands of youth together for inspiration and training</p>
            <p className="text-lg"><strong>Mission Trips:</strong> Short-term mission experiences locally and internationally serving communities in need</p>
            <p className="text-lg"><strong>Community Service Projects:</strong> Regular outreach including feeding programs, hospital visits, prison ministry, and environmental initiatives</p>
            <p className="text-lg"><strong>Youth Evangelism:</strong> Leading public evangelistic campaigns, Bible studies, and witnessing initiatives</p>
            <p className="text-lg"><strong>Social Events:</strong> Fun activities like game nights, movie nights, beach/pool parties, and cultural events</p>
            <p className="text-lg"><strong>Talent Shows & Concerts:</strong> Platforms for youth to showcase their God-given abilities</p>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-blue-900">Leadership Development</h3>
          <p className="text-lg mb-3">We intentionally invest in developing the next generation of leaders:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li className="text-lg">Youth leadership team with defined roles and responsibilities</li>
            <li className="text-lg">Leadership training workshops and seminars</li>
            <li className="text-lg">Mentorship programs pairing youth with mature Christian leaders</li>
            <li className="text-lg">Opportunities to preach, teach, and lead worship services</li>
            <li className="text-lg">Conference and union youth leadership training events</li>
            <li className="text-lg">Pathfinder leadership classes and Master Guide training</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-blue-900">Spiritual Growth Opportunities</h3>
          <div className="space-y-3">
            <p className="text-lg"><strong>Bible Study Classes:</strong> In-depth study of Scripture, prophecy, and Adventist beliefs designed for youth</p>
            <p className="text-lg"><strong>Baptismal Classes:</strong> Preparation for baptism and commitment to Christ</p>
            <p className="text-lg"><strong>Devotional Challenges:</strong> 21-day, 40-day, or 100-day devotional reading programs</p>
            <p className="text-lg"><strong>Fasting & Prayer Retreats:</strong> Extended times of seeking God and spiritual renewal</p>
            <p className="text-lg"><strong>Scripture Memory Programs:</strong> Hiding God's Word in our hearts through memorization</p>
            <p className="text-lg"><strong>Testimony Sharing:</strong> Opportunities to share personal faith journeys and God's work in our lives</p>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-blue-900">Ministry & Service</h3>
          <p className="text-lg mb-3">Youth actively participate in various ministry areas:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li className="text-lg">Sabbath School teaching and assistant roles</li>
            <li className="text-lg">Greeting ministry and ushering during church services</li>
            <li className="text-lg">Audio-visual team managing sound, lights, and live streaming</li>
            <li className="text-lg">Worship team and choir participation</li>
            <li className="text-lg">Children's ministry volunteers and Pathfinder staff</li>
            <li className="text-lg">Community outreach and evangelism teams</li>
            <li className="text-lg">Church maintenance and beautification projects</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-blue-900">AY Classes & Progressive Training</h3>
          <div className="bg-blue-50 p-5 rounded-lg space-y-2">
            <p className="text-lg font-semibold text-blue-900">Youth can earn progressive achievement classes:</p>
            <p className="text-lg"><strong>Friend Class:</strong> Foundation level for younger teens (age 14-15)</p>
            <p className="text-lg"><strong>Companion Class:</strong> Intermediate level building on Friend Class</p>
            <p className="text-lg"><strong>Explorer Class:</strong> Advanced level for older teens</p>
            <p className="text-lg"><strong>Ranger Class:</strong> Leadership level preparing for ministry</p>
            <p className="text-lg"><strong>Voyager & Guide Classes:</strong> Highest achievement levels for committed youth leaders</p>
            <p className="text-lg mt-3 text-sm italic">Each class includes requirements in spiritual development, physical fitness, life skills, and community service.</p>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-blue-900">Relevant Ministries for Today's Youth</h3>
          <div className="space-y-3">
            <p className="text-lg"><strong>Mental Health Support:</strong> Addressing anxiety, depression, and stress with biblical principles and professional resources</p>
            <p className="text-lg"><strong>Relationship & Dating Guidance:</strong> Christian perspective on friendships, dating, and preparing for marriage</p>
            <p className="text-lg"><strong>Career & Education Counseling:</strong> Helping youth discover God's calling and make wise educational/career choices</p>
            <p className="text-lg"><strong>Digital Discipleship:</strong> Using technology wisely and being positive witnesses online</p>
            <p className="text-lg"><strong>Social Justice Initiatives:</strong> Engaging with issues of justice, equality, and compassion</p>
            <p className="text-lg"><strong>Purity & Integrity:</strong> Upholding biblical standards in sexuality, substance use, and lifestyle choices</p>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-blue-900">Youth Week of Prayer</h3>
          <p className="text-lg mb-3">Annual emphasis where youth lead the entire church in spiritual programs:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li className="text-lg">Youth preach nightly messages throughout the week</li>
            <li className="text-lg">Special music and worship led entirely by young people</li>
            <li className="text-lg">Early morning and prayer meetings organized by youth</li>
            <li className="text-lg">Demonstrations of youth ministry impact and testimonies</li>
            <li className="text-lg">Call to commitment and deeper consecration</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-blue-900">Resources & Support</h3>
          <ul className="list-disc list-inside space-y-2">
            <li className="text-lg">Youth library with Christian books, magazines, and media</li>
            <li className="text-lg">Counseling and pastoral care for personal struggles</li>
            <li className="text-lg">Financial assistance for camps, mission trips, and education</li>
            <li className="text-lg">Transportation coordination for youth without access</li>
            <li className="text-lg">Safe space for questions, doubts, and honest spiritual conversations</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-blue-900">Parent Partnership</h3>
          <p className="text-lg mb-3">We recognize parents as primary spiritual leaders and partner with them through:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li className="text-lg">Regular communication about programs and youth spiritual development</li>
            <li className="text-lg">Parent seminars on understanding and connecting with teens</li>
            <li className="text-lg">Family involvement opportunities in youth activities</li>
            <li className="text-lg">Resources for family worship and discipleship at home</li>
            <li className="text-lg">Open-door policy for parent questions and concerns</li>
          </ul>
        </div>

        <div className="mb-6 bg-gradient-to-r from-blue-100 to-indigo-100 p-6 rounded-lg">
          <h3 className="text-2xl font-bold mb-3 text-blue-900">Join the Movement</h3>
          <p className="text-lg mb-4">Youth ministry at Beacon of Hope is more than programs and events—it's a community of young people passionately pursuing Jesus together. We laugh, cry, serve, worship, and grow in faith as we discover God's amazing plan for our lives.</p>
          <p className="text-lg mb-4">Whether you're a teen looking for authentic Christian friendship, a young adult navigating life transitions, or someone who wants to make a difference in your generation—you belong here!</p>
          <p className="text-lg font-semibold text-blue-900">Connect with our Youth Ministries director or show up at our next meeting. Come as you are—you'll find acceptance, purpose, and a family that loves Jesus and loves you!</p>
        </div>

        <div className="mt-6 text-center">
          <div className="bg-blue-900 text-yellow-300 p-6 rounded-lg">
            <p className="text-xl font-bold mb-2">AYM Motto:</p>
            <p className="text-2xl font-bold">"The Message. The Mission. The Movement."</p>
          </div>
        </div>
      </MinistryLayout>
    </Section>
    <Footer/>
    </>
  );
}

export default YouthMinistries;