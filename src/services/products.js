import axios from "axios";

const baseUrl = "https://fakestoreapi.com";

export async function getProductsServices(payload) {
  const hasCategory = payload.category ? `/category/${payload.category}` : "";
  const url = `${baseUrl}/products${hasCategory}?limit=${payload.limit}&sort=${payload.sort}`;
  const res = await axios.get(url, {});
  return res;
}
