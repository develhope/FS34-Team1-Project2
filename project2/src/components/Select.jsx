import { useState } from "react";
import { useNavigate } from "react-router-dom";

const options = [
  { label: "PRODOTTI", value: "Prodotti" },
  { label: "AUDIO", value: "Audio" },
  { label: "TV", value: "Tv" },
  { label: "MOBILE", value: "Mobile" },
  { label: "GAMING", value: "Gaming" },
];

export default function CustomSelect() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("PRODOTTI");
  const navigate = useNavigate();

  function handleSelect(option) {
    setSelected(option.label);
    setOpen(false);
    navigate(`/${option.value}`);
  }

  return (
    <div className="relative w-full max-w-xs hidden sm:block">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full bg-white border border-gray-300 text-gray-800 text-sm sm:text-base px-4 py-2.5 rounded-lg flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-sky-500"
      >
        {selected}
        <svg
          className={`w-4 h-4 transform transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <ul className="absolute z-10 mt-2 w-[18rem] bg-white border border-gray-300 rounded-lg shadow-md">
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => handleSelect(option)}
              className="px-6 py-3 hover:bg-sky-100 cursor-pointer text-sm sm:text-base"
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
