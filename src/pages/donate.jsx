import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import PageHeader from "../components/PageHeader";
// SectionHeading removed per request; its spacing and font sizes are applied to the hero below
import Section from "../components/Section";
import Footer from "../components/Footer";

function DonatePage() {
  const [amount, setAmount] = useState(50);
  // example fundraising numbers (replace with real data later)
  const goal = 100000;
  const [raised, setRaised] = useState(20250);
  const percent = Math.min(100, Math.round((raised / goal) * 100));
  const [animatedPercent, setAnimatedPercent] = useState(0);

  useEffect(() => {
    // small delay so the fill animates on mount
    const t = setTimeout(() => setAnimatedPercent(percent), 150);
    return () => clearTimeout(t);
  }, [percent]);
  const suggested = [10, 25, 50, 100, 250];
  const milestones = [100, 80, 60, 40, 20, 0];

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
        <div id="give-section" className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-4xl font-bold text-slate-800 mb-6 text-center" id="building-fund">Building Fund Contributions</h2>

          <p className="text-lg text-gray-700 max-w-4xl mx-auto mb-8 text-center">Help us expand Beacon of Hope Church. You can contribute via bank transfer or online through Paynow. Every brick tells a story — your support builds community and hope.</p>

          {/* (Removed Fast Online Donation CTA as requested) */}

          {/* Video */}
          {/* Thermometer-style Vertical Meter */}
          <div className="max-w-6xl mx-auto mb-10 w-full">
          <div className="bg-blue-700 rounded-lg p-6 flex flex-col md:flex-row md:items-center gap-6 w-full ring-1 ring-white/20">
              <div className="w-full md:w-1/3 flex flex-col items-center">
                <div className="flex items-center gap-4">
                  {/* Milestone graduations */}
                  <div className="flex flex-col justify-between h-64">
                    {milestones.map((m) => {
                      const value = Math.round((m / 100) * goal);
                      return (
                        <div key={m} className="flex items-center justify-end gap-2">
                          <span className="text-xs text-white/80">${value.toLocaleString()}</span>
                          <div className="w-6 h-[1px] bg-white/30" />
                        </div>
                      );
                    })}
                  </div>

                  {/* Thermometer tube */}
                  <div className="w-20 h-64 bg-white rounded-full border-8 border-white relative overflow-hidden flex items-end" role="img" aria-label={`Progress: ${percent}%`}>
                    <div className={`absolute bottom-0 left-0 right-0 transition-all ${fillColorClass(percent)}`} style={{ height: `${animatedPercent}%` }} />
                  </div>
                </div>

                <div className="mt-4 text-white text-center">
                  <div className="text-2xl font-bold">${raised.toLocaleString()}</div>
                  <div className="text-sm text-white">of ${goal.toLocaleString()}</div>
                </div>
              </div>

              <div className="w-full md:flex-1 flex flex-col items-center text-white text-center" ref={detailsRef}>
                <h4 className={`text-2xl md:text-4xl font-semibold transition-all ${detailsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>Help us reach our goal</h4>
                <p className={`md:text-lg text-md text-white mt-2 transition-all ${detailsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>Raised <span className="font-semibold">${raised.toLocaleString()}</span> of <span className="font-semibold">${goal.toLocaleString()}</span>. Your gift brings us closer—thank you!</p>
                {/* horizontal progress bar removed as requested */}
              </div>
            </div>
          </div>

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