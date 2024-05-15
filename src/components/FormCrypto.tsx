import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { currencies } from "../data";
import { useCryptoStore } from "../store/store";

export const FormCrypto = () => {
  const { cryptoList, fetchInfoCrypto } = useCryptoStore();
  const [coins, setCoins] = useState({
    currency: "",
    crypto: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCoins({
      ...coins,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(coins);
    if (coins.crypto === "" || coins.currency === "") {
      toast.error("Debes seleccionar ambos campos", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }
    fetchInfoCrypto(coins);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=' bg-white max-w-[600px] mx-auto pt-10 rounded-xl p-10 space-y-5'
    >
      <div className='flex flex-col gap-3'>
        <label className='text-xl' htmlFor='currency'>
          Moneda:
        </label>
        <select
          onChange={handleChange}
          className=' bg-gray-200 rounded-xl px-2 py-2 text-lg'
          name='currency'
          id='currency'
        >
          <option value=''>--Seleccione--</option>
          {currencies.map((currency) => (
            <option
              key={currency.code}
              value={currency.code}
              id={currency.code}
            >
              {currency.name}
            </option>
          ))}
        </select>
      </div>
      <div className='flex flex-col gap-3'>
        <label className='text-xl' htmlFor='crypto'>
          Crypto:
        </label>
        <select
          onChange={handleChange}
          className='bg-gray-200 rounded-xl px-2 py-2 text-lg mb-4'
          name='crypto'
          id='crypto'
        >
          <option value=''>--Seleccione--</option>
          {cryptoList.map((crypto) => (
            <option key={crypto.CoinInfo.Name} value={crypto.CoinInfo.Name}>
              {crypto.CoinInfo.FullName}
            </option>
          ))}
        </select>
      </div>
      <button className=' hover:bg-emerald-400 transition-colors uppercase bg-emerald-300 w-full font-medium py-2 rounded'>
        Cotizar
      </button>
    </form>
  );
};
