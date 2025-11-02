import PageHeader from "../components/PageHeader";
import { Helmet } from "react-helmet";
import Section from "../components/Section";
import SectionHeading from "../components/SectionHeading";
import Footer from "../components/Footer";
import MinistryLayout from "../components/MinistryLayout";
import logos from '../data/logos.json';

function Adventurers() {
  return (
    <>
    <Helmet>
        <title>
          Adventurer Club - Beacon of Hope Seventh-day Adventist Church
        </title>
      </Helmet>
    <PageHeader/>
    <SectionHeading title="Adventurer Club" bg="bg-rose-950"/>
    <Section>
      <MinistryLayout image={logos[0].src} director={{ name: "Langelihle Noko", photo: "/images/john_doe.jpg" }}>
        <div className="mb-6">
          <p className="text-lg mb-4">The Adventurer Club is a faith-based, family-centered program for children ages 4 to 9 years old. Through fun activities, hands-on learning, and meaningful experiences, Adventurers discover God's love, develop life skills, and build lasting friendships in a safe, nurturing environment.</p>
          <p className="text-lg">Adventurers is more than a children's program—it's a family ministry that encourages parents to actively participate in their child's spiritual journey, creating memories and strengthening bonds that last a lifetime.</p>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-rose-900">Our Mission</h3>
          <p className="text-lg mb-3">To provide a Christ-centered program where children and their families can grow spiritually, develop physically, experience adventure, and serve others while building a foundation for lifelong discipleship.</p>
          <div className="bg-rose-50 p-5 rounded-lg">
            <p className="text-lg italic text-rose-900">"Jesus said, 'Let the little children come to me, and do not hinder them, for the kingdom of heaven belongs to such as these.'" - Matthew 19:14</p>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-rose-900">Adventurer Age Groups</h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-xl font-semibold mb-2 text-rose-800">Little Lambs (Ages 4-5)</h4>
              <p className="text-lg">Our youngest Adventurers explore Bible stories through songs, games, simple crafts, and age-appropriate activities that teach them about Jesus' love.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2 text-rose-800">Busy Bees (Grade 1)</h4>
              <p className="text-lg">First graders learn about God's creation, practice sharing and caring, and earn their first awards through fun challenges and activities.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2 text-rose-800">Sunbeams (Grade 2)</h4>
              <p className="text-lg">Second graders shine for Jesus as they explore nature, learn practical skills, and discover how to be helpful at home and church.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2 text-rose-800">Builders (Grade 3)</h4>
              <p className="text-lg">Third graders build character and skills through more advanced projects, outdoor activities, and service opportunities.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2 text-rose-800">Helping Hands (Grade 4)</h4>
              <p className="text-lg">Fourth graders learn the joy of service and helping others through community projects and ministry activities, preparing to transition to Pathfinders.</p>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-rose-900">Adventurer Award Classes</h3>
          <p className="text-lg mb-3">Each class level includes age-appropriate requirements in spiritual growth, physical fitness, character development, and practical skills:</p>
          <div className="bg-rose-50 p-5 rounded-lg space-y-2">
            <p className="text-lg">🐑 <strong>Little Lamb Class:</strong> Learning about Jesus the Good Shepherd</p>
            <p className="text-lg">🐝 <strong>Busy Bee Class:</strong> Being busy for Jesus</p>
            <p className="text-lg">☀️ <strong>Sunbeam Class:</strong> Shining for Jesus</p>
            <p className="text-lg">🔨 <strong>Builder Class:</strong> Building for Jesus</p>
            <p className="text-lg">🤝 <strong>Helping Hand Class:</strong> Serving like Jesus</p>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-rose-900">Weekly Club Meetings</h3>
          <p className="text-lg mb-3">Our exciting weekly meetings include:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li className="text-lg"><strong>Opening Ceremony:</strong> Flag ceremonies, pledges to the Adventurer flag, Bible, and national flag</li>
            <li className="text-lg"><strong>Worship Time:</strong> Simple Bible stories, songs, and prayers appropriate for young children</li>
            <li className="text-lg"><strong>Class Time:</strong> Age-specific activities working on award requirements</li>
            <li className="text-lg"><strong>Active Games:</strong> Fun physical activities promoting health and teamwork</li>
            <li className="text-lg"><strong>Craft Projects:</strong> Creative activities developing fine motor skills and artistic expression</li>
            <li className="text-lg"><strong>Awards Progress:</strong> Working toward achievement badges and recognition</li>
            <li className="text-lg"><strong>Family Involvement:</strong> Activities designed for parents to participate alongside children</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-rose-900">Adventurer Awards & Honors</h3>
          <p className="text-lg mb-3">Children earn colorful awards by completing fun activities in various categories:</p>
          <div className="grid md:grid-cols-2 gap-3">
            <ul className="list-disc list-inside space-y-1">
              <li className="text-lg">My God (Spiritual development)</li>
              <li className="text-lg">My Self (Personal growth)</li>
              <li className="text-lg">My Family (Home relationships)</li>
              <li className="text-lg">My World (Community awareness)</li>
            </ul>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-lg">Nature awards (Animals, Plants, Weather)</li>
              <li className="text-lg">Skill awards (Cooking, Crafts, Safety)</li>
              <li className="text-lg">Recreation awards (Sports, Games, Music)</li>
              <li className="text-lg">Service awards (Helping others)</li>
            </ul>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-rose-900">Special Events & Activities</h3>
          <div className="space-y-3">
            <p className="text-lg"><strong>Adventurer Day:</strong> Annual church-wide celebration where Adventurers lead out in worship and demonstrate what they've learned</p>
            <p className="text-lg"><strong>Investiture Ceremony:</strong> Special recognition service where children receive their earned class awards and badges</p>
            <p className="text-lg"><strong>Family Fun Days:</strong> Special outings to parks, museums, farms, or nature centers for educational adventures</p>
            <p className="text-lg"><strong>Camping Trips:</strong> Age-appropriate overnight camping introducing children to outdoor skills and nature appreciation</p>
            <p className="text-lg"><strong>Conference Adventurer Events:</strong> Regional gatherings with hundreds of Adventurers from other clubs for games, activities, and fun</p>
            <p className="text-lg"><strong>Service Projects:</strong> Visiting nursing homes, collecting food for the needy, helping with church maintenance, and other service opportunities</p>
            <p className="text-lg"><strong>Parent-Child Activities:</strong> Special events designed to strengthen family bonds through shared experiences</p>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-rose-900">Curriculum Areas</h3>
          <p className="text-lg mb-3">The Adventurer program provides balanced development in six key areas:</p>
          <div className="space-y-3">
            <p className="text-lg"><strong>1. Spiritual:</strong> Bible stories, prayer, worship, and learning about God's character</p>
            <p className="text-lg"><strong>2. Physical:</strong> Active games, outdoor activities, health education, and developing coordination</p>
            <p className="text-lg"><strong>3. Mental:</strong> Learning new skills, solving problems, and expanding knowledge through awards</p>
            <p className="text-lg"><strong>4. Social:</strong> Making friends, working in teams, and developing communication skills</p>
            <p className="text-lg"><strong>5. Vocational:</strong> Basic life skills like cooking, cleaning, safety, and helping at home</p>
            <p className="text-lg"><strong>6. Recreational:</strong> Games, crafts, music, nature appreciation, and fun activities</p>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-rose-900">Family-Centered Philosophy</h3>
          <p className="text-lg mb-3">Unlike other children's programs, Adventurers actively involves parents:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li className="text-lg">Parents attend meetings and participate in activities with their children</li>
            <li className="text-lg">At-home projects encourage family quality time and spiritual conversations</li>
            <li className="text-lg">Family camping trips and outings create shared memories</li>
            <li className="text-lg">Parents help their children earn awards by teaching skills at home</li>
            <li className="text-lg">Family devotions and worship are encouraged and supported</li>
            <li className="text-lg">Parent volunteers serve as club staff, role models, and leaders</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-rose-900">Safety & Care</h3>
          <p className="text-lg mb-3">Child safety is our highest priority:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li className="text-lg">All staff and volunteers undergo background checks</li>
            <li className="text-lg">Two-adult rule maintained at all times</li>
            <li className="text-lg">First aid trained staff at every activity</li>
            <li className="text-lg">Age-appropriate supervision ratios</li>
            <li className="text-lg">Safe, clean facilities suitable for young children</li>
            <li className="text-lg">Clear emergency procedures and parent communication</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-rose-900">Adventurer Uniform</h3>
          <p className="text-lg mb-3">Adventurers wear an official uniform promoting unity and pride:</p>
          <div className="bg-rose-50 p-5 rounded-lg">
            <ul className="list-disc list-inside space-y-1">
              <li className="text-lg">Colored class scarves indicating grade level</li>
              <li className="text-lg">Adventurer club shirt or vest</li>
              <li className="text-lg">Award patches and pins earned through achievements</li>
              <li className="text-lg">Club identification insignia</li>
            </ul>
            <p className="text-lg mt-3 text-sm italic">Uniform information and ordering details available from club leadership</p>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-rose-900">Leadership Team</h3>
          <p className="text-lg mb-3">Our dedicated staff includes:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li className="text-lg"><strong>Club Director:</strong> Overall leadership and program coordination</li>
            <li className="text-lg"><strong>Class Leaders:</strong> Teachers for each age group</li>
            <li className="text-lg"><strong>Assistant Leaders:</strong> Supporting staff and activity coordinators</li>
            <li className="text-lg"><strong>Parent Volunteers:</strong> Helping with activities, crafts, and events</li>
            <li className="text-lg"><strong>Teen Counselors:</strong> Older youth serving as helpers and role models</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-rose-900">Benefits of Adventurers</h3>
          <div className="space-y-2">
            <p className="text-lg">✓ <strong>Spiritual Foundation:</strong> Children develop a personal relationship with Jesus</p>
            <p className="text-lg">✓ <strong>Character Building:</strong> Learning honesty, kindness, respect, and responsibility</p>
            <p className="text-lg">✓ <strong>Social Skills:</strong> Making friends and learning to work with others</p>
            <p className="text-lg">✓ <strong>Physical Activity:</strong> Active games promoting health and fitness</p>
            <p className="text-lg">✓ <strong>Life Skills:</strong> Practical abilities useful at home and school</p>
            <p className="text-lg">✓ <strong>Nature Appreciation:</strong> Learning about God's creation</p>
            <p className="text-lg">✓ <strong>Family Bonding:</strong> Quality time with parents in meaningful activities</p>
            <p className="text-lg">✓ <strong>Service Mindset:</strong> Early introduction to helping others</p>
            <p className="text-lg">✓ <strong>Confidence Building:</strong> Achievement and recognition building self-esteem</p>
          </div>
        </div>

        <div className="mb-6 bg-gradient-to-r from-rose-100 to-pink-100 p-6 rounded-lg">
          <h3 className="text-2xl font-bold mb-3 text-rose-900">Join the Adventurer Family</h3>
          <p className="text-lg mb-4">Adventurers is where your child will make friends, learn about Jesus, discover new skills, and have tons of fun—all while you participate alongside them! It's an investment in your child's spiritual development and your family relationships.</p>
          <p className="text-lg mb-4"><strong>Registration Information:</strong> We welcome children ages 4-9 (or grades K-4). Club meets weekly during the school year. Registration includes uniform, awards materials, and all activities.</p>
          <p className="text-lg font-semibold text-rose-900">Contact Club Director Langelihle Noko or the church office to register your child, learn about volunteer opportunities, or get more information about this exciting ministry!</p>
        </div>

        <div className="mt-6 text-center">
          <div className="bg-rose-900 text-white p-6 rounded-lg">
            <p className="text-xl font-bold mb-2">Adventurer Pledge:</p>
            <p className="text-lg">"Because Jesus loves me, I will always do my best."</p>
          </div>
        </div>
      </MinistryLayout>
    </Section>
    <Footer/>
    </>
  );
}

export default Adventurers;