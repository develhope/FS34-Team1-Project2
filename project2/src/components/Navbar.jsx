import cart from "../assets/cartmarket.svg";
import { Link } from "react-router-dom";
import userImage from "../assets/utente.svg";
import { useAuth } from "../context/authContext";
import logo from "../assets/logo-transparent.png";
import Select from "./Select";
export default function Navbar() {
  const { user } = useAuth();
  return (
    <header className="h-24 sm:h-28 flex items-center z-30 w-full bg-white shadow ">
      <div className="w-full max-w-screen-lg mx-auto px-6 flex items-center justify-between">
        <div className="uppercase text-gray-800 dark:text-black font-black text-2xl sm:text-3xl">
          <img
            src={logo}
            alt="Logo"
            className="h-20 sm:h-38 w-auto  object-contain"
          />
        </div>

        <div className="flex items-center">
          <nav className="font-sen text-gray-800 dark:text-black uppercase text-base sm:text-lg lg:flex items-center hidden gap-4">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <div className="dropdown"></div>
            <Select></Select>
            {!user && (
              <Link to="/registrazione" className="py-2 px-4 hover:underline">
                Registrati
              </Link>
            )}

            {user ? (
              <Link to="/profilo" className="py-2 px-4 hover:underline">
                <img
                  src={userImage}
                  alt="Profilo"
                  className="h-8 w-8 rounded-full object-cover"
                />
              </Link>
            ) : (
              <Link to="/login" className="py-2 px-4 hover:underline">
                Accedi
              </Link>
            )}

            <Link to={"/carrello"} className="py-2 px-4 ">
              <img
                src={cart}
                alt="Carrello"
                className="h-6 w-6 object-contain"
              />
            </Link>
          </nav>

          <button className="lg:hidden flex flex-col ml-4">
            <span className="w-6 h-1 bg-gray-800 mb-1"></span>
            <span className="w-6 h-1 bg-gray-800 mb-1"></span>
            <span className="w-6 h-1 bg-gray-800 mb-1"></span>
          </button>
        </div>
      </div>
    </header>
  );
}
