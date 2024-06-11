module.exports = {
  extends: ['stylelint-config-standard'],
  rules: {
    "function-url-quotes": "never",
    "font-family-name-quotes": "always-where-required",
    "comment-empty-line-before": ["never", {"except": ["first-nested"]}]
  }
};
