import { useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export default function Registrazione() {
  const { registrazione, error, validate, users } = useAuth();
  // const idMax = users.reduce((max, user) => (user.id > max ? user.id : max), 0);
  const [messaggioErrore, setMessaggioErrore] = useState(null)
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
      alert(validationError);
      return;
    }

    const result = await registrazione(user);

    if (!result.esito) {
      setMessaggioErrore(result.messaggio);
    } else {
      navigate("/login");
    }
  }
  return (
    <>
      <Navbar />

      <div className="h-screen bg-white flex justify-center items-center mt-50 mb-50">
        <div className="lg:w-2/5 md:w-1/2 w-2/3">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-10 rounded-lg shadow-lg min-w-full "
          >
            <h1 className="text-center text-2xl mb-6 text-gray-600 font-bold font-sans">
              Registrati
            </h1>
            <div>
              <label
                className="text-gray-800 font-semibold block my-3 text-md"
                htmlFor="nome"
              >
                Nome
              </label>
              <input
                className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                type="text"
                name="nome"
                id="nome"
                placeholder="nome"
                onChange={handleChange}
                value={user.nome}
              />
            </div>
            <div>
              <label
                className="text-gray-800 font-semibold block my-3 text-md"
                htmlFor="cognome"
              >
                Cognome
              </label>
              <input
                className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                type="text"
                name="cognome"
                id="cognome"
                placeholder="cognome"
                onChange={handleChange}
                value={user.cognome}
              />
            </div>
            <div>
              <label
                className="text-gray-800 font-semibold block my-3 text-md"
                htmlFor="email"
              >
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
              <label
                className="text-gray-800 font-semibold block my-3 text-md"
                htmlFor="cellulare"
              >
                Cellulare
              </label>
              <input
                className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                type="tel"
                name="cellulare"
                id="cellulare"
                placeholder="inserisci il tuo numero di telefono"
                onChange={handleChange}
                value={user.cellulare}
              />
            </div>
            <div>
              <label
                className="text-gray-800 font-semibold block my-3 text-md"
                htmlFor="eta"
              >
                Età
              </label>
              <input
                className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                type="number"
                name="eta"
                id="eta"
                placeholder="inserisci la tua età"
                onChange={handleChange}
                value={user.eta}
              />
            </div>
            <div>
              <label
                className="text-gray-800 font-semibold block my-3 text-md"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                type="password"
                name="password"
                id="password"
                placeholder="password"
                onChange={handleChange}
                value={user.password}
              />
            </div>
            <button
              type="submit"
              className="w-full mt-6 bg-sky-500 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans"
            >
              Registrati
            </button>
            <div className="mt-6 text-center text-sm text-gray-600">
              Sei già registrato?
              <Link
                to="/login"
                className="text-indigo-600 hover:text-indigo-500 font-medium"
              >
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
      {messaggioErrore && (
        <div
          id="popUp"
          className=" shadow-xl flex items-center justify-center z-50 bg-black bg-opacity-50"
        >
          <button
            onClick={(e) => setMessaggioErrore(null)}
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
            {messaggioErrore}
          </p>
          <div className="sezBtnAlert"></div>
        </div>
      )}
    </>
  );
}
