import { RULE_KEYS, ruleCheck } from "./rules";

const StrengthOptionStrongMinimumPassedRules = 5;

const StrengthOption = {
  Undecided: "undecided",
  Weak: "weak",
  Strong: "strong",
};

const StrengthOptionLabel = {
  [StrengthOption.Undecided]: "Strong or Weak?",
  [StrengthOption.Weak]: "Password is weak",
  [StrengthOption.Strong]: "Password is strong enough",
};

const strengthOptionCalc = (password) => {
  if (password === "") {
    return StrengthOption.Undecided;
  }

  const strength = RULE_KEYS.reduce(
    (acc, rule) => (ruleCheck(password, rule) ? acc + 1 : acc),
    0
  );
  return strength >= StrengthOptionStrongMinimumPassedRules
    ? StrengthOption.Strong
    : StrengthOption.Weak;
};

export { StrengthOption, StrengthOptionLabel, strengthOptionCalc };
