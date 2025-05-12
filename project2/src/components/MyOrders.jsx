import { useEffect, useState } from "react";
import Aside from "./Aside";

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
     <div className="flex">
    <Aside></Aside>
    <ul className="py-3 sm:py-4 mt-20">
      <h3 className="font-bold text-lg mb-10">I miei Acquisti</h3>
      {iMieiAcquisti &&
        iMieiAcquisti.map((acquisto) => (
          <li key={acquisto.id} className="py-3 sm:py-4">
            <h4 className="font-semibold text-lg">Ordine {acquisto.id}</h4>
            <ul className="py-3 sm:py-4">
              {(acquisto || []).map((prodotto) => (
                <li
                  key={prodotto.id}
                  className="py-3 sm:py-4 flex items-center space-x-4"
                >
                  <div className="flex-shrink-0">
                    <img
                      className="h-8 w-8 rounded-full"
                      src={prodotto.image}
                      alt={prodotto.title}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {prodotto.title}
                    </p>
                    <p className="text-sm text-gray-500 truncate">
                      <a
                        href={`http://localhost:5173/prodotti/${prodotto.id}`}
                        className="__cf_email__"
                      >
                        Vai al prodotto
                      </a>
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900">
                    {prodotto.price} €
                  </div>
                </li>
              ))}
            </ul>
          </li>
        ))}
    </ul>
    </div>
     </>
  );
}
