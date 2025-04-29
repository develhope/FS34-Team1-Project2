import { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import Navbar from "./Navbar";

export default function Carrello() {
  const [prodotti, setProdotti] = useState([]);
  const { user } = useAuth();
  const [messaggio, setMessaggio] = useState(null)

  useEffect(() => {
    const savedProdotti = JSON.parse(localStorage.getItem("prodotti") || "[]");
    const prodottiConQuantita = savedProdotti
      .map((p) => ({
        ...p,
        quantity: p.quantity || 1,
      }))
      .reduce((acc, curr) => {
        const esistente = acc.find((p) => p.id === curr.id);
        if (esistente) {
          esistente.quantity += curr.quantity || 1;
        } else {
          acc.push({ ...curr, quantity: curr.quantity || 1 });
        }
        return acc;
      }, []);

    setProdotti(prodottiConQuantita);
  }, []);

  function handleQuantityChange(id, newQuantity) {
    const updatedProdotti = prodotti.map((p) =>
      p.id === id ? { ...p, quantity: parseInt(newQuantity) } : p
    );
    setProdotti(updatedProdotti);
    localStorage.setItem("prodotti", JSON.stringify(updatedProdotti));
  }

  function handleRemove(id) {
    const updatedProdotti = prodotti.filter((p) => p.id !== id);
    setProdotti(updatedProdotti);
    localStorage.setItem("prodotti", JSON.stringify(updatedProdotti));
  }

  const subtotal = prodotti.reduce((acc, p) => acc + p.price * p.quantity, 0);
  const vat = subtotal * 0.22; // IVA al 22%
  const discount = subtotal * 0.1;
  const total = subtotal + vat - discount;
  const navigate = useNavigate();

  const checkOut = () => {
    if(user){
       navigate('checkout');
    } else{
      setMessaggio(`Per procedere con l'acquisto devi effettuare il Login!`)
    }
   
  };


  return (
    <>
      <Navbar />
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <header className="text-center">
              <h1 className="text-xl font-bold text-black sm:text-3xl">
                Benvenuto nel tuo carrello!
              </h1>
            </header>

            <div className="mt-8">
              <div className="space-y-4">
                {prodotti.map((prodotto) => (
                  <div key={prodotto.id} className="flex items-center gap-4">
                    <img
                      className="size-16 rounded-sm object-cover"
                      src={prodotto.image}
                      alt={prodotto.title}
                    />
                    <h3 className="text-sm text-gray-900">{prodotto.title}</h3>

                    <div className="flex flex-1 items-center justify-end gap-2">
                      <input
                        onChange={(e) =>
                          handleQuantityChange(prodotto.id, e.target.value)
                        }
                        type="number"
                        min="1"
                        value={prodotto.quantity}
                        className="h-8 w-12 rounded-sm border-gray-200 bg-gray-50 text-center text-xs text-gray-600"
                      />

                      <button
                        onClick={() => handleRemove(prodotto.id)}
                        className="text-gray-600 transition hover:text-red-600"
                      >
                        <span className="sr-only">Remove item</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21a48.108 48.108 0 00-3.478-.397M4.772 5.79a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
                <div className="w-screen max-w-lg space-y-4">
                  <dl className="space-y-0.5 text-sm text-gray-700">
                    <div className="flex flex-col justify-between">
                      {prodotti.map((prodotto) => (
                        <div key={prodotti.length} className="flex flex-row justify-between">
                          <dt>prod.</dt>
                          <dd>
                            {prodotto.quantity === 1
                              ? prodotto.price
                              : prodotto.price * prodotto.quantity}
                          </dd>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between">
                      <dt>Subtotal</dt>
                      <dd>${subtotal.toFixed(2)}</dd>
                    </div>

                    <div className="flex justify-between">
                      <dt>VAT (22%)</dt>
                      <dd>${vat.toFixed(2)}</dd>
                    </div>

                    <div className="flex justify-between">
                      <dt>Discount(-10%)</dt>
                      <dd>-${discount.toFixed(2)}</dd>
                    </div>

                    <div className="flex justify-between !text-base font-medium">
                      <dt>Total</dt>
                      <dd>${total.toFixed(2)}</dd>
                    </div>
                  </dl>
                  <div className="flex justify-end">
                    <span className="inline-flex items-center justify-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-indigo-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="-ms-1 me-1.5 size-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                        />
                      </svg>
                      <p className="text-xs whitespace-nowrap">
                        2 Discounts Applied
                      </p>
                    </span>
                  </div>
                  <div className="flex justify-end">
                  <button onClick={checkOut} className="rounded-md bg-sky-300 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-blue-500">
                    Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
                <Outlet />
                {messaggio && <div id="popUp" className="rounded-md border border-gray-300 bg-white p-4">
                <p className="font-medium text-black">{messaggio}</p>
                <div className="sezBtnAlert">
                <button onClick={(e)=> navigate('/login')}
                className="rounded border border-gray-300 px-5 py-1.5 text-sm font-medium text-gray-900 shadow-sm transition-colors bg-sky-300 hover:bg-blue-500"
                >LOGIN</button> 
                <button onClick={(e) => setMessaggio(null)}
                className="rounded  px-3 py-1.5 text-sm font-medium text-gray-900 shadow-sm transition-colors hover:bg-gray-100"
                >Chiudi</button> 
                </div>
        </div>}
          </div>
        </div>
      </section>
    </>
  );
}
