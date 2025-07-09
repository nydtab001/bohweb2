// src/components/PageHeader.jsx
import { Link } from "react-router-dom";
import logo from "/bohlogo.png"; // Update the path to your church logo
import { useState } from 'react';
import MobileDropdown from "./MobileDropdown";

function renderDropDown(open,setopen, item, idx){
  const isactive = open === item.label
  switch(item.label){
    case "About Us ▼":
      return(
        <>
        <div
        className="relative"
        onMouseEnter={() => setopen(item.label)}
        onMouseLeave={() => setopen(null)}
        >
          <Link 
              key={idx}
              to={item.href}
              className="text-lg font-medium text-gray-700 hover:text-blue-900"
          >
              {item.label}
          </Link>
        {isactive && (
              <div className="absolute top-full bg-white border rounded shadow-md py-2 w-48 z-50">
                <a href="https://www.adventist.org/beliefs/" className="block px-4 py-2 hover:bg-gray-100">Official Beliefs</a>
                <a href="https://gc.adventist.org/wp-content/uploads/2025/07/2022-Seventh-day-Adventist-Church-Manual.pdf" className="block px-4 py-2 hover:bg-gray-100">Church Manual</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Church Leaders ▼</a>
              </div>
            )}
        </div>
        </>
      )
    case "Ministries ▼":
      return(<>
        <div
        className="relative"
        onMouseEnter={() => setopen(item.label)}
        onMouseLeave={() => setopen(null)}
        >
          <Link
          key={idx}
          to={item.href} 
          className="text-lg font-medium text-gray-700 hover:text-blue-900">{item.label}</Link>
        {isactive && (
              <div className="absolute top-full bg-white border rounded shadow-md py-2 w-48 z-50">
                <a href="/ministries/youth" className="block px-4 py-2 hover:bg-gray-100">Youth</a>
                <a href="/ministries/women" className="block px-4 py-2 hover:bg-gray-100">Women</a>
                <a href="/ministries/health" className="block px-4 py-2 hover:bg-gray-100">Health</a>
                <a href="/ministries/music" className="block px-4 py-2 hover:bg-gray-100">Music</a>
              </div>
            )}
        </div>
        </>)
    case "Media ▼":
      return(<>
        <div
        className="relative"
        onMouseEnter={() => setopen(item.label)}
        onMouseLeave={() => setopen(null)}
        >
          <Link
          key={idx}
          to={item.href} 
          className="text-lg font-medium text-gray-700 hover:text-blue-900">{item.label}</Link>
        {isactive && (
              <div className="absolute top-full bg-white border rounded shadow-md py-2 w-48 z-50">
                <a href="/media/sermons" className="block px-4 py-2 hover:bg-gray-100">Sermons</a>
              </div>
            )}
        </div>
        </>)
    default:
      return(null)
  }
}

function renderDropMobile(open,setopen, item, idx){
  const dropdownLabels = ["About Us ▼", "Ministries ▼", "Media ▼"];
  const isExpandible = dropdownLabels.includes(item.label);
  const isOpen = open === item.label;

}

export default function PageHeader({ navItems = [] }) {
  const [isOpen, setIsOpen] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDrop, setMobileDrop] = useState(null);

  const dropdownContent = {
  "About Us ▼": [
    { label: "Official beliefs", href: "https://www.adventist.org/beliefs/" },
    { label: "Church Manual", href: "https://gc.adventist.org/wp-content/uploads/2025/07/2022-Seventh-day-Adventist-Church-Manual.pdf" },
    { label: "Church Leaders", href: "/ministries/health" },
  ],
  "Ministries ▼": [
    { label: "Education", href: "/ministries/education" },
    { label: "Community", href: "/ministries/community" },
  ],
  "Media ▼": [
    { label: "Sermons", href: "/media/sermons" },
  ],
};


  return (
    <>
    <header className="relative z-[999] max-md:fixed top-0 w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo Section */}
        <Link to="/" className="flex items-center space-x-3">
          <img src={logo} alt="Church Logo" className="h-20 w-auto" />
          <div className="text-left">
          </div>
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item, idx) => (
            item.label !== "About Us ▼" && 
            item.label !== "Ministries ▼" &&
            item.label !== "Media ▼" ? (
            <Link
              key={idx}
              to={item.href}
              className="text-lg font-medium text-gray-700 hover:text-blue-900"
            >
              {item.label}
            </Link>
           ) : (
              renderDropDown(isOpen, setIsOpen, item, idx)
           )
          ))}
        </nav>
        
        {/* hamburger */}
        {!mobileOpen && (<button
          className="md:hidden border-none bg-transparent p-2 focus:outline-none focus:ring-0"
          onClick={() => setMobileOpen(true)}
        >
          <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>)}

        {/* cancel */}
        {mobileOpen && (<button
          className="md:hidden border-none bg-transparent p-2 focus:outline-none focus:ring-0"
          onClick={() => setMobileOpen(false)}
        >
          <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>)}
      </div>
    </header>
    <div
  className={`fixed top-[113px] left-0  w-full bg-white z-50 transform transition-transform duration-300 ease-in-out ${
    mobileOpen ? 'translate-x-0' : '-translate-x-full'
  }`}
>
  <div className=" flex flex-col">

    {navItems.map((item, idx) => (
      item.label !== "About Us ▼" && 
      item.label !== "Ministries ▼" &&
      item.label !== "Media ▼" ? (
      <Link
        key={idx}
        to={item.href}
        className="text-xl py-4 px-2 font-semibold border text-gray-800 hover:text-blue-900"
        // onClick={() => setMobileOpen(!mobileOpen)}
      >
        {item.label}
      </Link>) : (
        <MobileDropdown
          key={idx}
          item={item}
          activeLabel={mobileDrop}
          setActiveLabel={setMobileDrop}
          dropdownContent={dropdownContent}      
        >

        </MobileDropdown>
      )
    ))}
  </div>
</div>
</>
  );
}
