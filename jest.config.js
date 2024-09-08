/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  preset: 'ts-jest',
  testEnvironment: "node",
  transform: {
    "^.+.tsx?$": ["ts-jest",{}],
  },
  coverageThreshold: {
    global: {
        statements:90,
        branches:90,
        functions:90,
    },
    './src/stats.ts': {
        statements:100,
        branches:100,
        functions:100,
    }
  }
};
