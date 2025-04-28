import cart from "../assets/cartmarket.svg";
import { Link } from "react-router-dom";
import userImage from "../assets/utente.svg";
import { useAuth } from "../context/authContext";
import logo from "../assets/logo-transparent.png";
export default function Navbar() {
  const { user } = useAuth();
  return (
    <header className="h-24 sm:h-32 flex items-center z-30 w-full">
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="uppercase text-gray-800 dark:text-black font-black text-3xl">
          <img src={logo} className="cele"></img>
        </div>
        <div className="flex items-center">
          <nav className="font-sen text-gray-800 dark:text-black uppercase text-lg lg:flex items-center hidden">
            <Link to="/">Home</Link>
            <a href="#" className="py-2 px-6 flex">
              Prodotti
            </a>
            {user ? null : (
              <Link to="/registrazione" className="py-2 px-6 flex">
                Registrati
              </Link>
            )}
            {user ? (
              <Link to="/profilo">
                <img src={userImage} className="userimage"></img>
              </Link>
            ) : (
              <Link to="/login" className="py-2 px-6 flex">
                Accedi
              </Link>
            )}
            {user ? (
              <Link to="/carrello" className="py-2 px-6 flex w-25">
                <img src={cart} />
              </Link>
            ) : (
              <Link to="/login" className="py-2 px-6 flex w-25">
                <img src={cart} />
              </Link>
            )}
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
