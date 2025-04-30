import { useNavigate } from "react-router-dom";


export default function Select() {
  const navigate = useNavigate();

  function handleChange(event) {
    const categoria = event.target.value;
    if (categoria) {
      navigate(`/${categoria}`);
    }
  }

  return (
    <div className="w-full max-w-xs ">
      <select
       className="block w-full borden-trasparent rounded-lg py-2.5 px-4 text-sm text-black- sm:text-lg transition-all duration-200  focus:outline-none focus:ring-2 hover:focus:ring-sky-500 hover:border-gray-400"
       onChange={handleChange}
      >
        <option value="">PRODOTTI</option>
        <option value="Audio"> AUDIO</option>
        <option value="Tv">TV</option>
        <option value="Mobile">MOBILE</option>
        <option value="Gaming">GAMING</option>
      </select>
    </div>
  );
}