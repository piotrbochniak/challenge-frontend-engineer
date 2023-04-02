export const RULE = {
  OneLetter: "OneLetter",
  UpperAndLower: "UpperAndLower",
  OneNumber: "OneNumber",
  SpecialSymbol: "SpecialSymbol",
  LongerThan4: "LongerThan4",
  LongerThan8: "LongerThan8",
  LongerThan12: "LongerThan12",
};

export const RULE_KEYS = Object.keys(RULE);

export const RULE_LABEL = {
  OneLetter: "Has at least one letter",
  UpperAndLower: "Has at least one lower and one upper case letter",
  OneNumber: "Has at least one number",
  SpecialSymbol: "Has at least one special character",
  LongerThan4: "Has length > 4",
  LongerThan8: "Has length > 8",
  LongerThan12: "Has length > 12",
};

export const RULE_NOT_EXCLUSIVE_SPEC_SYMBOLS_LIST = "$%^& _-+*()@!";

export const ruleCheck = (password, rule) => {
  switch (rule) {
    case RULE.OneLetter:
      return /[a-zA-Z]/.test(password);
    case RULE.UpperAndLower:
      return /[a-z]/.test(password) && /[A-Z]/.test(password);
    case RULE.OneNumber:
      return /[0-9]/.test(password);
    case RULE.SpecialSymbol:
      return /[$%^& _\-+*()@!]/.test(password);
    case RULE.LongerThan4:
      return password.length > 4;
    case RULE.LongerThan8:
      return password.length > 8;
    case RULE.LongerThan12:
      return password.length > 12;
    default:
      return false;
  }
};
