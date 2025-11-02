import PageHeader from "../components/PageHeader";
import { Helmet } from "react-helmet";
import Section from "../components/Section";
import SectionHeading from "../components/SectionHeading";
import Footer from "../components/Footer";
import MinistryLayout from "../components/MinistryLayout";
import logos from '../data/logos.json';

function Communications() {
  return (
    <>
    <Helmet>
        <title>
          Communications - Beacon of Hope Seventh-day Adventist Church
        </title>
      </Helmet>
    <PageHeader
            
    />
    <SectionHeading title="Communications" bg="bg-slate-900" colour="text-yellow-600"/>
    <Section>
      <MinistryLayout image={logos[12].src} director={{ name: "John Doe", photo: "/images/john_doe.jpg" }}>
        <div className="mb-6">
          <p className="text-lg mb-4">The Communications Department at Beacon of Hope is responsible for effectively sharing the gospel message, keeping our congregation informed and connected, and representing our church to the broader community. We believe that good communication is essential for a healthy, growing church and for fulfilling the Great Commission.</p>
          <p className="text-lg">Through various media platforms, creative content, and strategic messaging, we help tell the story of what God is doing in and through Beacon of Hope Church.</p>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-slate-900">Our Mission</h3>
          <p className="text-lg mb-3">To communicate the love of Christ and the mission of Beacon of Hope Church clearly, creatively, and consistently across all platforms, engaging members and reaching our community with the Three Angels' Messages.</p>
          <div className="bg-slate-50 p-5 rounded-lg">
            <p className="text-lg italic text-slate-900">"How beautiful on the mountains are the feet of those who bring good news, who proclaim peace, who bring good tidings, who proclaim salvation." - Isaiah 52:7</p>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-slate-900">Communication Channels</h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-xl font-semibold mb-2 text-slate-800">Digital Platforms</h4>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li className="text-lg">Church Website - Central hub for information, sermons, events, and resources</li>
                <li className="text-lg">Social Media - Facebook, Instagram, Twitter, YouTube for engagement and outreach</li>
                <li className="text-lg">Email Newsletters - Weekly updates delivered to members' inboxes</li>
                <li className="text-lg">Mobile App - On-the-go access to sermons, events, giving, and prayer requests</li>
                <li className="text-lg">WhatsApp Groups - Quick communication and prayer chains</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2 text-slate-800">Traditional Media</h4>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li className="text-lg">Church Bulletin - Weekly printed program with announcements and calendar</li>
                <li className="text-lg">Monthly Newsletter - Printed or digital magazine-style publication</li>
                <li className="text-lg">Notice Boards - Physical bulletin boards with announcements and information</li>
                <li className="text-lg">Posters & Banners - Eye-catching displays for events and campaigns</li>
                <li className="text-lg">Press Releases - Media communications for community events</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2 text-slate-800">Visual Media</h4>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li className="text-lg">Live Streaming - Broadcasting worship services online</li>
                <li className="text-lg">Video Production - Creating promotional, educational, and testimonial videos</li>
                <li className="text-lg">Photography - Documenting church life and events</li>
                <li className="text-lg">Graphic Design - Creating visual content for all platforms</li>
                <li className="text-lg">Presentation Slides - Supporting worship and teaching with visual aids</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-slate-900">Media Ministry</h3>
          <div className="space-y-3">
            <p className="text-lg"><strong>Sermon Recording & Distribution:</strong> Recording, editing, and distributing weekly sermons via podcast, YouTube, and website.</p>
            <p className="text-lg"><strong>Live Streaming Services:</strong> Broadcasting Sabbath services and special events for those unable to attend in person.</p>
            <p className="text-lg"><strong>Sound & Audio Production:</strong> Managing sound systems for clear, professional-quality audio during services.</p>
            <p className="text-lg"><strong>Video Testimonies:</strong> Capturing and sharing stories of God's work in members' lives.</p>
            <p className="text-lg"><strong>Event Documentation:</strong> Professional photography and videography of church events, baptisms, and special occasions.</p>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-slate-900">Content Creation & Management</h3>
          <ul className="list-disc list-inside space-y-2">
            <li className="text-lg"><strong>Weekly Bulletin Preparation:</strong> Coordinating content, design, and printing of Sabbath program</li>
            <li className="text-lg"><strong>Social Media Management:</strong> Creating and scheduling engaging posts across all platforms</li>
            <li className="text-lg"><strong>Blog & Article Writing:</strong> Producing inspirational and educational content for website</li>
            <li className="text-lg"><strong>Event Promotion:</strong> Designing and distributing promotional materials for church activities</li>
            <li className="text-lg"><strong>Announcement Coordination:</strong> Collecting, vetting, and publishing church announcements</li>
            <li className="text-lg"><strong>Brand Management:</strong> Maintaining consistent visual identity and messaging</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-slate-900">Public Relations & Community Engagement</h3>
          <p className="text-lg mb-3">Representing the church to the broader community:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li className="text-lg">Media relations with local newspapers, radio, and TV stations</li>
            <li className="text-lg">Press releases for community events and outreach programs</li>
            <li className="text-lg">Crisis communication and reputation management</li>
            <li className="text-lg">Partnership communications with other churches and organizations</li>
            <li className="text-lg">Community event advertising and promotion</li>
            <li className="text-lg">Visitor welcome information and first-impression materials</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-slate-900">Internal Communications</h3>
          <p className="text-lg mb-3">Keeping our church family informed and connected:</p>
          <div className="space-y-3">
            <p className="text-lg"><strong>Member Directory:</strong> Maintaining up-to-date contact information for members</p>
            <p className="text-lg"><strong>Ministry Coordination:</strong> Facilitating communication between departments and ministries</p>
            <p className="text-lg"><strong>Emergency Notifications:</strong> Rapid communication system for urgent information</p>
            <p className="text-lg"><strong>Prayer Chain:</strong> Coordinating prayer requests and praises throughout the congregation</p>
            <p className="text-lg"><strong>Calendar Management:</strong> Publishing and updating church event calendar</p>
            <p className="text-lg"><strong>Feedback Systems:</strong> Creating channels for member input and suggestions</p>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-slate-900">Training & Volunteer Opportunities</h3>
          <p className="text-lg mb-3">We welcome volunteers with various skills to join our communications team:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li className="text-lg"><strong>Writers:</strong> Creating articles, blogs, and promotional copy</li>
            <li className="text-lg"><strong>Photographers:</strong> Documenting church events and activities</li>
            <li className="text-lg"><strong>Videographers:</strong> Filming and editing video content</li>
            <li className="text-lg"><strong>Graphic Designers:</strong> Creating visual content and promotional materials</li>
            <li className="text-lg"><strong>Social Media Managers:</strong> Managing online presence and engagement</li>
            <li className="text-lg"><strong>Technical Team:</strong> Operating sound, lights, cameras, and streaming equipment</li>
            <li className="text-lg"><strong>Proofreaders:</strong> Ensuring accuracy and quality of written materials</li>
          </ul>
          <p className="text-lg mt-3">Training provided for all roles—we'll help you develop your communication skills!</p>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-slate-900">Website & Digital Strategy</h3>
          <div className="space-y-3">
            <p className="text-lg"><strong>Website Maintenance:</strong> Regular updates, fresh content, and technical optimization</p>
            <p className="text-lg"><strong>SEO & Online Visibility:</strong> Ensuring people can find us through search engines</p>
            <p className="text-lg"><strong>Online Giving Integration:</strong> Secure digital platforms for tithes and offerings</p>
            <p className="text-lg"><strong>Event Registration:</strong> Online sign-ups and ticketing for church events</p>
            <p className="text-lg"><strong>Resource Library:</strong> Digital archive of sermons, studies, and materials</p>
            <p className="text-lg"><strong>Mobile Optimization:</strong> Ensuring accessibility across all devices</p>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-slate-900">Literature & Publishing</h3>
          <ul className="list-disc list-inside space-y-2">
            <li className="text-lg">Distribution of Adventist magazines and periodicals (Signs, Adventist Review, etc.)</li>
            <li className="text-lg">Book table management with denominational and inspirational literature</li>
            <li className="text-lg">Tract printing and distribution for evangelism</li>
            <li className="text-lg">Church history documentation and archives</li>
            <li className="text-lg">Annual reports and ministry summaries</li>
            <li className="text-lg">Devotional guides and study materials</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-slate-900">Special Projects & Campaigns</h3>
          <p className="text-lg mb-3">Strategic communication initiatives including:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li className="text-lg">Evangelistic series promotion and follow-up</li>
            <li className="text-lg">Building fund and stewardship campaigns</li>
            <li className="text-lg">Church anniversary and milestone celebrations</li>
            <li className="text-lg">Visitor welcome and connection strategies</li>
            <li className="text-lg">Ministry awareness and recruitment campaigns</li>
            <li className="text-lg">Community event marketing and outreach</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-slate-900">Communications Standards & Guidelines</h3>
          <p className="text-lg mb-3">We maintain excellence through:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li className="text-lg">Clear brand guidelines for consistent visual identity</li>
            <li className="text-lg">Content calendar for strategic planning and coordination</li>
            <li className="text-lg">Quality control processes for all published materials</li>
            <li className="text-lg">Submission deadlines to ensure timely communication</li>
            <li className="text-lg">Approval workflows for sensitive or official communications</li>
            <li className="text-lg">Copyright compliance and proper attribution</li>
            <li className="text-lg">Accessibility standards for inclusive communication</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-slate-900">Technology & Equipment</h3>
          <div className="bg-slate-50 p-5 rounded-lg">
            <p className="text-lg mb-3">Our communications ministry utilizes:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li className="text-lg">Professional audio-visual equipment for worship services</li>
              <li className="text-lg">Live streaming capabilities with multiple camera angles</li>
              <li className="text-lg">Editing software for video, audio, and graphic production</li>
              <li className="text-lg">Digital signage and display systems</li>
              <li className="text-lg">Cloud-based collaboration tools for team coordination</li>
              <li className="text-lg">Social media management and scheduling platforms</li>
            </ul>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 text-slate-900">Measuring Impact</h3>
          <p className="text-lg mb-3">We regularly evaluate our effectiveness through:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li className="text-lg">Website analytics tracking visits and engagement</li>
            <li className="text-lg">Social media metrics measuring reach and interaction</li>
            <li className="text-lg">Email open rates and click-through analysis</li>
            <li className="text-lg">Member surveys and feedback collection</li>
            <li className="text-lg">Visitor response and first-impression evaluations</li>
            <li className="text-lg">Event attendance and registration data</li>
          </ul>
        </div>

        <div className="mb-6 bg-gradient-to-r from-slate-100 to-gray-100 p-6 rounded-lg">
          <h3 className="text-2xl font-bold mb-3 text-slate-900">Get Involved</h3>
          <p className="text-lg mb-4">Whether you're a tech-savvy digital native, a creative writer, a skilled photographer, or someone who just wants to help spread the good news—there's a place for you in Communications Ministry!</p>
          <p className="text-lg mb-4">We provide training, mentorship, and opportunities to use your gifts for God's glory. Join a team that's passionate about telling the story of Jesus and what He's doing at Beacon of Hope Church.</p>
          <p className="text-lg font-semibold text-slate-900">Contact our Communications director to learn about volunteer opportunities, submit content for publication, or get assistance with promoting your ministry event!</p>
        </div>

        <div className="mt-6">
          <h3 className="text-2xl font-bold mb-3 text-slate-900">Submit Content</h3>
          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-5">
            <p className="text-lg mb-2"><strong>Have an announcement, testimony, or event to share?</strong></p>
            <p className="text-lg">Submit your information to the Communications Department by Wednesday noon for inclusion in the Sabbath bulletin, or contact us for social media and website content.</p>
            <p className="text-lg mt-3 text-sm">Email: <span className="font-semibold">communications@beaconofhope.org</span></p>
          </div>
        </div>

        <div className="mt-6 text-center">
          <div className="bg-slate-900 text-yellow-600 p-6 rounded-lg">
            <p className="text-xl font-bold mb-2">"Go into all the world and preach the gospel to all creation."</p>
            <p className="text-lg">- Mark 16:15</p>
          </div>
        </div>
      </MinistryLayout>
    </Section>
    <Footer/>
    </>
  );
}

export default Communications;