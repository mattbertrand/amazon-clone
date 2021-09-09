module.exports = {
  "root": true,
  "env": {
    "es6": true,
    "node": true,
  },
  "extends": [
    "eslint:recommended",
    "google",
  ],
  "parser": "babel-eslint",
  "rules": {
    "quotes": ["error", "double"],
	"indent": "off",
	"no-tabs": 0,
	"max-len": ["error", {"code": 150}],
  },
};
