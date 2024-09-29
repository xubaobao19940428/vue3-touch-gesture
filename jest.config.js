module.exports = {
    preset: '@vue/cli-plugin-unit-jest/presets/no-babel',
    moduleFileExtensions: ['js', 'json', 'vue'],
    transform: {
      '^.+\\.vue$': 'vue-jest',
      '^.+\\.js$': 'babel-jest',
    },
  };