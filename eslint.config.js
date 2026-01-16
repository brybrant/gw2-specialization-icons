import eslintPluginSolid from 'eslint-plugin-solid/configs/recommended';
import globals from 'globals';

import { eslintConfig } from '@brybrant/configs';

export default eslintConfig({
  files: ['**/*.jsx'],
  ...eslintPluginSolid,
  languageOptions: {
    globals: {
      ...globals.browser,
    },
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
  rules: eslintPluginSolid.rules,
});
