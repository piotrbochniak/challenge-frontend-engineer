<script setup>
import PasswordInput from "@/components/PasswordInput.vue";
import PasswordRules from "@/components/PasswordRules.vue";
import PasswordStrength from "@/components/PasswordStrength.vue";
</script>

<template>
  <div class="app-layout">
    <PasswordInput />
    <PasswordRules />
    <PasswordStrength />
  </div>
</template>

<style scoped>
.app-layout {
  margin: 80px auto;
  width: 400px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 0 10px rgba(153, 153, 153, 0.4);
}
</style>
