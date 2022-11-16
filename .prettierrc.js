module.exports = {
  semi: true,
  trailingComma: "all",
  singleQuote: true,
  printWidth: 90,
  tabWidth: 2,
  endOfLine: "auto",
  importOrder: [
    "^@core/(.*)$",
    "^@server/(.*)$",
    "^./component/(.*)$",
    "^@/ui/(.*)$",
    "^[./]",
  ],
  singleQuote: false,
};
