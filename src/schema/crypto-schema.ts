import { z } from "zod";

export const CryptoSchema = z.object({
  CoinInfo: z.object({
    Name: z.string(),
    FullName: z.string(),
  }),
});

export const CryptoListSchema = z.array(CryptoSchema);

export const CryptoInfoSchema = z.object({
  CHANGEPCTDAY: z.string(),
  CIRCULATINGSUPPLYMKTCAP: z.string(),
  IMAGEURL: z.string(),
  PRICE: z.string(),
  CHANGEPCTHOUR: z.string(),
  CHANGE24HOUR: z.string(),
});

// RECORDAR EL USO DE safeParse DESPUES DE LLAMAR A LA API
// const { data: weatherResult } = await axios(weatherUrl);
// IMPORTAR SCHEMA DIRECTAMENTE, ES DECIR, PRIMITIVO...
// const result = SCHEMA.safeParse(weatherResult); <-

// El schema inferido va en el Store [Al momento de tipar[
// export type MySchema = z.infer<typeof SCHEMA>;
