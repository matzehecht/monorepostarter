module.exports = {
  '*.{js,jsx,ts,tsx}': [
    // Extend rule set of .eslintrc.js with 'no-console' and 'no-unused-vars'
    'npm run lint --workspaces',
    'git add --force',
  ],
  '*.json': ['prettier --write', 'git add --force'],
};
