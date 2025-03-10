export default  {
  extends: [
    'eslint:recommended',  // Основные правила ESLint
    'plugin:vue/vue3-recommended'  // Рекомендуемые правила для Vue 3
  ],
  parserOptions: {
    ecmaVersion: 2020, // Поддержка последних фич ECMAScript
    sourceType: 'module',  // Поддержка модулей
  },
  env: {
    browser: true,  // Окружение браузера
    node: true,  // Окружение Node.js
  },
  rules: {
    // Можно добавить кастомные правила ESLint
    'vue/no-unused-vars': 'warn',  // Например, правило для неиспользуемых переменных
  },
};
