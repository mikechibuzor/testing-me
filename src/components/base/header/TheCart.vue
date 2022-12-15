<template>
  <section
    class="cursor-pointer transition-all duration-500 ease-out hover:translate-y-1"
  >
    <span
      class="text-white text-xs font-semibold px-1.5 py-0.5 rounded-full bg-primary-1"
      >{{ productCount }}</span
    >
    <cart-icon />
  </section>
</template>

<script setup>
import CartIcon from "@/assets/icons/CartIcon.vue";
import { cart } from "@/store/cart.js";
import { computed } from "vue";

const cartStore = cart();

// computed properties
const productCount = computed(() => cartStore.itemsCount);
</script>

<style></style>
