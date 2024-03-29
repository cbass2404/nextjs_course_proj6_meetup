module.exports = {
  clearMocks: true,
  testEnvironment: "jsdom",
  testEnvironmentOptions: { url: "http://test.meetup.com" },
  reporters: ["default", ["jest-junit", { outputDirectory: "coverage" }]],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  setupFiles: ["<rootDir>/jest.setup.ts"],
  setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
  testPathIgnorePatterns: [
    "<rootDir>/coverage/",
    "<rootDir>/dist/",
    "<rootDir>/node_modules/",
    "<rootDir>/src/shared/jest",
    "<rootDir>/src/shared/mockData",
    "<rootDir>/src/shared/msw",
  ],
  moduleNameMapper: {
    "^@scenes(/.+)": "<rootDir>/src/scenes$1",
    "^@shared(/.+)": "<rootDir>/src/shared$1",
    "^@constants": "<rootDir>/src/shared/constants.ts",
  },
  modulePathIgnorePatterns: ["<rootDir>/dist/"],
  collectCoverage: true,
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: [
    "<rootDir>/coverage/",
    "<rootDir>/dist/",
    "<rootDir>/node_modules/",
    "<rootDir>/src/shared/jest",
    "<rootDir>/src/shared/mockData",
    "<rootDir>/src/shared/msw",
  ],
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 80,
      lines: 80,
      functions: 80,
    },
  },
};
