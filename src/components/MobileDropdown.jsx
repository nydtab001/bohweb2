import { Link } from "react-router-dom";
import { useState } from "react";
import DropdownButton from "./assets/DropdownButton";

export default function MobileDropdown({ item, activeLabel, setActiveLabel, dropdownContent }) {
  const isOpen = activeLabel === item.label;
  const submenu = dropdownContent[item.label];
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  return (
    <div className="flex flex-col text-gray-800">
      <div className="flex justify-between items-center text-xl py-4 px-2 hover:text-blue-900">
        <Link className="px-6" to={item.href}>{item.label.slice(0, -2).trim()}</Link>
        <button
          className="hover:text-blue-900 border-none px-6"
          onClick={() =>
            setActiveLabel(isOpen ? null : item.label)
          }
        >
          <span className={isOpen ? "transition-transform transform rotate-180 inline-block" : "transition-transform"}>
            <DropdownButton/>
            </span>
        </button>
      </div>

      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col bg-slate-600">
          {submenu?.map((sub, idx) => (
            <div key={idx}>
              {/* If item has children, make it expandable */}
              {sub.children ? (
                <div className="flex flex-col">
                  <div className="flex justify-between items-center py-4 px-2 hover:text-blue-700">
                    <a
                      href={sub.href}
                      className="block px-6 text-white flex-grow"
                    >
                      {sub.label.replace(' ▼', '')}
                    </a>
                    <button
                      className="text-white border-none px-6"
                      onClick={() => setActiveSubMenu(activeSubMenu === idx ? null : idx)}
                    >
                      <span className={activeSubMenu === idx ? "transition-transform transform rotate-180 inline-block" : "transition-transform inline-block"}>
                        <DropdownButton/>
                      </span>
                    </button>
                  </div>
                  
                  {/* Nested submenu */}
                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      activeSubMenu === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="flex flex-col bg-slate-600">
                      {sub.children.map((child, childIdx) => (
                        <a
                          key={childIdx}
                          href={child.href}
                          className="block py-2 px-12 text-white hover:text-blue-700"
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <a
                  href={sub.href}
                  className="block py-4 px-8 text-white hover:text-blue-700"
                  target={sub.target}
                >
                  {sub.label}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}