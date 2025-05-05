import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoTvOutline } from "react-icons/io5";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { SlGameController } from "react-icons/sl";
import { TbFridge } from "react-icons/tb";
import { IoIosLaptop } from "react-icons/io";
import { AiOutlineProduct } from "react-icons/ai";
import { FaHeadphonesSimple } from "react-icons/fa6";




const options = [
  { label: "PRODOTTI", value: "Prodotti", svg: <AiOutlineProduct /> },
  { label: "AUDIO", value: "Audio", svg: <FaHeadphonesSimple />  },
  { label: "TV", value: "Tv", svg: <IoTvOutline /> },
  { label: "MOBILE", value: "Mobile", svg: <IoPhonePortraitOutline />},
  { label: "GAMING", value: "Gaming", svg: <SlGameController />},
  { label: "ELETTRODOMESTICI", value: "Elettrodomestici", svg:<TbFridge />},
  { label: "LAPTOP", value: "Laptop", svg: <IoIosLaptop />  },
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
              {option.svg}
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
