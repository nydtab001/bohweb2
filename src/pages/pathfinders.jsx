import PageHeader from "../components/PageHeader";
import { Helmet } from "react-helmet";
import Section from "../components/Section";
import SectionHeading from "../components/SectionHeading";
import Footer from "../components/Footer";
import MinistryLayout from "../components/MinistryLayout";
import logos from '../data/logos.json';

function Pathfinders() {
  return (
    <>
    <Helmet>
        <title>
          Pathfinder Club - Beacon of Hope Seventh-day Adventist Church
        </title>
      </Helmet>
    <PageHeader
    />
    <SectionHeading title="Pathfinder Club" bg="bg-green-900"/>
    <Section>
      <MinistryLayout image={logos[1].src} director={{ name: "George Tsumbalagwa", photo: "/images/john_doe.jpg" }}>
        <div className="mb-6">
          <p className="text-lg mb-6">The Pathfinder Club is a worldwide organization of young people ages 10 to 15, dedicated to building character, developing leadership, and deepening their walk with Christ. Through hands-on learning, service, and adventure, Pathfinders grow spiritually, socially, and physically in a Christ-centered environment.
</p>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold text-green-900 mb-4">Pathfinder Pledge</h3>
          <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-900">
            <p className="text-lg italic leading-relaxed">
              By the grace of God,<br />
              I will be pure and kind and true.<br />
              I will keep the Pathfinder Law.<br />
              I will be a servant of God<br />
              and a friend to man.
            </p>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold text-green-900 mb-4">Pathfinder Law</h3>
          <div className="bg-green-50 p-6 rounded-lg">
            <p className="text-lg mb-2">The Pathfinder Law is for me to:</p>
            <ul className="list-none space-y-3 ml-4">
              <li className="text-lg">
                <span className="font-bold text-green-900 block sm:inline">Keep the Morning Watch:</span>
                <span className="block sm:inline sm:ml-1">Spend time with God each day</span>
              </li>
              <li className="text-lg">
                <span className="font-bold text-green-900 block sm:inline">Do my honest part:</span>
                <span className="block sm:inline sm:ml-1">Be responsible and trustworthy</span>
              </li>
              <li className="text-lg">
                <span className="font-bold text-green-900 block sm:inline">Care for my body:</span>
                <span className="block sm:inline sm:ml-1">Honor God with healthy choices</span>
              </li>
              <li className="text-lg">
                <span className="font-bold text-green-900 block sm:inline">Keep a level eye:</span>
                <span className="block sm:inline sm:ml-1">Look for good in others</span>
              </li>
              <li className="text-lg">
                <span className="font-bold text-green-900 block sm:inline">Be courteous and obedient:</span>
                <span className="block sm:inline sm:ml-1">Respect authority and others</span>
              </li>
              <li className="text-lg">
                <span className="font-bold text-green-900 block sm:inline">Walk softly in the sanctuary:</span>
                <span className="block sm:inline sm:ml-1">Be reverent in worship</span>
              </li>
              <li className="text-lg">
                <span className="font-bold text-green-900 block sm:inline">Keep a song in my heart:</span>
                <span className="block sm:inline sm:ml-1">Be joyful and positive</span>
              </li>
              <li className="text-lg">
                <span className="font-bold text-green-900 block sm:inline">Go on God's errands:</span>
                <span className="block sm:inline sm:ml-1">Serve others willingly</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold text-green-900 mb-4">Progressive Classes</h3>
          <p className="text-lg mb-4">
            Pathfinders advance through a series of progressive classes, each building on the previous level's skills and knowledge:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-green-600">
              <h4 className="text-xl font-bold mb-2">Friend (Grade 5 - Age 10)</h4>
              <p className="text-gray-700">Foundation level focusing on Bible basics, outdoor skills, and personal development.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-green-600">
              <h4 className="text-xl font-bold mb-2">Companion (Grade 6 - Age 11)</h4>
              <p className="text-gray-700">Building on Friend class with deeper Bible study and more advanced outdoor skills.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-green-600">
              <h4 className="text-xl font-bold mb-2">Explorer (Grade 7 - Age 12)</h4>
              <p className="text-gray-700">Exploring God's creation through nature study and developing leadership skills.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-green-600">
              <h4 className="text-xl font-bold mb-2">Ranger (Grade 8/Form 1 - Age 13)</h4>
              <p className="text-gray-700">Advanced wilderness skills, community service, and spiritual leadership.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-green-600">
              <h4 className="text-xl font-bold mb-2">Voyager (Grade 9/Form 2 - Age 14)</h4>
              <p className="text-gray-700">Career exploration, mentoring younger Pathfinders, and preparing for Master Guide.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-green-600">
              <h4 className="text-xl font-bold mb-2">Guide (Grade 10/Form 3 - Age 15)</h4>
              <p className="text-gray-700">Senior Pathfinder level with leadership responsibilities and advanced honors.</p>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold text-green-900 mb-4">Honors and Awards</h3>
          <p className="text-lg mb-4">
            Pathfinders earn honors in dozens of categories, developing skills while learning about God's creation and service. Honors are organized into these categories:
          </p>
          <div className="grid md:grid-cols-3 gap-4 mb-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-bold text-lg mb-2">Outdoor Industries</h4>
              <p className="text-gray-700">Camping, hiking, orienteering, survival skills, backpacking</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-bold text-lg mb-2">Nature</h4>
              <p className="text-gray-700">Animals, birds, plants, insects, geology, weather</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-bold text-lg mb-2">Health & Science</h4>
              <p className="text-gray-700">First aid, nutrition, fitness, environmental science</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-bold text-lg mb-2">Vocational</h4>
              <p className="text-gray-700">Career skills, technology, mechanics, construction</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-bold text-lg mb-2">Arts & Hobbies</h4>
              <p className="text-gray-700">Music, art, crafts, photography, drama</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-bold text-lg mb-2">Household Arts</h4>
              <p className="text-gray-700">Cooking, sewing, home repair, gardening</p>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold text-green-900 mb-4">Camping and Outdoor Adventure</h3>
          <p className="text-lg mb-4">
            Camping is a cornerstone of the Pathfinder experience. Through camping, Pathfinders learn self-reliance, teamwork, and appreciation for God's creation.
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li className="text-lg">Weekend campouts with hands-on outdoor skills training</li>
            <li className="text-lg">Annual Pathfinder Camporee with thousands of Pathfinders from across the region</li>
            <li className="text-lg">Backpacking and wilderness survival trips</li>
            <li className="text-lg">Rock climbing, rappelling, and adventure activities</li>
            <li className="text-lg">Canoeing, kayaking, and water safety training</li>
            <li className="text-lg">Nature hikes and wildlife observation</li>
            <li className="text-lg">Fire building, outdoor cooking, and camp setup</li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold text-green-900 mb-4">Leadership Development</h3>
          <p className="text-lg mb-4">
            Pathfinders learn leadership through experience. Older Pathfinders mentor younger members and take on increasing responsibilities within the club.
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li className="text-lg"><span className="font-bold">Unit Leadership:</span> Leading small groups in activities and devotions</li>
            <li className="text-lg"><span className="font-bold">Teaching Honors:</span> Senior Pathfinders teach honors to younger members</li>
            <li className="text-lg"><span className="font-bold">Planning Events:</span> Involvement in planning club activities and outreach</li>
            <li className="text-lg"><span className="font-bold">Mentoring:</span> Building relationships across age groups</li>
            <li className="text-lg"><span className="font-bold">Community Service:</span> Leading service projects in the community</li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold text-green-900 mb-4">Uniforms and Recognition</h3>
          <p className="text-lg mb-4">
            Pathfinders wear a distinctive uniform that represents their commitment and accomplishments. The uniform includes:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li className="text-lg">Class A dress uniform for formal occasions, church services, and investiture</li>
            <li className="text-lg">Field uniform for outdoor activities and service projects</li>
            <li className="text-lg">Patches and pins representing honors, classes, and special achievements</li>
            <li className="text-lg">Annual investiture ceremony where Pathfinders receive recognition for their accomplishments</li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold text-green-900 mb-4">Safety and Standards</h3>
          <p className="text-lg mb-4">
            The safety and well-being of every Pathfinder is our highest priority. Our club follows North American Division Pathfinder Club safety standards:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li className="text-lg">All staff members complete background checks and safety training</li>
            <li className="text-lg">Two-deep leadership on all activities</li>
            <li className="text-lg">Age-appropriate supervision ratios</li>
            <li className="text-lg">First aid and CPR certified staff on all outings</li>
            <li className="text-lg">Safe Sanctuary policies for child protection</li>
            <li className="text-lg">Emergency action plans for all events</li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold text-green-900 mb-4">Regular Meeting Schedule</h3>
          <p className="text-lg mb-4">
            Our club meets regularly for a variety of activities designed to help Pathfinders grow in all areas of life:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li className="text-lg">Opening ceremony with pledge, prayer, and songs</li>
            <li className="text-lg">Devotional time focused on applying Biblical principles to daily life</li>
            <li className="text-lg">Class time working on progressive class requirements</li>
            <li className="text-lg">Honor instruction in various skill areas</li>
            <li className="text-lg">Drill and marching practice</li>
            <li className="text-lg">Recreation and team-building activities</li>
            <li className="text-lg">Service projects and community outreach planning</li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold text-green-900 mb-4">Benefits of Being a Pathfinder</h3>
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg">
            <ul className="space-y-3">
              <li className="text-lg"><span className="font-bold text-green-900">✓ Spiritual Growth:</span> Deepen your relationship with Jesus through Bible study and worship</li>
              <li className="text-lg"><span className="font-bold text-green-900">✓ Life Skills:</span> Learn practical skills that will benefit you throughout life</li>
              <li className="text-lg"><span className="font-bold text-green-900">✓ Leadership:</span> Develop confidence and leadership abilities</li>
              <li className="text-lg"><span className="font-bold text-green-900">✓ Friendships:</span> Build lasting friendships with peers who share your values</li>
              <li className="text-lg"><span className="font-bold text-green-900">✓ Adventure:</span> Experience outdoor adventures and challenges</li>
              <li className="text-lg"><span className="font-bold text-green-900">✓ Service:</span> Make a difference in your community and church</li>
              <li className="text-lg"><span className="font-bold text-green-900">✓ Character:</span> Develop integrity, responsibility, and respect</li>
            </ul>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold text-green-900 mb-4">Get Involved</h3>
          <p className="text-lg mb-4">
            Whether you're a young person looking for adventure and purpose, or an adult who wants to make a lasting impact on the next generation, there's a place for you in the Pathfinder Club.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-green-900 mb-3">For Young People</h4>
              <p className="text-gray-700 mb-3">
                If you're between 10 and 15 years old and ready for an exciting journey of faith, friendship, and adventure, we'd love to have you join us!
              </p>
              <p className="text-gray-700 font-bold">Contact our Pathfinder Director, George Tsumbalagwa, to register.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-green-900 mb-3">For Adults</h4>
              <p className="text-gray-700 mb-3">
                We need dedicated adults to serve as counselors, instructors, and support staff. No previous Pathfinder experience required—just a heart for ministry and a willingness to learn.
              </p>
              <p className="text-gray-700 font-bold">Volunteer opportunities include teaching honors, leading units, planning events, and more.</p>
            </div>
          </div>
        </div>

        <div className="bg-green-900 text-white p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Begin Your Pathfinder Journey?</h3>
          <p className="text-lg mb-4">
            Join us and discover how God can use you to make a difference in the world. The Pathfinder Club is more than activities—it's a community where young people grow in faith, develop character, and prepare for a life of service.
          </p>
          <p className="text-xl font-bold">Meeting Times: [Contact us for schedule]</p>
        </div>






      </MinistryLayout>
    </Section>
    <Footer/>
    </>
  );
}

export default Pathfinders;