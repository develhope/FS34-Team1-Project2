import { Link } from "react-router-dom";

export default function AccountEliminato() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md text-center">
        <h1 className="text-2xl font-bold text-red-600 mb-4">
          Account eliminato
        </h1>
        <p className="text-gray-700 mb-6">
          Il tuo account è stato eliminato con successo. Ci dispiace vederti andare via!
        </p>
        <Link to="/" className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          Torna alla home
        </Link>
      </div>
    </div>
  );
}
