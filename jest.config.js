module.exports = {
  moduleFileExtensions: ["js", "json", "ts"],
  rootDir: "./",
  modulePaths: ["<rootDir>"],
  testRegex: ".*\\.spec\\.ts$",
  transform: {
    "^.+\\.(t|j)s$": "ts-jest",
  },
  collectCoverageFrom: [
    "**/*.(t|j)s",
    "!src/**/*.d.ts", // Exclude type definition files
    "!src/**/*.spec.ts", // Exclude test files from coverage
  ],
  testResultsProcessor:"jest-junit",   //jest-junit | jest-sonar-reporter
  coverageDirectory: "./coverage", // Make sure this is correct
  testEnvironment: "node",
  coverageReporters: ["json", "lcov", "text", "clover"],

  reporters: [
    "default",
    [
      "jest-junit",                // Alternative outputName: jest-sonar-reporter | jest-junit"",
      {
        outputDirectory: "./coverage", // Ensure this matches coverageDirectory if needed
        outputName: "junit.xml",     // Alternative outputName: "junit.xml | test-report.xml",
      },
    ],
  ],
  coveragePathIgnorePatterns: ["/node_modules/", "/docs/"],
};
