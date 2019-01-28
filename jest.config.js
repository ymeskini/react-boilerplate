module.exports = {
  setupFilesAfterEnv: ['<rootDir>/testSetup.ts'],
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx']
};
