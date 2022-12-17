const path = require('path');
const rootDir = path.join(__dirname);
module.exports = {
    preset: 'jest-preset-angular',
    setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
    collectCoverage: true
};