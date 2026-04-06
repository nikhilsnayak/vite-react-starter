import { defineConfig } from 'oxlint';

export default defineConfig({
  ignorePatterns: ['**/routeTree.gen.ts'],
  plugins: [
    'eslint',
    'typescript',
    'unicorn',
    'react',
    'react-perf',
    'oxc',
    'import',
    'jsx-a11y',
    'promise',
  ],
  options: {
    typeAware: true,
    typeCheck: true,
  },
});
