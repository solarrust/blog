module.exports = {
  extends: ['stylelint-config-standard'],
  rules: {
    "function-url-quotes": "never",
    "font-family-name-quotes": "always-where-required",
    "comment-empty-line-before": ["never", {"except": ["first-nested"]}],
    "selector-class-pattern": "^[a-z]([-]?[a-z0-9]+)*(__[a-z0-9]([-]?[a-z0-9]+)*)?(--[a-z0-9]([-|_]?[a-z0-9]+)*)?$"
  }
};
