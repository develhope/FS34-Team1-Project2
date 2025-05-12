import { useEffect, useState } from "react";
import Aside from "./Aside";
import Navbar from "./Navbar";

export default function MyOrders() {
  const [iMieiAcquisti, setImieiAcquisti] = useState(() => {
    const iMieiAcquistiLocal = localStorage.getItem("iMieiAcquisti");
    return iMieiAcquistiLocal ? JSON.parse(iMieiAcquistiLocal) : [];
  });

  useEffect(() => {
    localStorage.setItem("iMieiAcquisti", JSON.stringify(iMieiAcquisti));
  }, [iMieiAcquisti]);

  return (
    <>
      <Navbar />

      <div className="flex">

        <Aside />
        <main className="flex-1 ml-0 lg:ml-64 p-8 mt-20">
          <h3 className="font-bold text-lg mb-10">I miei Acquisti</h3>

          <ul className="space-y-6">
            {iMieiAcquisti?.map((acquisto) => (
              <li key={acquisto.id} className="space-y-3">
                <h4 className="font-semibold text-lg">Ordine {acquisto.id}</h4>

                <ul className="space-y-3">
                  {(acquisto || []).map((prodotto) => (
                    <li
                      key={prodotto.id}
                      className="flex items-center space-x-4 p-4 border rounded-lg shadow-sm bg-white"
                    >
                      <img
                        className="h-12 w-12 rounded-full object-cover"
                        src={prodotto.image}
                        alt={prodotto.title}
                      />

                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {prodotto.title}
                        </p>
                        <a
                          href={`http://localhost:5173/prodotti/${prodotto.id}`}
                          className="text-sm text-sky-600 hover:underline"
                        >
                          Vai al prodotto
                        </a>
                      </div>

                      <div className="text-base font-semibold text-gray-900">
                        {prodotto.price} €
                      </div>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </main>
      </div>
    </>
  );
}

