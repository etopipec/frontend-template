// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(
  {
    rules: {
      '@typescript-eslint/no-unused-vars': ['error', { 
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_'
      }],
      '@typescript-eslint/no-explicit-any': 'warn', // Предупреждение вместо ошибки для any
      '@typescript-eslint/explicit-function-return-type': 'off', // Не требовать явные возвращаемые типы
      
      // Vue правила
      'vue/multi-word-component-names': 'off', // Разрешить однословные имена компонентов
      'vue/no-multiple-template-root': 'off', // Разрешить несколько корневых элементов (Vue 3)
      'vue/require-default-prop': 'warn', // Предупреждение для пропсов без значения по умолчанию
      'vue/attribute-hyphenation': ['error', 'always'], // Всегда использовать kebab-case в шаблонах
      
      // Общие правила JavaScript
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn', // В продакшене ошибка, в разработке предупреждение
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
      'prefer-const': 'error', // Предпочитать const вместо let
      'no-var': 'error', // Запретить var
      
      // Стилистические правила
      'quotes': ['error', 'single'], // Одинарные кавычки
      'semi': ['error', 'always'], // Точки с запятой всегда
      'comma-dangle': ['error', 'only-multiline'], // Висящие запятые только для многострочных объектов
      'indent': ['error', 2], // 2 пробела для отступа

      // Правила импортов
      'import/order': ['error', {
        'groups': [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index'
        ],
        'newlines-between': 'always',
        'alphabetize': { order: 'asc' }
      }],
    },
    // Игнорируемые файлы и директории
    ignores: [
      'dist/**',
      'node_modules/**',
      '.nuxt/**',
      'output/**',
      'coverage/**',
      '*.min.js'
    ]
  }
);
