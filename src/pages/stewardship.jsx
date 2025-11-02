import PageHeader from "../components/PageHeader";
import { Helmet } from "react-helmet";
import Section from "../components/Section";
import SectionHeading from "../components/SectionHeading";
import Footer from "../components/Footer";
import MinistryLayout from "../components/MinistryLayout";
import logos from '../data/logos.json';

function Stewardship() {
  return (
    <>
    <Helmet>
        <title>
          Stewardship - Beacon of Hope Seventh-day Adventist Church
        </title>
      </Helmet>
    <PageHeader
    />
    <SectionHeading title="Stewardship" bg="bg-violet-950" colour="text-amber-500"/>
    <Section>
      <MinistryLayout image={logos[9].src} director={{ name: "John Doe", photo: "/images/john_doe.jpg" }}>
        <div className="mb-6">
          <p className="text-lg mb-4">Stewardship at Beacon of Hope is about recognizing that everything we have—our time, talents, health, relationships, finances, and the earth itself—belongs to God. As stewards, we are called to faithfully manage these gifts for His glory and the advancement of His kingdom.</p>
          <p className="text-lg">Through biblical teaching, practical training, and personal commitment, we help members understand and embrace their role as faithful stewards who honor God with their whole lives.</p>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-violet-900">Our Mission</h3>
          <p className="text-lg mb-3">To educate, inspire, and equip church members to be faithful stewards of all that God has entrusted to them, living lives of gratitude, generosity, and accountability.</p>
          <div className="bg-violet-50 p-5 rounded-lg">
            <p className="text-lg italic text-violet-900">"Each of you should use whatever gift you have received to serve others, as faithful stewards of God's grace in its various forms." - 1 Peter 4:10</p>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-violet-900">Biblical Principles of Stewardship</h3>
          <div className="space-y-3">
            <div>
              <h4 className="text-xl font-semibold mb-2 text-violet-800">1. God is the Owner</h4>
              <p className="text-lg">We recognize that "The earth is the Lord's, and everything in it" (Psalm 24:1). We are not owners but managers of what belongs to God.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2 text-violet-800">2. We are Accountable</h4>
              <p className="text-lg">Each of us will give an account to God for how we've managed the resources, opportunities, and responsibilities He's given us.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2 text-violet-800">3. Faithfulness is Required</h4>
              <p className="text-lg">"It is required that those who have been given a trust must prove faithful" (1 Corinthians 4:2). God values faithfulness over the size of our gifts.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2 text-violet-800">4. Generosity Reflects God's Character</h4>
              <p className="text-lg">As recipients of God's abundant grace, we are called to be generous, cheerful givers who reflect His loving nature.</p>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-violet-900">Systematic Benevolence: Tithe & Offerings</h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-xl font-semibold mb-2 text-violet-800">Tithe (10% of Income)</h4>
              <p className="text-lg mb-2">The tithe belongs to God and is used exclusively for supporting gospel ministry and pastoral work. It is returned to God as an act of worship and acknowledgment of His ownership.</p>
              <p className="text-lg italic text-violet-700">"Bring the whole tithe into the storehouse, that there may be food in my house." - Malachi 3:10</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2 text-violet-800">Offerings (Freewill Gifts)</h4>
              <p className="text-lg mb-2">Beyond tithe, we give offerings to support various church ministries, missions, building projects, and community outreach. Offerings are given according to our ability and willingness.</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li className="text-lg">World Mission Offerings</li>
                <li className="text-lg">Local Church Budget</li>
                <li className="text-lg">Building Fund</li>
                <li className="text-lg">Conference and Union Projects</li>
                <li className="text-lg">Disaster Relief and Humanitarian Aid</li>
                <li className="text-lg">Special Project Offerings</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-violet-900">Holistic Stewardship</h3>
          <p className="text-lg mb-3">Stewardship encompasses more than finances. We are called to be faithful stewards of:</p>
          <div className="space-y-3">
            <p className="text-lg"><strong>Time:</strong> Using our 24 hours wisely, prioritizing what matters most, and honoring the Sabbath as sacred time with God.</p>
            <p className="text-lg"><strong>Talents & Abilities:</strong> Discovering and developing our spiritual gifts to serve God's kingdom and bless others.</p>
            <p className="text-lg"><strong>Health:</strong> Caring for our bodies as temples of the Holy Spirit through proper nutrition, exercise, rest, and avoiding harmful substances.</p>
            <p className="text-lg"><strong>Relationships:</strong> Investing in healthy, Christ-centered relationships with family, friends, and community.</p>
            <p className="text-lg"><strong>Environment:</strong> Caring for God's creation as faithful managers of the earth and its resources.</p>
            <p className="text-lg"><strong>Influence:</strong> Using our voice, platform, and sphere of influence to point others to Jesus.</p>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-violet-900">Stewardship Education & Training</h3>
          <ul className="list-disc list-inside space-y-2">
            <li className="text-lg"><strong>Stewardship Seminars:</strong> Regular teachings on biblical principles of giving, money management, and faithful living</li>
            <li className="text-lg"><strong>Financial Peace Workshops:</strong> Practical training on budgeting, debt elimination, savings, and financial planning</li>
            <li className="text-lg"><strong>Spiritual Gifts Discovery:</strong> Assessments and classes helping members identify and use their gifts</li>
            <li className="text-lg"><strong>Will & Estate Planning:</strong> Information on creating a Christian will and planned giving</li>
            <li className="text-lg"><strong>New Member Orientation:</strong> Teaching new believers about tithing and stewardship commitments</li>
            <li className="text-lg"><strong>Youth Stewardship Training:</strong> Age-appropriate education for children and teens on generosity and responsibility</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-violet-900">Stewardship Commitment & Renewal</h3>
          <p className="text-lg mb-3">We encourage members to make intentional commitments:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li className="text-lg">Annual Stewardship Commitment Day where members prayerfully pledge their support</li>
            <li className="text-lg">Stewardship Covenant cards for personal accountability</li>
            <li className="text-lg">Quarterly review of giving patterns and ministry support</li>
            <li className="text-lg">Recognition and appreciation for faithful stewards</li>
            <li className="text-lg">Testimonies of God's blessings through faithful stewardship</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-violet-900">Blessings of Faithful Stewardship</h3>
          <div className="bg-amber-50 p-5 rounded-lg space-y-2">
            <p className="text-lg font-semibold text-amber-900">God promises to bless those who honor Him with faithful stewardship:</p>
            <p className="text-lg">• <strong>Spiritual Growth:</strong> Deeper trust and dependence on God</p>
            <p className="text-lg">• <strong>Financial Provision:</strong> God's supernatural care and provision (Malachi 3:10-11)</p>
            <p className="text-lg">• <strong>Joy & Contentment:</strong> Peace that comes from living generously</p>
            <p className="text-lg">• <strong>Kingdom Impact:</strong> Participating in eternal work that outlasts our lifetime</p>
            <p className="text-lg">• <strong>Freedom from Materialism:</strong> Breaking the power of money over our hearts</p>
            <p className="text-lg">• <strong>Treasure in Heaven:</strong> Eternal rewards for faithful service</p>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-violet-900">Practical Ways to Give</h3>
          <ul className="list-disc list-inside space-y-2">
            <li className="text-lg"><strong>During Worship Services:</strong> Envelopes available for tithe and offerings during Sabbath services</li>
            <li className="text-lg"><strong>Online Giving:</strong> Secure online platform for convenient electronic giving</li>
            <li className="text-lg"><strong>Automatic Bank Transfer:</strong> Set up recurring automatic transfers from your bank</li>
            <li className="text-lg"><strong>Check or Cash:</strong> Traditional giving methods accepted and appreciated</li>
            <li className="text-lg"><strong>Stock or Asset Donations:</strong> Tax-advantaged giving through appreciated assets</li>
            <li className="text-lg"><strong>Planned Giving:</strong> Including the church in your will or estate plan</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-violet-900">Accountability & Transparency</h3>
          <p className="text-lg mb-3">We are committed to faithful stewardship of the resources entrusted to us:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li className="text-lg">Regular financial reports to church membership</li>
            <li className="text-lg">Independent audits and financial oversight</li>
            <li className="text-lg">Clear policies on how tithe and offerings are used</li>
            <li className="text-lg">Quarterly giving statements for tax purposes</li>
            <li className="text-lg">Open communication about church finances and needs</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-violet-900">Special Emphasis</h3>
          <ul className="list-disc list-inside space-y-2">
            <li className="text-lg"><strong>Stewardship Month:</strong> Annual emphasis on faithful stewardship (usually October-November)</li>
            <li className="text-lg"><strong>Sacrifice Week:</strong> Special week of commitment and giving for missions</li>
            <li className="text-lg"><strong>13th Sabbath Offerings:</strong> Quarterly special offerings for world mission projects</li>
            <li className="text-lg"><strong>Thanksgiving Offering:</strong> Special gratitude offering during Thanksgiving season</li>
          </ul>
        </div>

        <div className="mb-6 bg-gradient-to-r from-violet-100 to-purple-100 p-6 rounded-lg">
          <h3 className="text-2xl font-bold mb-3 text-violet-900">Start Your Stewardship Journey</h3>
          <p className="text-lg mb-4">Faithful stewardship is not about what God can get from you, but what He wants to do through you. When we honor God with our resources, we open the door for Him to work miracles in our lives and through our church.</p>
          <p className="text-lg mb-4">Whether you're just beginning to understand stewardship or you've been a faithful steward for years, there's always room to grow in grace and generosity.</p>
          <p className="text-lg font-semibold text-violet-900">Contact our Stewardship director to learn more about giving opportunities, financial counseling, or how to make a lasting impact through planned giving.</p>
        </div>

        <div className="mt-6 text-center">
          <div className="bg-violet-900 text-white p-6 rounded-lg">
            <p className="text-xl font-bold mb-2">"Give, and it will be given to you. A good measure, pressed down, shaken together and running over, will be poured into your lap."</p>
            <p className="text-lg">- Luke 6:38</p>
          </div>
        </div>
      </MinistryLayout>
    </Section>
    <Footer/>
    </>
  );
}

export default Stewardship;