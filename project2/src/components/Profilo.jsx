import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import Navbar from "./Navbar";

export default function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  function Handlelogout() {
    logout();
    navigate("/");
  }
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="flow-root w-full max-w-200 bg-white p-8 rounded-2xl shadow-xl space-y-5 my-8">
          <div className="px-4 py-5 sm:px-6">
            <h3 className=" leading-6 font-medium text-black text-4xl">
              Il tuo profilo
            </h3>
          </div>
          <dl className="-my-3 divide-y divide-gray-200 rounded border border-gray-200 text-sm *:even:bg-gray-50">
            <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-900 text-xl">Nome</dt>

              <dd className="text-gray-700 sm:col-span-2 text-xl">
                {user.nome}
              </dd>
            </div>

            <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4 ">
              <dt className="font-medium text-gray-900 text-xl">Cognome</dt>

              <dd className="text-gray-700 sm:col-span-2 text-xl">
                {user.cognome}
              </dd>
            </div>

            <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-900 text-xl">Email</dt>

              <dd className="text-gray-700 sm:col-span-2 text-xl">
                {user.email}
              </dd>
            </div>

            <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-900 text-xl">Cellulare</dt>

              <dd className="text-gray-700 sm:col-span-2 text-xl">
                {user.cellulare}
              </dd>
            </div>

            <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-900 text-xl">Età</dt>

              <dd className="text-gray-700 sm:col-span-2 text-xl">
                {user.eta}
              </dd>
            </div>
          </dl>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            <button
              className="rounded-md bg-sky-300 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-blue-500 mt-6 ml-160"
              onClick={Handlelogout}
            >
              Logout
            </button>
          </p>
        </div>
      </div>
    </>
  );
}
