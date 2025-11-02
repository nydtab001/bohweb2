import PageHeader from "../components/PageHeader";
import { Helmet } from "react-helmet";
import Section from "../components/Section";
import SectionHeading from "../components/SectionHeading";
import Footer from "../components/Footer";
import MinistryLayout from "../components/MinistryLayout";
import logos from '../data/logos.json';

function Education() {
  return (
    <>
    <Helmet>
        <title>
          Education Department - Beacon of Hope Seventh-day Adventist Church
        </title>
      </Helmet>
    <PageHeader
           
    />
    <SectionHeading title="Education" bg="bg-sky-900" colour="text-amber-400"/>
    <Section>
      <MinistryLayout image={logos[15].src} director={{ name: "John Doe", photo: "/images/john_doe.jpg" }}>
        <div className="mb-6">
          <p className="text-lg mb-4">The Education Department at Beacon of Hope is committed to promoting Christian education and supporting the spiritual, intellectual, and social development of students within the Seventh-day Adventist educational system. We believe that true education develops the whole person—mind, body, and spirit—preparing students not just for this life, but for eternity.</p>
          <p className="text-lg">Through advocacy, support, and partnership with Adventist schools, we help families provide their children with an education that integrates faith and learning, where Christ is the foundation of all knowledge.</p>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-sky-900">Our Mission</h3>
          <p className="text-lg mb-3">To promote, support, and strengthen Seventh-day Adventist education, ensuring that children and youth receive a Christ-centered education that develops their full potential for service to God and humanity.</p>
          <div className="bg-sky-50 p-5 rounded-lg">
            <p className="text-lg italic text-sky-900">"Train up a child in the way he should go; even when he is old he will not depart from it." - Proverbs 22:6</p>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-sky-900">Philosophy of Adventist Education</h3>
          <div className="space-y-3">
            <p className="text-lg"><strong>God-Centered Worldview:</strong> All subjects are taught from a biblical perspective, recognizing God as Creator, Sustainer, and Redeemer.</p>
            <p className="text-lg"><strong>Holistic Development:</strong> Addressing the physical, mental, social, and spiritual needs of each student.</p>
            <p className="text-lg"><strong>Excellence in Academics:</strong> Providing rigorous, high-quality education that prepares students for higher learning and life success.</p>
            <p className="text-lg"><strong>Character Formation:</strong> Developing Christian values, integrity, and service-oriented leadership.</p>
            <p className="text-lg"><strong>Eternal Perspective:</strong> Preparing students not only for useful citizenship on earth but for eternal life in God's kingdom.</p>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-sky-900">Adventist Education System in Zimbabwe</h3>
          <p className="text-lg mb-3">The Seventh-day Adventist Church operates a comprehensive educational system including:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li className="text-lg"><strong>Primary Schools:</strong> Elementary education (Grade 1-7) with integrated Christian values</li>
            <li className="text-lg"><strong>Secondary Schools:</strong> High school education (Form 1-6) preparing for O-Level and A-Level examinations</li>
            <li className="text-lg"><strong>Colleges & Universities:</strong> Higher education institutions including Solusi University</li>
            <li className="text-lg"><strong>Vocational Training Centers:</strong> Skills development in various trades and professions</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-sky-900">Local Adventist Schools We Support</h3>
          <div className="bg-sky-50 p-5 rounded-lg">
            <p className="text-lg mb-3">We actively partner with and support Adventist schools in our region. Contact our Education Department for information about:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li className="text-lg">Nearby Adventist primary and secondary schools</li>
              <li className="text-lg">Admission requirements and application processes</li>
              <li className="text-lg">Tuition fees and financial assistance options</li>
              <li className="text-lg">School programs, facilities, and extracurricular activities</li>
              <li className="text-lg">Academic performance and student outcomes</li>
            </ul>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-sky-900">Support for Families</h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-xl font-semibold mb-2 text-sky-800">Educational Guidance</h4>
              <p className="text-lg">Helping families navigate school selection, admission processes, and educational planning for their children's future.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2 text-sky-800">Financial Assistance</h4>
              <p className="text-lg">Coordinating scholarship programs, tuition assistance, and fundraising to help families afford Adventist education.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2 text-sky-800">Home Schooling Support</h4>
              <p className="text-lg">Resources and guidance for families choosing to home school using Adventist curriculum materials.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2 text-sky-800">Parent Education Workshops</h4>
              <p className="text-lg">Seminars on topics like supporting student learning, discipline, teen challenges, and preparing for college.</p>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-sky-900">Scholarship & Financial Aid Programs</h3>
          <ul className="list-disc list-inside space-y-2">
            <li className="text-lg">Church-sponsored scholarships for deserving students</li>
            <li className="text-lg">Annual education fundraising events and campaigns</li>
            <li className="text-lg">Worthy student employment opportunities</li>
            <li className="text-lg">Matching grants and donor sponsorships</li>
            <li className="text-lg">Conference and union scholarship programs</li>
            <li className="text-lg">Financial counseling for families planning education expenses</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-sky-900">Student Ministry & Support</h3>
          <p className="text-lg mb-3">Supporting students currently enrolled in Adventist schools:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li className="text-lg">Recognition and celebration of student achievements</li>
            <li className="text-lg">Care packages and encouragement for students away at boarding school</li>
            <li className="text-lg">Prayer support for students during exam periods</li>
            <li className="text-lg">Mentorship programs connecting students with church professionals</li>
            <li className="text-lg">Summer employment and internship opportunities</li>
            <li className="text-lg">College and career counseling for graduating students</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-sky-900">Higher Education & Solusi University</h3>
          <p className="text-lg mb-3">We support students pursuing higher education at Adventist institutions:</p>
          <div className="space-y-3">
            <p className="text-lg"><strong>Solusi University:</strong> Zimbabwe's premier Adventist university offering undergraduate and graduate programs in theology, education, business, sciences, and humanities.</p>
            <p className="text-lg"><strong>Support Services:</strong> Information sessions, application assistance, campus visits, and financial planning for university education.</p>
            <p className="text-lg"><strong>Ministerial Students:</strong> Special support for members studying theology and preparing for pastoral ministry.</p>
            <p className="text-lg"><strong>Alumni Network:</strong> Connecting graduates with career opportunities and ongoing spiritual fellowship.</p>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-sky-900">Teacher Appreciation & Support</h3>
          <p className="text-lg mb-3">Recognizing and supporting Adventist educators:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li className="text-lg">Annual Teacher Appreciation Day recognizing educators from our congregation</li>
            <li className="text-lg">Prayer support for teachers and school administrators</li>
            <li className="text-lg">Financial gifts and tokens of appreciation during special occasions</li>
            <li className="text-lg">Professional development scholarship support</li>
            <li className="text-lg">Encouragement for members to consider teaching as a ministry calling</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-sky-900">Education Week & Special Events</h3>
          <ul className="list-disc list-inside space-y-2">
            <li className="text-lg"><strong>Christian Education Sabbath:</strong> Annual emphasis on Adventist education (usually in November)</li>
            <li className="text-lg"><strong>Education Week:</strong> Special programs highlighting the value of Christian education</li>
            <li className="text-lg"><strong>School Alumni Reunion:</strong> Gathering of Adventist school graduates from our congregation</li>
            <li className="text-lg"><strong>Education Fair:</strong> Information event showcasing Adventist schools and educational opportunities</li>
            <li className="text-lg"><strong>Student Recognition Services:</strong> Honoring academic achievement and graduation milestones</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-sky-900">Volunteer & Partnership Opportunities</h3>
          <p className="text-lg mb-3">Ways church members can support Adventist education:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li className="text-lg">Serve on education committees and boards</li>
            <li className="text-lg">Volunteer as guest speakers, tutors, or mentors</li>
            <li className="text-lg">Donate books, supplies, and equipment to schools</li>
            <li className="text-lg">Sponsor students through scholarship programs</li>
            <li className="text-lg">Participate in school fundraising events</li>
            <li className="text-lg">Host international students or those far from home</li>
            <li className="text-lg">Share professional expertise through career days and workshops</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-sky-900">Why Choose Adventist Education?</h3>
          <div className="bg-amber-50 p-5 rounded-lg space-y-2">
            <p className="text-lg font-semibold text-amber-900">Benefits of Adventist Christian Education:</p>
            <p className="text-lg">✓ <strong>Faith Integration:</strong> Biblical principles woven into all subjects and activities</p>
            <p className="text-lg">✓ <strong>Spiritual Formation:</strong> Daily worship, prayer, and spiritual mentorship</p>
            <p className="text-lg">✓ <strong>Academic Excellence:</strong> High standards preparing students for success</p>
            <p className="text-lg">✓ <strong>Safe Environment:</strong> Christian values creating positive school culture</p>
            <p className="text-lg">✓ <strong>Character Development:</strong> Focus on integrity, service, and leadership</p>
            <p className="text-lg">✓ <strong>Balanced Lifestyle:</strong> Emphasis on health, wellness, and work-life balance</p>
            <p className="text-lg">✓ <strong>Lifelong Friendships:</strong> Community of like-minded believers</p>
            <p className="text-lg">✓ <strong>Eternal Perspective:</strong> Education that prepares for this life and the next</p>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-sky-900">Educational Resources</h3>
          <p className="text-lg mb-3">We provide access to:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li className="text-lg">Information about Adventist schools locally and internationally</li>
            <li className="text-lg">Curriculum materials and home school resources</li>
            <li className="text-lg">Study skills and academic success workshops</li>
            <li className="text-lg">College entrance exam preparation guidance</li>
            <li className="text-lg">Career exploration and vocational guidance</li>
            <li className="text-lg">Educational literature and Ellen White writings on education</li>
          </ul>
        </div>

        <div className="mb-6 bg-gradient-to-r from-sky-100 to-blue-100 p-6 rounded-lg">
          <h3 className="text-2xl font-bold mb-3 text-sky-900">Partner With Us</h3>
          <p className="text-lg mb-4">Education is one of the most powerful ways to impact the next generation for Christ. When we invest in Adventist education, we're investing in eternity. Every child who receives a Christian education becomes better equipped to serve God and lead others to Him.</p>
          <p className="text-lg mb-4">Whether you're a parent exploring educational options for your child, a student seeking support, a teacher needing encouragement, or a member wanting to support Christian education—we're here to help.</p>
          <p className="text-lg font-semibold text-sky-900">Contact our Education Department director to learn more about Adventist schools, scholarship opportunities, or how you can support Christian education in our community!</p>
        </div>

        <div className="mt-6 text-center">
          <div className="bg-sky-900 text-amber-400 p-6 rounded-lg">
            <p className="text-xl font-bold mb-2">"True education means more than the pursual of a certain course of study. It means more than a preparation for the life that now is. It has to do with the whole being, and with the whole period of existence possible to man."</p>
            <p className="text-lg">- Ellen G. White, Education, p. 13</p>
          </div>
        </div>
      </MinistryLayout>
    </Section>
    <Footer/>
    </>
  );
}

export default Education;