const path = require('path');
const rootDir = path.join(__dirname);
module.exports = {
    preset: 'jest-preset-angular',
    moduleNameMapper: {
        '@core/(.*)': '<rootDir>/src/app/core/$1',
    },
    setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
    collectCoverage: true,
    modulePaths: [
        "<rootDir>"
    ],
};