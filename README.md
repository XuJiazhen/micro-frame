# README

## configure eslint

```shell
# tools
pnpm install -D rimraf

# eslint
pnpm install -D eslint
pnpm install -D eslint-plugin-vue vue-eslint-parser
pnpm install -D typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser
pnpm install -D prettier eslint-plugin-prettier eslint-config-prettier
pnpm install -D eslint-plugin-html

pnpm install -D sass sass-loader # needs to remove

# stylelint
pnpm install -D stylelint stylelint-order stylelint-prettier stylelint-config-standard stylelint-config-html stylelint-config-recess-order
pnpm install -D stylelint-config-recommended-vue
pnpm install -D stylelint-scss stylelint-config-standard-scss stylelint-config-recommended-scss
pnpm install -D postcss postcss-html postcss-scss

# commitlint
pnpm install -D husky lint-staged pretty-quick # pnpx husky add .husky/pre-commit
pnpm install -D @commitlint/cli @commitlint/config-conventional
```
