module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "header-max-length": [0],
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "fix",
        "docs",
        "style",
        "refactor",
        "perf",
        "test",
        "chore",
        "ci",
        "build",
        "revert",
      ],
    ],
    "subject-case": [0],
  },
};
