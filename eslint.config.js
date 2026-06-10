import { defineConfig, globalIgnores } from 'eslint/config'
import globals from 'globals'
import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import pluginOxlint from 'eslint-plugin-oxlint'
import stylistic from '@stylistic/eslint-plugin'

export default defineConfig([
  {
    name: 'app/files-to-lint',
    files: ['**/*.{vue,js,mjs,jsx}']
  },

  globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),

  {
    languageOptions: {
      globals: {
        ...globals.browser
      }
    }
  },

  js.configs.recommended,
  ...pluginVue.configs['flat/essential'],

  ...pluginOxlint.buildFromOxlintConfigFile('.oxlintrc.json'),

  // ============ 格式化规则（替代 Prettier）============
  {
    plugins: {
      '@stylistic': stylistic
    },
    rules: {
      // 单引号
      '@stylistic/quotes': ['error', 'single'],
      // 不使用分号
      '@stylistic/semi': ['error', 'never'],
      // 每行宽度至多80字符
      '@stylistic/max-len': ['error', { code: 80 }],
      // 不加对象/数组最后逗号
      '@stylistic/comma-dangle': ['error', 'never'],
      // 换行符号不限制（win mac 不一致）
      '@stylistic/linebreak-style': 'off'
    }
  },

  // ============ Vue 规则 ============
  {
    rules: {
      // 关闭 props 解构校验
      'vue/no-setup-props-destructure': 'off',
      // 组件名称多单词组成（忽略 index.vue）
      'vue/multi-word-component-names': 'warn'
    }
  },
  {
    files: ['**/index.vue'],
    rules: {
      'vue/multi-word-component-names': 'off'
    }
  }
])
