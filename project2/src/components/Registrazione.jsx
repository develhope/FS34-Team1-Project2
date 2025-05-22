import { useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export default function Registrazione() {
  const { registrazione, error, validate } = useAuth();
  const [messaggio, setMessaggio] = useState(null)
  
  const navigate = useNavigate();

  const [user, setUser] = useState({
    id: Date.now(),
    nome: "",
    cognome: "",
    email: "",
    password: "",
    eta: "",
    cellulare: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]:
        name === "eta" || name === "cellulare" ? parseInt(value) || "" : value,
    });
  }
  async function handleSubmit(event) {
    event.preventDefault();
    const validationError = await validate(user);
    if (validationError) {
      setMessaggioErrore(error);
      return;
    }

    const result = await registrazione(user);

    if (!result.esito) {
      setMessaggio(result.messaggio);
    } else {
      setMessaggio("Registrazione avvenuta con successo");
      setTimeout(() => {
      navigate("/login");
      }, 2000);
    }
  }
  return (
    <>
     <Navbar />
    <div className="min-h-screen bg-white flex justify-center items-center px-4">
    <div className="w-full max-w-5xl">
    <form
      onSubmit={handleSubmit}
      className="bg-white p-10 rounded-lg shadow-lg grid grid-cols-1 gap-6 lg:grid-cols-2"
    >
      <h1 className="text-center text-2xl mb-6 text-gray-600 font-bold font-sans col-span-1 lg:col-span-2">
        Registrati
      </h1>

      <div>
        <label htmlFor="nome" className="text-gray-800 font-semibold block mb-2">
          Nome
        </label>
        <input
          className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
          type="text"
          name="nome"
          id="nome"
          placeholder="Nome"
          onChange={handleChange}
          value={user.nome}
        />
      </div>

      <div>
        <label htmlFor="cognome" className="text-gray-800 font-semibold block mb-2">
          Cognome
        </label>
        <input
          className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
          type="text"
          name="cognome"
          id="cognome"
          placeholder="Cognome"
          onChange={handleChange}
          value={user.cognome}
        />
      </div>

      <div>
        <label htmlFor="email" className="text-gray-800 font-semibold block mb-2">
          Email
        </label>
        <input
          className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
          type="email"
          name="email"
          id="email"
          placeholder="@email"
          onChange={handleChange}
          value={user.email}
        />
      </div>

      <div>
        <label htmlFor="cellulare" className="text-gray-800 font-semibold block mb-2">
          Cellulare
        </label>
        <input
          className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
          type="tel"
          name="cellulare"
          id="cellulare"
          placeholder="Cellulare"
          onChange={handleChange}
          value={user.cellulare}
        />
      </div>

      <div>
        <label htmlFor="eta" className="text-gray-800 font-semibold block mb-2">
          Età
        </label>
        <input
          className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
          type="number"
          name="eta"
          id="eta"
          placeholder="Età"
          onChange={handleChange}
          value={user.eta}
        />
      </div>

      <div>
        <label htmlFor="password" className="text-gray-800 font-semibold block mb-2">
          Password
        </label>
        <input
          className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          onChange={handleChange}
          value={user.password}
        />
      </div>

      <button
        type="submit"
        className="col-span-1 lg:col-span-2 w-full mt-4 bg-sky-500 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold"
      >
        Registrati
      </button>

      <div className="col-span-1 lg:col-span-2 text-center text-sm text-gray-600 mt-2">
        Sei già registrato?
        <Link to="/login" className="text-indigo-600 hover:text-indigo-500 font-medium ml-1">
          Login
        </Link>
       </div>
      </form>
    </div>
   </div>



       
      
      {messaggio && (
        <div
          id="popUp"
          className=" shadow-xl flex items-center justify-center z-50 bg-black bg-opacity-50"
        >
          <button
            onClick={(e) => setMessaggio(null)}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <p className=" py-5 px-10 font-medium text-black text-lg">
            {messaggio}
          </p>
          <div className="sezBtnAlert"></div>
        </div>
      )}

    </>
  );
}
