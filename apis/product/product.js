import { get } from "..";

export const getProducts = async ({ token }) => {
  return get(`/product?limit=100&offset=0&accessToken=${token}`);
};
