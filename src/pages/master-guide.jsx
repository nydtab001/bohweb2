import PageHeader from "../components/PageHeader";
import { Helmet } from "react-helmet";
import Section from "../components/Section";
import SectionHeading from "../components/SectionHeading";
import Footer from "../components/Footer";
import MinistryLayout from "../components/MinistryLayout";
import logos from '../data/logos.json';

function MasterGuide() {
  return (
    <>
    <Helmet>
        <title>
          Master Guide - Beacon of Hope Seventh-day Adventist Church
        </title>
      </Helmet>
    <PageHeader
    />
    <SectionHeading title="Master Guide" bg="bg-green-900" colour="text-yellow-300"/>
    <Section>
      <MinistryLayout image={logos[13].src} director={{ name: "John Doe", photo: "/images/john_doe.jpg" }}>
        <div className="mb-6">
          <p className="text-lg mb-4">The Master Guide program is the pinnacle of Adventist Youth Ministries leadership training, designed for dedicated individuals who want to advance their skills in youth ministry and outdoor leadership. Master Guides are trained, certified leaders who serve as mentors, instructors, and role models in Pathfinder, Adventurer, and youth programs.</p>
          <p className="text-lg">This advanced certification represents excellence in Christian leadership, outdoor skills, and youth ministry, preparing individuals to make a lasting impact in the lives of young people.</p>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-green-900">What is a Master Guide?</h3>
          <p className="text-lg mb-3">A Master Guide is a highly trained youth ministry leader who has completed advanced requirements in leadership, camping skills, teaching, and specialized areas of expertise. Master Guides serve as:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li className="text-lg">Pathfinder and Adventurer Club leaders and instructors</li>
            <li className="text-lg">Trainers for new staff and volunteers in youth ministry</li>
            <li className="text-lg">Coordinators of camping, outdoor education, and adventure programs</li>
            <li className="text-lg">Mentors and role models for young people seeking spiritual growth</li>
            <li className="text-lg">Ambassadors of Adventist Youth Ministries in the church and community</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-green-900">Master Guide Requirements</h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-xl font-semibold mb-2 text-green-800">Prerequisites</h4>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li className="text-lg">Be at least 18 years old</li>
                <li className="text-lg">Be a baptized Seventh-day Adventist church member in regular standing</li>
                <li className="text-lg">Hold current Pathfinder Leadership or Staff Training certification</li>
                <li className="text-lg">Have served actively in youth ministry for at least two years</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2 text-green-800">Core Requirements</h4>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li className="text-lg">Complete the Master Guide curriculum workbook and classes</li>
                <li className="text-lg">Hold current First Aid and CPR certification</li>
                <li className="text-lg">Earn the Wilderness Leadership Honor</li>
                <li className="text-lg">Complete six advanced Pathfinder Honors (from approved list)</li>
                <li className="text-lg">Lead or teach at least 15 club meetings or campouts</li>
                <li className="text-lg">Organize and conduct a major youth event or outreach project</li>
                <li className="text-lg">Pass written and practical examinations</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-green-900">Master Guide Curriculum Areas</h3>
          <div className="space-y-3">
            <p className="text-lg"><strong>Leadership Development:</strong> Advanced principles of Christian leadership, team building, conflict resolution, and mentoring.</p>
            <p className="text-lg"><strong>Youth Ministry Philosophy:</strong> Understanding adolescent development, effective programming, and creating spiritually impactful experiences.</p>
            <p className="text-lg"><strong>Teaching Skills:</strong> Methods for teaching honors, leading Bible studies, and presenting engaging lessons to diverse age groups.</p>
            <p className="text-lg"><strong>Outdoor Skills:</strong> Advanced camping, hiking, survival skills, outdoor cooking, wilderness navigation, and Leave No Trace principles.</p>
            <p className="text-lg"><strong>Safety & Risk Management:</strong> Emergency procedures, injury prevention, weather awareness, and legal responsibilities.</p>
            <p className="text-lg"><strong>Program Administration:</strong> Budget management, event planning, registration, insurance, and organizational structure.</p>
            <p className="text-lg"><strong>Spiritual Emphasis:</strong> Conducting worship services, leading prayer, and integrating faith into all activities.</p>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-green-900">Advanced Pathfinder Honors</h3>
          <p className="text-lg mb-3">Master Guide candidates must complete six advanced honors from categories such as:</p>
          <div className="grid md:grid-cols-2 gap-3">
            <ul className="list-disc list-inside space-y-1">
              <li className="text-lg">Nature Honors (Birds, Trees, Mammals, etc.)</li>
              <li className="text-lg">Outdoor Industries (Camping Skills, Pioneering)</li>
              <li className="text-lg">Recreation (Backpacking, Orienteering, Rock Climbing)</li>
            </ul>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-lg">Vocational Honors (Teaching, Public Speaking)</li>
              <li className="text-lg">Health & Science (First Aid, Nutrition)</li>
              <li className="text-lg">Arts & Crafts (Creative skills)</li>
            </ul>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-green-900">Master Guide Training at Beacon of Hope</h3>
          <ul className="list-disc list-inside space-y-2">
            <li className="text-lg"><strong>Master Guide Classes:</strong> Regular training sessions covering curriculum requirements with experienced instructors</li>
            <li className="text-lg"><strong>Wilderness Leadership Training:</strong> Hands-on outdoor experience developing advanced camping and survival skills</li>
            <li className="text-lg"><strong>Honors Instruction:</strong> Assistance earning required advanced honors with certified instructors</li>
            <li className="text-lg"><strong>Practical Ministry Experience:</strong> Opportunities to lead, teach, and organize under supervision</li>
            <li className="text-lg"><strong>Mentorship Program:</strong> One-on-one guidance from certified Master Guides throughout the process</li>
            <li className="text-lg"><strong>Conference Training Events:</strong> Support attending conference and union-level Master Guide training</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-green-900">Leadership Opportunities for Master Guides</h3>
          <p className="text-lg mb-3">Once certified, Master Guides can serve in various capacities:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li className="text-lg">Pathfinder Club Director, Deputy Director, or Area Coordinator</li>
            <li className="text-lg">Adventurer Club Director or coordinator</li>
            <li className="text-lg">Conference or union youth ministry staff member</li>
            <li className="text-lg">Camp staff, program director, or wilderness guide</li>
            <li className="text-lg">Honor instructor or examiner for specific specializations</li>
            <li className="text-lg">Leadership trainer for new volunteers</li>
            <li className="text-lg">Event coordinator for camporees, conferences, and mission trips</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-green-900">Master Guide Investiture</h3>
          <p className="text-lg mb-3">Upon completing all requirements, candidates are officially invested as Master Guides in a special ceremony featuring:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li className="text-lg">Presentation before the church congregation</li>
            <li className="text-lg">Recognition of achievements and commitment</li>
            <li className="text-lg">Presentation of the Master Guide insignia, pin, and certificate</li>
            <li className="text-lg">Pledge of continued service to youth ministry</li>
            <li className="text-lg">Prayer of dedication and blessing</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-green-900">Master Guide Insignia</h3>
          <div className="bg-green-50 p-5 rounded-lg">
            <p className="text-lg mb-2">The Master Guide emblem features:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li className="text-lg">The Pathfinder triangle with the three angels' messages</li>
              <li className="text-lg">Gold wreath symbolizing achievement and excellence</li>
              <li className="text-lg">Banner with "Master Guide" designation</li>
              <li className="text-lg">Worn on the left shoulder of the official Pathfinder uniform</li>
            </ul>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-green-900">Continuing Education & Advanced Certification</h3>
          <p className="text-lg mb-3">Master Guides are encouraged to pursue ongoing development:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li className="text-lg">Master Guide Advanced certification with additional requirements</li>
            <li className="text-lg">Specialized certifications (climbing instructor, lifeguard, wilderness EMT)</li>
            <li className="text-lg">Conference and division youth ministry training events</li>
            <li className="text-lg">International Camporee and leadership conventions</li>
            <li className="text-lg">Continuing education in child safety, youth trends, and ministry methods</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-green-900">Benefits of Being a Master Guide</h3>
          <div className="space-y-2">
            <p className="text-lg">✓ <strong>Personal Growth:</strong> Develop leadership, outdoor, and teaching skills that benefit all areas of life</p>
            <p className="text-lg">✓ <strong>Spiritual Development:</strong> Deepen your relationship with God while serving others</p>
            <p className="text-lg">✓ <strong>Impact Lives:</strong> Make a lasting difference in the lives of young people</p>
            <p className="text-lg">✓ <strong>Lifelong Friendships:</strong> Build relationships with fellow youth ministry leaders</p>
            <p className="text-lg">✓ <strong>Recognition:</strong> Be part of an elite group of trained, certified youth leaders</p>
            <p className="text-lg">✓ <strong>Ministry Opportunities:</strong> Open doors for service locally and internationally</p>
            <p className="text-lg">✓ <strong>Credential:</strong> Recognized certification within the Adventist church worldwide</p>
          </div>
        </div>

        <div className="mb-6 bg-gradient-to-r from-green-100 to-emerald-100 p-6 rounded-lg">
          <h3 className="text-2xl font-bold mb-3 text-green-900">Start Your Master Guide Journey</h3>
          <p className="text-lg mb-4">Becoming a Master Guide is a significant commitment that requires dedication, time, and passion for youth ministry. But the rewards—both personal and eternal—are immeasurable. You'll gain skills, build character, and most importantly, help young people fall in love with Jesus.</p>
          <p className="text-lg mb-4">Whether you're an experienced Pathfinder leader looking to advance your skills or someone passionate about making a difference in young lives, the Master Guide program offers the training and support you need.</p>
          <p className="text-lg font-semibold text-green-900">Contact our Master Guide coordinator to learn more about starting your certification, upcoming training opportunities, or how to get involved in youth ministry leadership!</p>
        </div>

        <div className="mt-6 text-center">
          <div className="bg-green-900 text-yellow-300 p-6 rounded-lg">
            <p className="text-xl font-bold mb-2">Master Guide Motto:</p>
            <p className="text-2xl font-bold">"The Love of Christ Compels Us"</p>
          </div>
        </div>
      </MinistryLayout>
    </Section>
    <Footer/>
    </>
  );
}

export default MasterGuide;