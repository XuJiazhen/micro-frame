# README

## configure eslint

```shell
# tools
pnpm install -D rimraf

# eslint: ./eslintrc.cjs
pnpm install -D eslint
pnpm install -D eslint-plugin-vue vue-eslint-parser
pnpm install -D typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser
pnpm install -D prettier eslint-plugin-prettier eslint-config-prettier
pnpm install -D eslint-plugin-html

# stylelint: ./.stylelintrc.cjs
pnpm install -D stylelint stylelint-order stylelint-prettier stylelint-config-standard stylelint-config-html stylelint-config-recess-order
pnpm install -D stylelint-config-recommended-vue
pnpm install -D stylelint-scss stylelint-config-standard-scss stylelint-config-recommended-scss
pnpm install -D postcss postcss-html postcss-scss

# commitlint: ./commitlint.config.cjs
pnpm install -D husky lint-staged pretty-quick
pnpm install -D @commitlint/cli @commitlint/config-conventional
# steps:
# 1.在 package.json 的 scripts 中 添加 "prepare": "husky install"
# 2.在 package.json 的 scripts 中 添加 "lint:lint-staged": "lint-staged -c ./.husky/.lintstagedrc.cjs",
# 3.执行 pnpm run prepare 后会在根目录下生成 .husky 目录
# 4.创建 .husky/.lintstagedrc.cjs 文件并手动添加 lint-staged 配置项
# 5.创建 .husky/.common.sh 兼容 windows 系统
# 6.执行 npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"' 创建 commit-msg hook
# 7.执行 npx husky add .husky/pre-commit "npm run lint:lint-staged" 创建 pre-commit hook
```
