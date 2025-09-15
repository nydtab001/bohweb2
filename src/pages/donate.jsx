import { Helmet } from "react-helmet";
import PageHeader from "../components/PageHeader";
import SectionHeading from "../components/SectionHeading";
import Section from "../components/Section";
import Footer from "../components/Footer";

function DonatePage() {
    return (
        <>
    <Helmet>
        <title>
          Donate - Beacon of Hope Seventh-day Adventist Church
        </title>
      </Helmet>
        <PageHeader/>
      <SectionHeading title="Donate"/>
      <Section>
         <h2 className="text-2xl md:text-4xl font-bold text-blue-900 mb-8 text-center">
    Building Fund Contributions
  </h2>
  <p className="text-lg text-gray-700 max-w-5xl mx-auto mb-10 text-center">
    Help us expand Beacon of Hope Church. You can contribute via bank transfer or online through Paynow. Every brick tells a story. Every beam holds a prayer...
    Your support builds more than a structure; it builds a community of faith and hope.
  </p>

  <div className="aspect-video max-w-5xl mx-auto mb-12">
  <iframe
    src="https://www.youtube.com/embed/qTxtKjp3Ivw?si=l0FUe-flW7SppoQG"
    title="Church Development Plans"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    className="w-full h-full rounded-lg shadow-md"
  ></iframe>
</div>


  <div className="grid md:grid-cols-2 max-w-5xl gap-8 mx-auto">
    {/* Bank Transfer Info */}
    <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold mb-2 text-blue-800">Bank Transfer</h3>
      <p><strong>Bank:</strong> FBC</p>
      <p><strong>Account Name:</strong> West Zimbabwe Conference of SDA</p>
      <p><strong>USD Account:</strong> 1020218100111</p>
      <p><strong>ZIG Account:</strong> 1020218100181</p>
      <p><strong>Branch:</strong> Jason Moyo Branch</p>
      <p><strong>SWIFT Code:</strong> FBCPZWHAXXX</p>
      <p className="mt-2"><strong>Reference:</strong> BOH Church Development</p>
       <p className="mt-4 text-sm text-gray-600">
        Email proof of payment to <a href="mailto:bohtreasurydept@gmail.com" className="underline text-blue-700">bohtreasurydept@gmail.com</a><br />
        or <a href="tel:+263773430709" className="underline text-blue-700">+263 773 430 709</a> for recording.
      </p>
    </div>

    {/* Paynow Info */}
    <div className="bg-yellow-50 p-6 rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold mb-2 text-yellow-800">Online Payment (Paynow)</h3>
      <p>Use the link below and select <strong>"BUILDING"</strong> under the "Other Project" section.</p>
      <a
        href="http://www.paynow.co.zw/wzc"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-6 bg-amber-600 hover:bg-amber-700 text-white font-semibold px-5 py-3 rounded-full shadow-md transition-colors duration-200"
      >
        Donate via Paynow
      </a>
      <p className="mt-6 text-sm text-gray-600">
        Email proof of payment to <a href="mailto:bohtreasurydept@gmail.com" className="underline text-blue-700">bohtreasurydept@gmail.com</a><br />
        or <a href="tel:+263773430709" className="underline text-blue-700">+263 773 430 709</a> for recording.
      </p>
    </div>
  </div>

      </Section>
      <Footer/>
    </>);
}

export default DonatePage;