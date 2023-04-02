<script setup>
import { RULE } from "@/domain/password/rules";

const rules = Object.values(RULE);
</script>

<template>
  <div>
    <input data-test="password-field" />

    <ul>
      <li
        v-for="rule in rules"
        :key="rule"
        :data-test-rule-indicator="rule"
        class="password-hint__rule password-hint__rule--fail"
      >
        HINT
      </li>
    </ul>

    <span data-test="validation-summary">Strong or Weak?</span>
  </div>
</template>

<style scoped></style>
