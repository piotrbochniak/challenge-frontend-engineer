<script setup>
import { useStrongPasswordStore } from "@/stores/strong-password";

const passwordStore = useStrongPasswordStore();
</script>

<template>
  <input data-test="password-field" v-model="passwordStore.password" />
</template>

<style scoped>
input {
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #ccc;
  padding: 6px 12px;
  border-radius: 4px;
  font-family: Lato, sans-serif;
  font-size: 16px;
}
</style>
