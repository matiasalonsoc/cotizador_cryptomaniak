import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { CallCryptoList, CallInfo } from "../services/CryptoServices";
import { Coins, CryptoInfo, CryptoList } from "../types";

type CryptoState = {
  cryptoList: CryptoList[];
  fetchCryptos: () => Promise<void>;
  fetchInfoCrypto: (coins: Coins) => Promise<void>;
  cryptoInfo: CryptoInfo;
  loading: boolean;
};

export const useCryptoStore = create<CryptoState>()(
  devtools((set) => ({
    cryptoList: [],
    cryptoInfo: {} as CryptoInfo,
    loading: false,

    fetchCryptos: async () => {
      const list = await CallCryptoList();
      set(() => ({ cryptoList: list }));
    },

    fetchInfoCrypto: async (coins) => {
      set(() => ({
        loading: true,
      }));
      const info = await CallInfo(coins);
      set(() => ({ cryptoInfo: info, loading: false }));
    },
  }))
);
