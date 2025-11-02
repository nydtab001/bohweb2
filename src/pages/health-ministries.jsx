import PageHeader from "../components/PageHeader";
import { Helmet } from "react-helmet";
import Section from "../components/Section";
import SectionHeading from "../components/SectionHeading";
import Footer from "../components/Footer";
import MinistryLayout from "../components/MinistryLayout";
import logos from '../data/logos.json';

function Health() {
  return (
    <>
    <Helmet>
        <title>
          Health Ministries - Beacon of Hope Seventh-day Adventist Church
        </title>
      </Helmet>
    <PageHeader
           
    />
    <SectionHeading title="Health Ministries" bg="bg-sky-700"/>
    <Section>
      <MinistryLayout image={logos[7].src} director={{ name: "John Doe", photo: "/images/john_doe.jpg" }}>
       <div className="mb-6">
          <p className="text-lg mb-4">Health Ministries at Beacon of Hope is dedicated to promoting total health—physical, mental, spiritual, and social—as an integral part of the gospel message. We believe that our bodies are temples of the Holy Spirit and that caring for our health enables us to better serve God and others.</p>
          <p className="text-lg">Through education, prevention, and compassionate care, we help individuals and families make informed choices that lead to abundant life and wellness in Christ.</p>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-sky-900">Our Mission</h3>
          <p className="text-lg mb-3">To restore, promote, and maintain optimum health by addressing the physical, mental, social, and spiritual needs of individuals and communities, reflecting Christ's healing ministry.</p>
          <div className="bg-sky-50 p-5 rounded-lg">
            <p className="text-lg italic text-sky-900">"Dear friend, I pray that you may enjoy good health and that all may go well with you, even as your soul is getting along well." - 3 John 1:2</p>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-sky-900">Health Education Programs</h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-xl font-semibold mb-2 text-sky-800">NEWSTART Lifestyle Program</h4>
              <p className="text-lg">Comprehensive health education based on eight natural remedies: Nutrition, Exercise, Water, Sunlight, Temperance, Air, Rest, and Trust in God. Learn practical ways to prevent and reverse chronic diseases.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2 text-sky-800">Cooking Classes</h4>
              <p className="text-lg">Hands-on demonstrations teaching plant-based cooking, meal planning, and nutrition principles. Learn to prepare delicious, healthy meals that promote wellness.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2 text-sky-800">Stop Smoking Programs</h4>
              <p className="text-lg">Evidence-based smoking cessation programs providing support, education, and practical strategies to break free from tobacco addiction.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2 text-sky-800">Weight Management & Diabetes Prevention</h4>
              <p className="text-lg">Programs designed to help participants achieve healthy weight, prevent diabetes, and manage chronic conditions through lifestyle changes.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2 text-sky-800">Stress Management Workshops</h4>
              <p className="text-lg">Practical tools for managing stress, anxiety, and mental health challenges through prayer, mindfulness, exercise, and healthy coping strategies.</p>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-sky-900">Health Screenings & Services</h3>
          <ul className="list-disc list-inside space-y-2">
            <li className="text-lg">Blood pressure screenings (monthly after church services)</li>
            <li className="text-lg">Blood sugar/glucose testing for diabetes awareness</li>
            <li className="text-lg">Body Mass Index (BMI) and health risk assessments</li>
            <li className="text-lg">Vision and hearing screenings</li>
            <li className="text-lg">Dental health education and basic screenings</li>
            <li className="text-lg">Referrals to medical professionals when needed</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-sky-900">Community Health Outreach</h3>
          <p className="text-lg mb-3">Taking the healing ministry of Jesus beyond our church walls:</p>
          <div className="space-y-3">
            <p className="text-lg"><strong>Health Expos & Fairs:</strong> Free community events offering health screenings, demonstrations, and educational materials.</p>
            <p className="text-lg"><strong>Hospital & Nursing Home Visitation:</strong> Compassionate care and prayer for those who are sick or elderly.</p>
            <p className="text-lg"><strong>Health Lectures:</strong> Public presentations on various health topics open to the community.</p>
            <p className="text-lg"><strong>Medical Missionary Training:</strong> Equipping members to provide basic health education and simple treatments.</p>
            <p className="text-lg"><strong>Depression Recovery Programs:</strong> Support groups and resources for mental health and emotional wellness.</p>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-sky-900">Fitness & Wellness Activities</h3>
          <ul className="list-disc list-inside space-y-2">
            <li className="text-lg"><strong>Walking Clubs:</strong> Regular group walks for exercise, fellowship, and accountability</li>
            <li className="text-lg"><strong>Exercise Classes:</strong> Low-impact aerobics, stretching, and strength training suitable for all fitness levels</li>
            <li className="text-lg"><strong>Nature Walks & Hikes:</strong> Enjoying God's creation while promoting physical activity</li>
            <li className="text-lg"><strong>Health Challenges:</strong> Friendly competitions encouraging healthy habits like water consumption, sleep, or exercise</li>
            <li className="text-lg"><strong>Wellness Workshops:</strong> Topics including sleep hygiene, posture, injury prevention, and healthy aging</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-sky-900">Mental & Emotional Health</h3>
          <p className="text-lg mb-3">Recognizing that mental health is vital to overall wellness, we offer:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li className="text-lg">Mental health awareness seminars reducing stigma and promoting understanding</li>
            <li className="text-lg">Support groups for anxiety, depression, grief, and trauma</li>
            <li className="text-lg">Resources for professional counseling and therapy referrals</li>
            <li className="text-lg">Prayer and spiritual support for emotional struggles</li>
            <li className="text-lg">Workshops on building resilience and emotional intelligence</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-sky-900">Health Sabbath & Special Events</h3>
          <ul className="list-disc list-inside space-y-2">
            <li className="text-lg"><strong>Health Ministries Sabbath:</strong> Annual emphasis on holistic health with special programming</li>
            <li className="text-lg"><strong>World Health Day:</strong> Participation in global health initiatives</li>
            <li className="text-lg"><strong>Health & Wellness Retreats:</strong> Weekend getaways focused on spiritual and physical renewal</li>
            <li className="text-lg"><strong>Vegetarian Potlucks:</strong> Sharing healthy plant-based meals and recipes</li>
            <li className="text-lg"><strong>Guest Health Professionals:</strong> Invited speakers presenting on specialized health topics</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-sky-900">Eight Laws of Health (NEWSTART)</h3>
          <div className="bg-sky-50 p-5 rounded-lg space-y-2">
            <p className="text-lg"><strong>N</strong>utrition - Wholesome, plant-based foods for optimal health</p>
            <p className="text-lg"><strong>E</strong>xercise - Regular physical activity for strength and vitality</p>
            <p className="text-lg"><strong>W</strong>ater - Adequate hydration for every body function</p>
            <p className="text-lg"><strong>S</strong>unlight - Vitamin D and mood enhancement from sunshine</p>
            <p className="text-lg"><strong>T</strong>emperance - Moderation in all things, abstaining from the harmful</p>
            <p className="text-lg"><strong>A</strong>ir - Fresh, clean air for respiratory and circulatory health</p>
            <p className="text-lg"><strong>R</strong>est - Sufficient sleep and Sabbath rest for restoration</p>
            <p className="text-lg"><strong>T</strong>rust in God - Faith and spiritual peace for total wellness</p>
          </div>
        </div>

        <div className="mb-6 bg-gradient-to-r from-sky-100 to-blue-100 p-6 rounded-lg">
          <h3 className="text-2xl font-bold mb-3 text-sky-900">Get Involved</h3>
          <p className="text-lg mb-4">Whether you're a healthcare professional, wellness enthusiast, or simply someone who wants to improve your health and help others, Health Ministries offers many opportunities to serve and grow.</p>
          <p className="text-lg font-semibold text-sky-900">Contact our Health Ministries director to learn about volunteer opportunities, upcoming programs, or to request a health screening for your group.</p>
        </div>
      </MinistryLayout>
    </Section>
    <Footer/>
    </>
  );
}

export default Health;