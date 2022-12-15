import { defineStore } from "pinia";
import { getProductsServices } from "@/services/products";
export const products = defineStore("products", {
  state: () => ({
    products: [],
  }),
  getters: {
    allProducts: (state) => state.products,
  },
  actions: {
    getProducts(payload) {
      return getProductsServices(payload).then(
        (res) => (this.products = res.data)
      );
    },
  },
});
