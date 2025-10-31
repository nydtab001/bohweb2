import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import PageHeader from "../components/PageHeader";
// SectionHeading removed per request; its spacing and font sizes are applied to the hero below
import Section from "../components/Section";
import Footer from "../components/Footer";

function DonatePage() {
  const [amount, setAmount] = useState(50);
  // example fundraising numbers (replace with real data later)
  const goal = 150000;
  const [raised, setRaised] = useState(20000);
  const percent = Math.min(100, Math.round((raised / goal) * 100));
  const [animatedPercent, setAnimatedPercent] = useState(0);
  useEffect(() => {
    // small delay so the fill animates on mount
    const t = setTimeout(() => setAnimatedPercent(percent), 150);
    return () => clearTimeout(t);
  }, [percent]);
  const suggested = [10, 25, 50, 100, 250];
  const milestones = [100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 0];

  const detailsRef = useRef(null);
  const [detailsVisible, setDetailsVisible] = useState(false);

  useEffect(() => {
    if (!detailsRef.current) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setDetailsVisible(true);
          obs.disconnect();
        }
      });
    }, { threshold: 0.2 });
    obs.observe(detailsRef.current);
    return () => obs.disconnect();
  }, []);

  const openPaynow = (amt) => {
    // Primary Paynow link; we include amount in query if the gateway supports it.
    // Keep it simple — the link opens in a new tab. Replace if you have a payment endpoint.
    const url = "http://www.paynow.co.zw/wzc";
    // optimistic UI: increment local raised amount so the thermometer updates immediately
    const parsed = Number(amt) || 0;
    if (parsed > 0) {
      setRaised((r) => r + parsed);
    }
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const fillColorClass = (p) => {
    if (p < 20) return "bg-red-500";
    if (p >= 80) return "bg-green-500";
    return "bg-amber-400";
  };

  return (
    <>
      <Helmet>
        <title>Give - Beacon of Hope Seventh-day Adventist Church</title>
      </Helmet>

      <PageHeader />

      {/* Hero (SectionHeading spacing & font sizes applied) */}
      <div className="mt-[96px] md:mt-[113px] bg-gradient-to-r from-amber-500 via-rose-500 to-indigo-700 text-white max-md:pt-6 pt-10">
        <div className="max-w-7xl mx-auto md:px-16 px-8 max-md:py-6 py-12">
          <div className="md:flex md:items-center md:justify-between gap-6">
            <div className="md:w-2/3">
              <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">Give. Grow. Transform.</h1>
              <p className="text-lg md:text-lg opacity-95 max-w-2xl">Your generosity fuels ministry, outreach and the building fund. Choose a way to give below — every gift matters and helps shape lives.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <button onClick={() => document.getElementById('give-section')?.scrollIntoView({behavior:'smooth'})} className="border-0 bg-white text-amber-600 font-semibold px-5 py-3 rounded-full shadow hover:opacity-95 transition">Give Now</button>
                {/* <a href="#building-fund" className="inline-block border border-white text-white px-5 py-3 rounded-full hover:bg-white/10 transition">Building Fund</a> */}
              </div>
            </div>

            <div className="md:w-1/3 mt-8 md:mt-0 flex justify-end">
              {/* <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                <p className="text-sm uppercase tracking-wide">Suggested</p>
                <div className="flex gap-3 mt-3">
                  {suggested.map((s) => (
                    <button key={s} onClick={() => setAmount(s)} className={`border-0 px-3 py-2 rounded-lg font-semibold ${amount===s? 'bg-white text-amber-600':'bg-white/20 text-white hover:bg-white/40'}`}>
                      ${s}
                    </button>
                  ))}
                </div>
                <p className="text-xs mt-3 text-right opacity-90">Selected: <span className="font-bold">${amount}</span></p>
              </div> */}
            </div>
                {/* <a href="#building-fund" className="inline-block text-white px-5 py-3 rounded-full hover:bg-white/10 transition">Building Fund</a> */}
          </div>
        </div>
      </div>

      

      <Section>
        <div id="give-section" className="max-w-6xl">
          

          {/* Thermometer-style Vertical Meter */}
          <div className="max-w-6xl mx-auto mb-10 w-full">
          <div className="bg-gradient-to-br from-cyan-400 to-blue-500 rounded-3xl p-8 md:p-10 w-full shadow-xl">
              {/* Header */}
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-5xl font-black text-gray-800 tracking-tight mb-2">CHURCH BUILDING</h2>
                <h2 className="text-3xl md:text-5xl font-black text-gray-700 tracking-tight">TRACKER</h2>
              </div>

              <div className="flex flex-col md:flex-row gap-8 md:gap-12">
                {/* Left side - Goal and content */}
                <div className="w-full md:w-1/2 flex flex-col">
                  <div className="bg-white/90 rounded-2xl p-6 mb-6">
                    <div className="text-sm font-bold text-gray-600 mb-2">OUR GOAL</div>
                    <div className="text-4xl md:text-5xl font-black text-gray-800">USD {(goal / 1000).toFixed(0)} 000</div>
                  </div>

                  <div className="text-white space-y-4 mb-6">
                    <p className="text-lg italic leading-relaxed">"And I say also unto thee, That thou art Peter, and upon this rock I will build my church, and the gates of hell shall not prevail against it."</p>
                    <p className="text-sm font-semibold">Matthew 16:18</p>
                  </div>

                  {/* Project Images */}
                  <div className="space-y-4 mb-6">
                    <div className="rounded-xl overflow-hidden shadow-lg">
                      <img src="/project/church_view.jpg" alt="Church Exterior View" className="w-full h-auto object-cover" />
                    </div>
                    <div className="rounded-xl overflow-hidden shadow-lg">
                      <img src="/project/church_interior.jpg" alt="Church Interior" className="w-full h-auto object-cover" />
                    </div>
                    <div className="rounded-xl overflow-hidden shadow-lg">
                      <img src="/project/church_aerial.jpg" alt="Church Aerial View" className="w-full h-auto object-cover" />
                    </div>
                  </div>

                  <div className="mt-auto">
                    <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center">
                      <h3 className="text-4xl md:text-6xl font-black text-white mb-2">DO YOUR</h3>
                      <h3 className="text-4xl md:text-6xl font-black text-white">PART</h3>
                    </div>
                  </div>
                </div>

                {/* Right side - Thermometer */}
                <div className="w-full md:w-1/2 flex flex-col">
                  <div className="text-center mb-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-white">WHERE WE ARE</h3>
                  </div>

                  <div className="flex items-start justify-center gap-4">
                    {/* Milestone graduations */}
                    <div className="flex flex-col justify-between h-[250px] md:h-[450px]">
                      {milestones.map((m) => {
                        const value = Math.round((m / 100) * goal);
                        return (
                          <div key={m} className="flex items-center justify-end gap-2">
                            <span className="text-xs font-semibold text-white">USD {value.toLocaleString()}</span>
                            <div className="w-6 h-[2px] bg-white" />
                          </div>
                        );
                      })}
                    </div>

                    {/* Thermometer tube */}
                    <div className="flex flex-col items-center">
                      <div className="w-[78px] h-[250px] md:h-[450px] bg-white/80 rounded-t-full border-[9px] border-b-0 -mt-1 border-white relative overflow-hidden flex items-end z-10" role="img" aria-label={`Progress: ${percent}%`}>
                        <div className={`absolute bottom-0 left-0 right-0 transition-all ${fillColorClass(percent)}`} style={{ height: `${animatedPercent}%` }} />
                      </div>
                      {/* Thermometer base */}
                      <div className={`w-[104px] h-[104px] rounded-full border-[12px] border-t-0 border-white transition-all -mt-5 ${fillColorClass(percent)}`} />
                    </div>
                  </div>

                  <div className="mt-6 text-white text-center">
                    <div className="text-3xl font-black">${raised.toLocaleString()}</div>
                    <div className="text-sm font-semibold text-white/90">of ${goal.toLocaleString()} raised</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="text-lg text-gray-700 max-w-4xl mx-auto mb-8 text-center">Help us expand Beacon of Hope Church. You can contribute via bank transfer or online through Paynow. Every brick tells a story — your support builds community and hope.</p>

          {/* Video */}
          <div className="aspect-video w-full mb-12 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.youtube.com/embed/qTxtKjp3Ivw?si=l0FUe-flW7SppoQG"
              title="Church Development Plans"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Bank Transfer Info */}
            <div className="bg-amber-50 rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-semibold mb-3">Bank Transfer</h3>
              <div className="text-sm text-slate-700 space-y-1">
                <p><strong>Bank:</strong> FBC</p>
                <p><strong>Account Name:</strong> West Zimbabwe Conference of SDA</p>
                <p><strong>USD Account:</strong> 1020218100111</p>
                <p><strong>ZIG Account:</strong> 1020218100181</p>
                <p><strong>Branch:</strong> Jason Moyo Branch</p>
                <p><strong>SWIFT:</strong> FBCPZWHAXXX</p>
                <p className="mt-2"><strong>Reference:</strong> BOH Church Development</p>
              </div>

              <p className="mt-4 text-sm text-gray-600">Email proof to <a href="mailto:bohtreasurydept@gmail.com" className="underline text-blue-700">bohtreasurydept@gmail.com</a> or call <a href="tel:+263773430709" className="underline text-blue-700">+263 773 430 709</a>.</p>
            </div>

            {/* Paynow Info */}
            <div className="bg-indigo-50 rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-semibold mb-3">Online Payment (Paynow)</h3>
              <p className="text-sm text-slate-700">Use the link below and select <strong>"BUILDING"</strong> under the project options. If possible, include the reference above in your comments.</p>
              <div className="mt-4">
                <button onClick={()=>openPaynow(amount)} className="border-0 inline-block bg-amber-600 hover:bg-amber-700 text-white font-semibold px-5 py-3 rounded-full shadow-md transition-colors duration-200">Donate via Paynow</button>
              </div>
              <p className="mt-4 text-sm text-gray-600">Email proof to <a href="mailto:bohtreasurydept@gmail.com" className="underline text-blue-700">bohtreasurydept@gmail.com</a> or call <a href="tel:+263773430709" className="underline text-blue-700">+263 773 430 709</a>.</p>
            </div>
          </div>
        </div>
      </Section>

      <Footer />
    </>
  );
}

export default DonatePage;