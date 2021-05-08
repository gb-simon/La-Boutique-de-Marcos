import { env } from "node:process";

export const environment = {
  production: true,
  client_id: env.UNSPLASH_CLIENT_ID,
};