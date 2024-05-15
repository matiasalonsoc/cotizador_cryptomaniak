import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { CryptoCurrentInfo } from "./components/CryptoCurrentInfo";
import { FormCrypto } from "./components/FormCrypto";
import { useCryptoStore } from "./store/store";

function App() {
  const { fetchCryptos } = useCryptoStore();

  useEffect(() => {
    fetchCryptos();
  }, []);

  return (
    <main className=' h-screen'>
      <section className=' mx-auto '>
        <h1 className='text-4xl text-center font-bold text-white pt-20 pb-10'>
          Cotizador
          <span className=' text-green-400 text-5xl'> CryptoManiak</span>
        </h1>

        <div className='bg-white max-w-[600px] mx-auto pt-10 rounded-xl p-10 space-y-5'>
          <FormCrypto />
          <CryptoCurrentInfo />
        </div>
      </section>
      <ToastContainer />
    </main>
  );
}

export default App;
