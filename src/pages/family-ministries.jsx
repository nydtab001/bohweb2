import PageHeader from "../components/PageHeader";
import { Helmet } from "react-helmet";
import Section from "../components/Section";
import SectionHeading from "../components/SectionHeading";
import Footer from "../components/Footer";
import MinistryLayout from "../components/MinistryLayout";
import logos from '../data/logos.json';

function FamilyMin() {
  return (
    <>
    <Helmet>
        <title>
          Family Ministries - Beacon of Hope Seventh-day Adventist Church
        </title>
      </Helmet>
    <PageHeader
            
    />
    <SectionHeading title="Family Ministries" bg="bg-cyan-600"/>
    <Section>
      <MinistryLayout image={logos[10].src} director={{ name: "John Doe", photo: "/images/john_doe.jpg" }}>
        <div className="mb-6">
          <p className="text-lg mb-4">Family Ministries at Beacon of Hope exists to strengthen, enrich, and restore family relationships through Christ-centered programs and resources. We believe that strong families are the foundation of a strong church and society.</p>
          <p className="text-lg">Whether you're married, single, a parent, or planning for the future, our ministry offers support, education, and encouragement to help you build healthy, godly relationships that honor Christ and bless your family.</p>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-cyan-900">Our Mission</h3>
          <p className="text-lg mb-3">The Department of Family Ministries seeks to empower, and to bring hope and healing to marriages, families, and individuals through the saving grace of Jesus Christ.</p>
          <div className="bg-cyan-50 p-5 rounded-lg">
            <p className="text-lg italic text-cyan-900">"As for me and my household, we will serve the Lord." - Joshua 24:15</p>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-cyan-900">Our Objectives</h3>
          <p className="text-lg mb-3 font-semibold text-cyan-800">"To empower families for winsome evangelism"</p>
          <div className="space-y-3">
            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-cyan-500">
              <p className="text-lg"><strong className="text-cyan-800">1.</strong> To preach the gospel of salvation to every family member.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-cyan-500">
              <p className="text-lg"><strong className="text-cyan-800">2.</strong> To affirm and strengthen every Seventh-day Adventist family as a primary discipline unit.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-cyan-500">
              <p className="text-lg"><strong className="text-cyan-800">3.</strong> To enable parents and families to increase the likelihood of successful transference of Seventh-day Adventist Christian values to the next generation.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-cyan-500">
              <p className="text-lg"><strong className="text-cyan-800">4.</strong> To create a "family of God" experience in every Seventh-day Adventist church.</p>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-cyan-900">Marriage Enrichment</h3>
          <div className="space-y-3">
            <p className="text-lg"><strong>Marriage Seminars & Retreats:</strong> Weekend getaways and workshops designed to strengthen communication, intimacy, and spiritual connection between spouses.</p>
            <p className="text-lg"><strong>Date Night Ideas:</strong> Creative resources and occasional organized events to help couples prioritize quality time together.</p>
            <p className="text-lg"><strong>Pre-Marriage Counseling:</strong> Comprehensive preparation for engaged couples covering finances, communication, conflict resolution, and spiritual leadership.</p>
            <p className="text-lg"><strong>Covenant Renewal Services:</strong> Special ceremonies for couples to recommit to their marriage vows and celebrate God's faithfulness.</p>
            <p className="text-lg"><strong>Marriage Mentoring:</strong> Pairing experienced couples with those facing challenges or seeking guidance in their marital journey.</p>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-cyan-900">Parenting Support</h3>
          <ul className="list-disc list-inside space-y-2">
            <li className="text-lg">Parenting seminars on topics like discipline, communication, spiritual training, and age-specific challenges</li>
            <li className="text-lg">Baby dedication services and preparation classes for new parents</li>
            <li className="text-lg">Parenting small groups for mutual support and shared wisdom</li>
            <li className="text-lg">Resources for teaching children about faith, values, and character</li>
            <li className="text-lg">Single parent support group with practical help and encouragement</li>
            <li className="text-lg">Grandparenting workshops for those raising grandchildren or actively involved with grandkids</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-cyan-900">Family Togetherness Programs</h3>
          <div className="space-y-3">
            <p className="text-lg"><strong>Family Worship Resources:</strong> Creative ideas, guides, and materials for meaningful family devotions and worship at home.</p>
            <p className="text-lg"><strong>Family Fun Nights:</strong> Monthly church-wide events with games, activities, food, and fellowship for families to enjoy together.</p>
            <p className="text-lg"><strong>Family Camp & Retreats:</strong> Annual weekend getaways focused on spiritual renewal, recreation, and building family bonds.</p>
            <p className="text-lg"><strong>Sabbath Afternoon Activities:</strong> Organized family-friendly events to make Sabbath a delight for all ages.</p>
            <p className="text-lg"><strong>Intergenerational Events:</strong> Programs that bring different age groups together for learning, service, and relationship building.</p>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-cyan-900">Crisis & Healing Support</h3>
          <p className="text-lg mb-3">We recognize that families face difficult seasons. We offer compassionate support through:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li className="text-lg">Marriage crisis intervention and professional counseling referrals</li>
            <li className="text-lg">Separation and divorce recovery groups</li>
            <li className="text-lg">Blended family support and stepparenting resources</li>
            <li className="text-lg">Grief support for families who have lost loved ones</li>
            <li className="text-lg">Addiction recovery resources and family support groups</li>
            <li className="text-lg">Domestic violence awareness, prevention, and victim support</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-cyan-900">Singles Ministry</h3>
          <p className="text-lg mb-3">We believe singles are complete in Christ and vital members of our church family. We offer:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li className="text-lg">Singles fellowship events and social gatherings</li>
            <li className="text-lg">Bible study and spiritual growth groups</li>
            <li className="text-lg">Service projects and mission opportunities</li>
            <li className="text-lg">Christian dating and relationship seminars</li>
            <li className="text-lg">Life skills workshops on finances, career, and personal development</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-cyan-900">Special Emphasis Weekends</h3>
          <ul className="list-disc list-inside space-y-2">
            <li className="text-lg"><strong>Christian Home & Marriage Week:</strong> Annual focus on strengthening marriages and homes (usually in February)</li>
            <li className="text-lg"><strong>Family Togetherness Week:</strong> Celebrating family unity and God's design for the home</li>
            <li className="text-lg"><strong>Father's Day & Mother's Day:</strong> Special recognition and appreciation for parents</li>
            <li className="text-lg"><strong>Grandparents Day:</strong> Honoring the role of grandparents in passing on faith</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-cyan-900">Resources & Tools</h3>
          <p className="text-lg mb-3">We provide practical resources including:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li className="text-lg">Family worship guides and devotional materials</li>
            <li className="text-lg">Book and video lending library on marriage, parenting, and family topics</li>
            <li className="text-lg">Recommended reading lists and online resources</li>
            <li className="text-lg">Family budgeting and financial planning tools</li>
            <li className="text-lg">Age-specific parenting tip sheets and guides</li>
          </ul>
        </div>

        <div className="mb-6 bg-gradient-to-r from-cyan-100 to-blue-100 p-6 rounded-lg">
          <h3 className="text-2xl font-bold mb-3 text-cyan-900">Get Involved</h3>
          <p className="text-lg mb-4">Strong families don't happen by accident—they require intentionality, commitment, and community support. Whether you're looking to strengthen your own family relationships or help others do the same, we invite you to engage with Family Ministries.</p>
          <p className="text-lg font-semibold text-cyan-900">Join us for our next event or contact our Family Ministries director to learn more about available programs and volunteer opportunities.</p>
        </div>
      </MinistryLayout>
    </Section>
    <Footer/>
    </>
  );
}

export default FamilyMin;