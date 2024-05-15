import { useMemo } from "react";
import { useCryptoStore } from "../store/store";
import { Spinner } from "./Spinner";

export const CryptoCurrentInfo = () => {
  const { cryptoInfo, loading } = useCryptoStore();

  const hasResult = useMemo(
    () => Object.keys(cryptoInfo).length > 0,
    [cryptoInfo]
  );

  return (
    <section className='bg-white max-w-[600px] mx-auto pt-10 rounded-xl p-10 space-y-5'>
      {loading ? (
        <Spinner />
      ) : (
        hasResult && (
          <div>
            <h2 className='text-3xl font-bold text-center mb-3'>Cotización</h2>
            <div className='flex gap-3'>
              <img
                className='w-1/3'
                src={`https://cryptocompare.com/${cryptoInfo.IMAGEURL}`}
                alt='Imagen crpyto'
              />
              <div className='w-2/3 space-y-2'>
                <p className=''>
                  Precio:{" "}
                  <span className=' font-semibold'>{cryptoInfo.PRICE}</span>{" "}
                </p>
                <p className=''>
                  24hrs %:{" "}
                  <span
                    className={` ml-1 rounded px-2 py-1 font-semibold ${
                      Number(cryptoInfo.CHANGEPCTDAY) > 0
                        ? " bg-green-400"
                        : " bg-red-500"
                    }`}
                  >
                    {cryptoInfo.CHANGEPCTDAY}%
                  </span>
                </p>
                <p className=''>
                  1h %:{" "}
                  <span
                    className={` ml-1 rounded px-2 py-1 font-semibold ${
                      Number(cryptoInfo.CHANGEPCTDAY) > 0
                        ? " bg-green-400"
                        : " bg-red-500"
                    }`}
                  >
                    {cryptoInfo.CHANGEPCTHOUR}%
                  </span>
                </p>

                <p className=''>
                  MarketCap:{" "}
                  <span className=' font-semibold'>
                    {cryptoInfo.CIRCULATINGSUPPLYMKTCAP}
                  </span>
                </p>
                <p className=''>
                  Cambio precio 24hrs:{" "}
                  <span className=' font-semibold'>
                    {cryptoInfo.CHANGE24HOUR}
                  </span>
                </p>
              </div>
            </div>
          </div>
        )
      )}
    </section>
  );
};
