import { z } from "zod";
import { CryptoInfoSchema, CryptoSchema } from "../schema/crypto-schema";

export type Currency = {
  code: string;
  name: string;
};

export type CryptoList = z.infer<typeof CryptoSchema>;

export type Coins = {
  currency: string;
  crypto: string;
};

export type CryptoInfo = z.infer<typeof CryptoInfoSchema>;
