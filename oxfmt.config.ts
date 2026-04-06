import { defineConfig } from 'oxfmt';

export default defineConfig({
  ignorePatterns: ['**/routeTree.gen.ts'],
  singleQuote: true,
  jsxSingleQuote: true,
  sortImports: true,
  sortTailwindcss: true,
});
