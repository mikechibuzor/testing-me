<template>
  <header
    :class="compFixedHeader"
    class="flex items-center justify-between w-full pad-container py-5 bg-transparent"
  >
    <the-logo />
    <nav-bar />
    <the-cart />
  </header>
</template>

<script setup>
import TheLogo from "@/components/base/header/TheLogo.vue";
import TheCart from "@/components/base/header/TheCart.vue";
import NavBar from "@/components/base/header/NavBar.vue";

import { onMounted, ref, computed } from "vue";

// global properties
const fixedHeader = ref(false);

// computed properties
const compFixedHeader = computed(() => {
  return { fixed: fixedHeader.value };
});
// methods
const scrollHandler = () => {
  const docScrollTop = document.documentElement.scrollTop;
  if (docScrollTop > 1) {
    fixedHeader.value = true;
  } else {
    fixedHeader.value = false;
  }
};

// lifecycle hooks
onMounted(() => window.addEventListener("scroll", scrollHandler));
</script>

<style scoped>
header.fixed {
  z-index: 131;
  position: fixed;
  box-shadow: 0px 0px 28px 14px rgba(175, 175, 175, 0.13);
  animation: fixHeader 0.5s ease;
  background: rgba(0, 0, 0, 0.9);
  transition: transform;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}
@keyframes fixHeader {
  0% {
    opacity: 0;
    transform: translateY(5%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}
</style>
