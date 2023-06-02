module.exports = {
  '*.{js,ts}': ['eslint --fix', 'prettier --write'],
  '*.json': ['prettier --write'],
  '*.vue': ['eslint --fix', 'prettier --write', 'stylelint --fix'],
  '*.{css,scss,html}': ['stylelint --fix', 'prettier --write'],
  '*.md': ['prettier --write']
}
