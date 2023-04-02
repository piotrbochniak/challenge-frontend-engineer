<script setup>
import { computed } from "vue";
import { RULE_LABEL, ruleCheck } from "@/domain/password/rules";
import { useStrongPasswordStore } from "@/stores/strong-password";

const props = defineProps(["rule"]);
const passwordStore = useStrongPasswordStore();
const ruleState = computed(() => ruleCheck(passwordStore.password, props.rule));
</script>

<template>
  <li
    :data-test-rule-indicator="props.rule"
    :class="`password-hint__rule password-hint__rule--${
      ruleState ? 'pass' : 'fail'
    }`"
  >
    {{ RULE_LABEL[props.rule] }}
  </li>
</template>

<style scoped>
.password-hint__rule {
  font-size: 12px;
  line-height: 18px;
}
.password-hint__rule--fail {
  color: red;
}
.password-hint__rule--pass {
  color: green;
}
</style>
