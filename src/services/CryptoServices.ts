import axios from "axios";
import { CryptoInfoSchema, CryptoListSchema } from "../schema/crypto-schema";
import { Coins } from "../types";

export const CallCryptoList = async () => {
  const url =
    "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=15&tsym=USD";

  const {
    data: { Data },
  } = await axios(url);

  const result = CryptoListSchema.safeParse(Data);

  if (result.success) {
    return result.data;
  }
};

export const CallInfo = async (coins: Coins) => {
  const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${coins.crypto}&tsyms=${coins.currency}`;

  const {
    data: { DISPLAY },
  } = await axios(url);

  const result = CryptoInfoSchema.safeParse(
    DISPLAY[coins.crypto][coins.currency]
  );

  if (result.success) {
    return result.data;
  }
};
