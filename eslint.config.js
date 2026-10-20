import eslintPluginSolid from 'eslint-plugin-solid/configs/typescript';
import globals from 'globals';
import tsParser from '@typescript-eslint/parser';

import eslintConfig from '@brybrant/eslint-config';

export default eslintConfig({
  files: ['./**/*.tsx'],
  languageOptions: {
    globals: globals.browser,
    parser: tsParser,
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      projectService: true,
    },
  },
  plugins: eslintPluginSolid.plugins,
  rules: eslintPluginSolid.rules,
});
