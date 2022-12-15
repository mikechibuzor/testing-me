import { defineStore } from "pinia";
export const cart = defineStore("cart", {
  state: () => ({
    cart: [],
  }),
  getters: {
    cartItems: (state) => state.cart,
    itemsCount: (state) => state.cart.length,
  },
  actions: {
    addItemToCart(payload) {
      this.cart = [...this.cart, payload];
    },
    removeItemFromCart(id) {
      this.cart = this.cart.filter((item) => item.id !== id);
    },
  },
});
