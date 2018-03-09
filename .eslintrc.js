module.exports = {
  "plugins": [
    "json",
    "es-beautifier",
    "import",
    "jsx-a11y",
    "react"
  ],
  "extends": [
    "plugin:es-beautifier/standard",
    "airbnb"
  ],
  "rules": {
    "func-names": ["error", "never"],
    "indent": ["error", 2],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    // Begin Next.js style.
    "react/react-in-jsx-scope": 0,
    "semi": [2, "never"]
    // End Next.js style.
  }
}
