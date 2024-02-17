const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
  root: true,
  extends: ['airbnb', '@souyahia/eslint-config-typescript'],
  rules: {
    'react/react-in-jsx-scope': OFF,
    'react/jsx-filename-extension': [ERROR, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
  },
};
