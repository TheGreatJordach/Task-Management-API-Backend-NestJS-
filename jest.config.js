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
    "!src/**/*.spec.ts", // Exclude test files if you want separate test coverage reporting
  ],
  coverageDirectory: "../coverage",
  testEnvironment: "node",
  coverageReporters: ["json", "lcov", "text", "clover"],

  reporters: [
    "default",
    [
      "jest-junit",
      {
        outputDirectory: "../coverage",
        outputName: "junit.xml",
      },
    ],
  ],
  coveragePathIgnorePatterns: ["/node_modules/", "/docs/"],
};
