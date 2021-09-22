module.exports = {
  transform: {
    '^.+\\.(tsx|js|ts)$': 'babel-jest',
  },
  testRegex: '.test.(tsx?|js)$',
  setupFilesAfterEnv: ['./setupTests.ts'],
  coverageDirectory: './coverage',
};
