import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { strengthOptionCalc } from "@/domain/password/strength-options";

export const useStrongPasswordStore = defineStore("strong_password", () => {
  const password = ref("");
  const passwordStrength = computed(() => strengthOptionCalc(password.value));
  return { password, passwordStrength };
});
