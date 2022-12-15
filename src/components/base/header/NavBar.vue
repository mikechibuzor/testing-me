<template>
  <section>
    <!-- for large screens and desktops -->
    <ul class="hidden lg:flex items-center gap-x-12 text-gray-400">
      <li>
        <router-link to="/" class="tracking-widest">All</router-link>
      </li>
      <li>
        <router-link to="/jewelry" class="tracking-widest">Jewelry</router-link>
      </li>
      <li>
        <router-link to="/electronics" class="tracking-widest"
          >electronics</router-link
        >
      </li>
    </ul>
    <!-- hamurger box -->
    <div @click="toggleShowMenu" class="lg:hidden">
      <hamburger-icon :status="showMenu" />
    </div>
    <!-- for small screens and mobile devices -->
    <ul
      v-if="showMenu"
      class="flex flex-col bg-white px-4 py-2 rounded shadow-sm absolute left-0 top-16"
    >
      <li>
        <router-link to="/" class="tracking-widest text-xs">All</router-link>
      </li>
      <li class="my-1">
        <router-link to="/jewelry" class="tracking-widest text-xs"
          >Jewelry</router-link
        >
      </li>
      <li>
        <router-link to="/electronics" class="tracking-widest text-xs"
          >electronics</router-link
        >
      </li>
    </ul>
  </section>
</template>

<script setup>
import HamburgerIcon from "@/assets/icons/HamburgerIcon.vue";

import { ref } from "vue";

// global properties
const showMenu = ref(false);

// methods
const toggleShowMenu = () => (showMenu.value = !showMenu.value);
</script>

<style scoped>
.router-link-active {
  color: #cd8004;
  font-weight: semibold;
}
</style>
