<template>
  <div
    class="rounded-xl shadow grid lg:grid-cols-2 gap-x-5 gap-y-10 product-box transition-all duration-300 ease-in-out p-5"
  >
    <!-- first half product image -->
    <img
      :src="props.productDetails.image"
      :alt="props.productDetails.description"
      class="h-full w-full object-cover"
    />
    <!-- second half product details -->
    <div class="flex flex-col">
      <h3 class="text-secondary uppercase mb-10">
        {{ props.productDetails.title }}
      </h3>
      <p class="text-gray-300 font-light mb-10">
        {{ props.productDetails.description }}
      </p>
      <p class="text-gray-300 mb-5 tracking-widest font-bold">
        ${{ props.productDetails.price }}
      </p>
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-x-2">
          <button
            class="rounded-sm shadow px-4 py-1.5 border-none outline-none bg-gray-100 text-gray-800 text-sm"
            @click="addProductToCart(props.productDetails)"
          >
            Add
          </button>
          <button
            class="rounded-sm shadow px-5 py-1.5 border-none outline-none bg-gray-100 text-gray-800 text-sm"
            @click="removeProductFromCart(props.productDetails.id)"
          >
            Remove
          </button>
        </div>
        <p class="text-blue-500 text-xs underline capitalize tracking-widest">
          {{ props.productDetails.category }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { cart } from "@/store/cart.js";
import { computed } from "vue";
import Swal from "sweetalert2";

const props = defineProps({
  productDetails: {
    type: Object,
    default: () => {},
  },
});

// variables
const cartStore = cart();

// computed
const cartItems = computed(() => cartStore.cartItems);

// methods
const addProductToCart = (product) => {
  const productInCart = cartItems.value.find((item) => item.id === product.id);
  if (productInCart) {
    Swal.fire({
      confirmButtonColor: "#CD8004",
      text: "Product already exists inside the cart",
      icon: "warning",
      allowOutsideClick: true,
      background: "#121212",
      iconColor: "rgba(145, 12, 12, .99)",
    });
    return;
  }
  cartStore.addItemToCart(product);
  Swal.fire({
    icon: "success",
    toast: true,
    position: "top-start",
    timer: "1000",
    text: "Product added to cart",
    timerProgressBar: true,
    showConfirmButton: false,
  });
};
const removeProductFromCart = (id) => {
  const product = cartItems.value.find((product) => product.id === id);
  if (!product) return;
  cartStore.removeItemFromCart(id);
  Swal.fire({
    icon: "success",
    toast: true,
    position: "top-start",
    timer: "1000",
    text: "Product removed from cart",
    timerProgressBar: true,
    showConfirmButton: false,
  });
};
</script>

<style scoped>
.product-box:hover {
  box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px,
    rgba(223, 124, 18, 0.05) 0px 5px 10px;
}
</style>
