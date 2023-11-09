export default {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    transform: {
        "^.+\\.tsx?$": "ts-jest",
    },
    moduleNameMapper: {
        '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/__mocks__/fileMock.js',
        '\\.(scss|sass|css|lass)$': '<rootDir>/__mocks__/styleMock.js',
    },
    setupFilesAfterEnv: [
        "<rootDir>/setupTests.js"
    ],
}