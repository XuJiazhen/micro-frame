# INIT

```bash
# required
pnpm install -Sw vue@latest element-plus pinia lodash @vueuse/core axios vue-router date-fns

# webpack
pnpm install -Dw webpack webpack-cli webpack-dev-server sass

# webpack loaders
pnpm install -Dw css-loader sass-loader postcss-loader vue-loader style-loader ts-loader

# webpack plugins
pnpm install -Dw html-webpack-plugin mini-css-extract-plugin webpack-merge

# webpack babel
pnpm install -Dw babel-loader @babel/preset-env @babel/preset-typescript @babel/core

# unplugin
pnpm install -Dw unplugin-auto-import unplugin-vue-components

# types
pnpm install -Dw @types/node @types/webpack

# tools
pnpm install -Dw rimraf npm-run-all

# eslint: ./eslintrc.cjs
pnpm install -Dw eslint
pnpm install -Dw eslint-plugin-vue vue-eslint-parser
pnpm install -Dw typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser
pnpm install -Dw prettier eslint-plugin-prettier eslint-config-prettier
pnpm install -Dw eslint-plugin-html

# stylelint: ./.stylelintrc.cjs
pnpm install -Dw stylelint stylelint-order stylelint-prettier stylelint-config-standard stylelint-config-html stylelint-config-recess-order
pnpm install -Dw stylelint-config-recommended-vue
pnpm install -Dw stylelint-scss stylelint-config-standard-scss stylelint-config-recommended-scss
pnpm install -Dw postcss postcss-html postcss-scss

# commitlint: ./commitlint.config.cjs
pnpm install -Dw husky lint-staged pretty-quick
pnpm install -Dw @commitlint/cli @commitlint/config-conventional
# steps:
# 1.在 package.json 的 scripts 中 添加 "prepare": "husky install"
# 2.在 package.json 的 scripts 中 添加 "lint:lint-staged": "lint-staged -c ./.husky/.lintstagedrc.cjs",
# 3.执行 pnpm run prepare 后会在根目录下生成 .husky 目录
# 4.创建 .husky/.lintstagedrc.cjs 文件并手动添加 lint-staged 配置项
# 5.创建 .husky/.common.sh 兼容 windows 系统
# 6.执行 npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"' 创建 commit-msg hook
# 7.执行 npx husky add .husky/pre-commit "npm run lint:lint-staged" 创建 pre-commit hook
```
