import { Link } from "react-router-dom";

// components/Footer.jsx

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-gray-200 py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Column 1: Church Info */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Service Times</h4>
          <ul className="space-y-1 text-s">
            <li><strong>Sabbath School:</strong> Saturday, 9:00 AM – 10:00 AM</li>
            <li><strong>Main Service:</strong> Saturday, 10:30 AM – 12:00 PM</li>
            <li><strong>Afternoon Service:</strong> Saturday, 2:00 PM – 4:00 PM</li>
            <li><strong>Vespers:</strong> Saturday, Sunset</li>
          </ul>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1 text-s">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/ministries" className="hover:underline">Ministries</a></li>
            <li><a href="/media/sermons" className="hover:underline">Sermons</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Column 3: Socials */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
          <ul className="space-y-1 text-s">
            <li>
              <a
                href="https://www.facebook.com/beaconofhopezw"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/@beaconofhopesdazw"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                YouTube
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/beaconofhopesda"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Instagram
              </a>
            </li>
            <li>
              <a href="mailto:beaconofhope@wzc.adventist.org" className="hover:underline">
                Email
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm mt-8 border-t border-gray-600 pt-4">
        © {new Date().getFullYear()} Beacon of Hope Seventh-Day Adventist Church. All rights reserved.
      </div>
    </footer>
  );
}
