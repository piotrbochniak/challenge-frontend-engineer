<script setup>
import { StrengthOptionLabel } from "@/domain/password/strength-options";
import { useStrongPasswordStore } from "@/stores/strong-password";

const passwordStore = useStrongPasswordStore();
</script>

<template>
  <div
    :class="`password-strength password-strength__${passwordStore.passwordStrength}`"
    data-test="validation-summary"
  >
    {{ StrengthOptionLabel[passwordStore.passwordStrength] }}
  </div>
</template>

<style scoped>
.password-strength {
  padding-top: 12px;
  font-weight: bold;
}
.password-strength__undecided {
  color: #999;
}
.password-strength__weak {
  color: red;
}
.password-strength__strong {
  color: green;
}
</style>
