// import { useNavigate } from "react-router-dom";


// export default function Select() {
//   const navigate = useNavigate();

//   function handleChange(event) {
//     const categoria = event.target.value;
//     if (categoria) {
//       navigate(`/${categoria}`);
//     }
//   }

//   return (
//     <div className="w-full max-w-xs ">
//       <select
//        className="block w-full borden-trasparent rounded-lg py-2.5 px-4 text-sm text-black- sm:text-lg transition-all duration-200  focus:outline-none focus:ring-2 hover:focus:ring-sky-500 hover:border-gray-400"
//        onChange={handleChange}
//       >
//         <option value="">PRODOTTI</option>
//         <option value="Prodotti">TUTTI I PRODOTTI</option>
//         <option value="Audio"> AUDIO</option>
//         <option value="Tv">TV</option>
//         <option value="Mobile">MOBILE</option>
//         <option value="Gaming">GAMING</option>
//       </select>
//     </div>
//   );
// }
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GiAudioCassette } from "react-icons/gi";


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
