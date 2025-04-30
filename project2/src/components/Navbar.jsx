import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";
import logo from "../assets/logo-transparent.png";
import Select from "./Select";
import { HiShoppingCart } from "react-icons/hi2";
import { CiUser } from "react-icons/ci";
import HamMenu from "./HamMenu";

export default function Navbar() {
  const { user } = useAuth();
  
  return (
    <>
    <header className="flex h-24 sm:h-28 items-center z-30 w-full bg-white shadow">
      <div className="flex w-full max-w-screen-lg mx-auto px-6 items-center justify-between">
        <div className="uppercase text-gray-800 dark:text-black font-black text-2xl sm:text-3xl">
          <img
            src={logo}
            alt="Logo"
            className="h-20 sm:h-38 w-auto  object-contain"
          />
        </div>
        <i className="fa-solid fa-cart-shopping"></i>
        <div className="flex items-center">
          <nav className="hidden lg:flex font-sen text-gray-800 dark:text-black uppercase text-base sm:text-lg items-center gap-4">
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
                <CiUser size={30} />
              </Link>
            ) : (
              <Link to="/login" className="py-2 px-4 hover:underline">
                Accedi
              </Link>
            )}

            <Link to={"/carrello"} className="py-2 px-5">
            <HiShoppingCart size={30}/>
            </Link>
          </nav>
        </div>
      </div>
    </header>
      {<HamMenu ></HamMenu>}
    </>
  );
}
