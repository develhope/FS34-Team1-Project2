import { FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const OrdineSuccesso = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-50 px-4">
      <FaCheckCircle className="text-green-600 w-16 h-16 mb-4" />
      <h1 className="text-3xl font-bold text-green-700 mb-2">Ordine completato con successo!</h1>
      <p className="text-gray-700 text-center mb-6">
        Grazie per il tuo acquisto. Ti abbiamo inviato una conferma via email. Il tuo ordine è in fase di elaborazione.
      </p>
      <Link
        to="/"
        className="px-6 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition"
      >
        Torna alla home
      </Link>
    </div>
  );
};

export default OrdineSuccesso;
