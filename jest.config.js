module.exports = {
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "\\.(css|less|scss)$": "identity-obj-proxy", // Mock CSS imports
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom"], // Make sure the path is correct
};
