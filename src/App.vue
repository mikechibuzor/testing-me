<template>
  <main class="bg-primary">
    <the-header />
    <router-view class="min-h-screen bg-primary overflow-x-hidden" />
  </main>
</template>

<script setup>
import TheHeader from "@/components/base/header/TheHeader.vue";
</script>

<style></style>
