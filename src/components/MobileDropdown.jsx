import { Link } from "react-router-dom";

export default function MobileDropdown({ item, activeLabel, setActiveLabel, dropdownContent }) {
  const isOpen = activeLabel === item.label;
  const submenu = dropdownContent[item.label];

  return (
    <div className="flex flex-col  text-gray-800">
      <div className="flex justify-between items-center text-xl py-4 px-2 hover:text-blue-900">
        <Link className="px-6" to={item.href}>{item.label.slice(0, -2).trim()}</Link>
        <button
          className="hover:text-blue-900 border-none px-6"
          onClick={() =>
            setActiveLabel(isOpen ? null : item.label)
          }
        >
            <span className={isOpen ? "transition-transform transform rotate-180 inline-block" : "transition-transform"}>
              <svg style={{width: '1.5em', height: '1.5em'}} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071L6.29289 9.70711C5.90237 9.31658 5.90237 8.68342 6.29289 8.29289C6.68342 7.90237 7.31658 7.90237 7.70711 8.29289L12 12.5858L16.2929 8.29289C16.6834 7.90237 17.3166 7.90237 17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711L12.7071 14.7071Z"/>
</svg>
            </span>
        </button>
      </div>

      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col bg-slate-600">
          {submenu?.map((sub, idx) => (
            <a
              key={idx}
              href={sub.href}
              className="text-l py-4 px-8 text-white hover:bg-blue-700"
            >
              {sub.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}