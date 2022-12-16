<template>
  <div
    v-if="!isLoading"
    class="grid lg:grid-cols-2 gap-x-12 gap-y-24 pad-container py-10"
  >
    <single-product
      v-for="(product, index) in productStore.allProducts"
      :key="index"
      :productDetails="product"
    />
  </div>
  <loading-spinner v-else />
</template>

<script setup>
import { products } from "@/store/products.js";
import SingleProduct from "@/components/app/product/SingleProduct.vue";
import LoadingSpinner from "@/components/app/ui/LoadingSpinner.vue";

import { onMounted, reactive, ref } from "vue";
import Swal from "sweetalert2";
// store
const productStore = products();
const payload = reactive({
  limit: 4,
  sort: "desc",
  category: "electronics",
});
const isLoading = ref(false);

// methods
const getProducts = async () => {
  isLoading.value = true;
  await productStore
    .getProducts(payload)
    .then(() => {})
    .catch((err) => {
      Swal.fire({
        confirmButtonColor: "#CD8004",
        text: err.message,
        icon: "error",
        allowOutsideClick: true,
        background: "#121212",
        iconColor: "rgba(145, 12, 12, .99)",
      });
    });
  isLoading.value = false;
};

// lifecycle hooks
onMounted(async () => {
  await getProducts();
  console.log(document.documentElement.clientWidth);
});
</script>

<style></style>
