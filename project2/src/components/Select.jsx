import { useNavigate } from "react-router-dom";

export default function Select() {
  const navigate = useNavigate();

  function handleChange(event) {
    const categoria = event.target.value;
    if (categoria) {
      navigate(`/${categoria.toLowerCase()}`);
    }
  }

  return (
    <div className="w-full max-w-xs ">
      <select
       className="block w-full rounded-lg border border-gray-300 bg-white py-2.5 px-4 text-sm text-black- shadow-sm transition-all duration-200  focus:outline-none focus:ring-2 hover:focus:ring-blue-200 hover:border-gray-400"
        // className="mt-1.5 w-full rounded-lg border-gray-300 text-black sm:text-sm"
        onChange={handleChange}
        defaultValue=""
      >
        <option value="">PRODOTTI</option>
        <option value="Audio">AUDIO</option>
        <option value="Tv">TV</option>
        <option value="Mobile">MOBILE</option>
        <option value="Gaming">GAMING</option>
      </select>
    </div>
  );
}