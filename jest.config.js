module.exports = {
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.vue$': '@vue/vue3-jest',
      '^.+\\.(ts|tsx)?$': 'ts-jest',
      '^.+\\.(js|jsx)$': 'babel-jest'
    },
    testEnvironmentOptions: {
      customExportConditions: ['node', 'node-addons'],
    },
    setupFiles: ['./jest.setup.js']
};