<script setup>
import { RULE_KEYS } from "@/domain/password/rules";

import PasswordRule from "./PasswordRule.vue";
</script>

<template>
  <ul class="password-rules">
    <PasswordRule v-for="rule in RULE_KEYS" :key="rule" :rule="rule" />
  </ul>
</template>

<style scoped>
.password-rules {
  list-style: disc;
  margin-left: 24px;
  padding-top: 12px;
}
</style>
