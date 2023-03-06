// eslint-disable-next-line no-undef
module.exports = {
  transform: {
    '^.+\\.vue$': 'vue3-jest',
    '^.+\\.js$': 'babel-jest'
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    axios: 'axios/dist/node/axios.cjs'
  },
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js', 'vue']
}
