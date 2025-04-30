// jest.config.mjs
export default {
  testEnvironment: 'node',
  transform: {
    "^.+\\.[jt]sx?$": "babel-jest",
  }
  , // turn off Babel if not using it
};
