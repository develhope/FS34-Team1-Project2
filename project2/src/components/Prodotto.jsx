import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useSWR from "swr";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Prodotto(){
  const [messaggio, setMessaggio] = useState(null);
  const [prodotti, setProdotti] = useState(() => {
    const prodottiLocal = localStorage.getItem("prodotti");
    return prodottiLocal ? JSON.parse(prodottiLocal) : [];
  });

  useEffect(() => {
    localStorage.setItem("prodotti", JSON.stringify(prodotti));
  }, [prodotti]);

    const { id } = useParams();
    const { error, data, isLoading } = useSWR(`https://fakestoreapi.in/api/products/${id}`)
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Errore nel caricamento dei dati</p>;
    const prodotto = data.product;
    console.log(prodotto)
    function handleAggiungiProdotto(prodotto) {
      setProdotti((prev) => [...prev, prodotto]);
      setMessaggio(`Aggiunto al carrello: ${prodotto.title}`);
      setTimeout(() => {
        setMessaggio(null);
      }, 2000);
    }
      return (
<>
<Navbar></Navbar>
<section className="bg-white py-12 px-4" id="product-overview">
  <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
   
    <div className="w-full">
      <div className="bg-gray-100 p-6 rounded-lg shadow">
        <img
          src={prodotto.image}
          alt={prodotto.title}
          className="w-full object-contain rounded-lg max-h-[500px]"
          />
      </div>
    </div>

  
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-slate-800">{prodotto.title}</h1>

      <p className="text-gray-600 text-lg">{prodotto.description}</p>

      <h3 className="text-2xl font-semibold text-green-600">{prodotto.price}$</h3>

      <button
        className="mt-4 w-full md:w-auto px-6 py-3 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition-all"
        onClick={(e) => {
          e.preventDefault();
          handleAggiungiProdotto(prodotto);
        }}
      
      >
        Aggiungi al carrello
      </button>
    </div>
  </div>
  {messaggio && (
        <div
          id="popUp"
          className="rounded-md border border-gray-300 bg-white p-4"
        >
          <p className="font-medium text-sky-500">{messaggio}</p>
          <button
            onClick={(e) => setMessaggio(null)}
            className="rounded border border-gray-300 px-3 py-1.5 text-sm font-medium text-gray-900 shadow-sm transition-colors hover:bg-gray-100"
          >
            Chiudi
          </button>
        </div>
      )}
</section> 
<Footer/>
 </>        
); }
