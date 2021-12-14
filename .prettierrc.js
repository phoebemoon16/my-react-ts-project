/*
 * @Author: wanghh
 * @Date: 2021-12-14 09:12:19
 * @LastEditors: wanghh
 * @LastEditTime: 2021-12-14 09:12:20
 * @Description:
 */
module.exports = {
  printWidth: 140,
  tabWidth: 2,
  singleQuote: true,
  trailingComma: "none",
  semi: false,
  bracketSpacing: true,
  jsxBracketSameLine: true,
  useTabs: false,
  eslintIntegration: true,
  overrides: [
    {
      files: ".prettierrc",
      options: {
        parser: "json",
      },
    },
  ],
  arrowParens: "avoid",
  endOfLine: "auto",
};
