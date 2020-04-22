module.exports = {
  clearMocks: true,
  coverageDirectory: "./coverage/",
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.js"],
  coverageThreshold: {
    "global": {
      "statements": 100,
      "branches": 100,
      "lines": 100,
      "functions": 100
    }
  },
  testEnvironment: "node",
};
