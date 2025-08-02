// src/components/PageHeader.jsx
import { Link } from "react-router-dom";
import logo from "/bohlogo.png"; // Update the path to your church logo
import { useState } from 'react';
import MobileDropdown from "./MobileDropdown";

function renderDropDown(open,setopen, subopen, setsub, item, idx, dropdownContent){
  const isactive = open === item.label
  const subactive = subopen === dropdownContent[item.label].label
  const submenu = dropdownContent[item.label];
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
              <div className={`absolute top-full flex flex-col bg-white border w-48 z-50 ${
          isactive ? 'opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}>
              {submenu?.map((sub,idx) => (
                <>
                <div
                onMouseEnter={() => setsub(sub.label)}
                onMouseLeave={() => setsub(null)}
                className="text-gray-700 hover:text-blue-900 relative"
                >
                <Link 
                key={idx}
                to={sub.href}
                className=" block px-4 py-2 hover:bg-gray-100"
                >
                {sub.label}
              </Link>
              <div
                className={subopen === sub.label ? 'opacity-100 bg-slate-600 text-white':'max-h-0 opacity-0'}
              >
              {sub.children?.map((subm,idxs) => (
                  <Link 
                key={idxs}
                href={subm.href}
                className="block px-4 py-2 hover:text-blue-700">
                  {subm.label}
                  </Link>
                ))}
                </div>
                </div>
                </>            
            ))}
              </div>
        </div>
        </>
      )
}

export default function PageHeader({ navItems = [] }) {
  const [isOpen, setIsOpen] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDrop, setMobileDrop] = useState(null);
  const [subopen, setsub] = useState(null);

  const dropdownContent = {
  "About Us ▼": [
    { label: "Official beliefs", href: "https://www.adventist.org/beliefs/" },
    { label: "Church Manual", href: "https://gc.adventist.org/wp-content/uploads/2025/07/2022-Seventh-day-Adventist-Church-Manual.pdf" },
    { label: "Church Leaders ▼", href: "/about/churchleaders", 
      children: [
        {label: "Pastor", href: "/about/churchleaders/pastor"},
        {label: "Elders", href: "/about/churchleaders/elders"},
      ]
    },
  ],
  // "Ministries ▼": [
  //   { label: "Community Services", href: "/ministries/community" },
  //   { label: "Adventurers", href: "/ministries/community" },
  //   { label: "Communication", href: "/ministries/community" },
  //   { label: "Community Services", href: "/ministries/community" },
  //   { label: "Children's Ministries", href: "/ministries/community" },
  //   { label: "Education", href: "/ministries/education" },
  //   { label: "Family Life", href: "/ministries/community" },
  //   { label: "Health Ministries", href: "/ministries/community" },
  //   { label: "Music", href: "/ministries/community" },
  //   { label: "Pathfinders", href: "/ministries/community" },
  //   { label: "Personal Ministries", href: "/ministries/community" },
  //   { label: "Prayer Ministries", href: "/ministries/community" },
  //   { label: "Publishing", href: "/ministries/community" },
  //   { label: "Sabbath School", href: "/ministries/community" },
  //   { label: "Stewardship", href: "/ministries/community" },
  //   { label: "Youth Ministries", href: "/ministries/community" },
  // ],
  "Media ▼": [
    { label: "Sermons", href: "/media/sermons" },
    { label: "Events", href: "/media/events" },
  ],
};


  return (
    <>
    <header className=" z-[999] fixed top-0 w-full bg-white border-b border-gray-200 md:shadow-lg shadow-md">
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
            item.label !== "Ministries " &&
            item.label !== "Media ▼" ? (
            <Link
              key={idx}
              to={item.href}
              className="text-lg font-medium text-gray-700 hover:text-blue-900"
            >
              {item.label}
            </Link>
           ) : (
              renderDropDown(isOpen, setIsOpen, subopen, setsub, item, idx, dropdownContent)
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
  className={`fixed top-[113px] left-0 shadow-md py-6 w-full bg-white z-50 transform transition-transform duration-300 ease-in-out ${
    mobileOpen ? 'translate-x-0' : '-translate-x-full'
  }`}
>
  <div className=" flex flex-col">

    {navItems.map((item, idx) => (
      item.label !== "About Us ▼" && 
      item.label !== "Media ▼" ? (
      <Link
        key={idx}
        to={item.href}
        className="text-xl py-4 px-8 text-gray-800 hover:text-blue-900"
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
