// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: 'eslint:recommended',
  // required to lint *.vue files
  plugins: [
    'html','flowtype-errors'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,

    // disable indent check 
    'indent': 'off',
    // send flow errors to eslint
    'flowtype-errors/show-errors': 2,

    'no-console':0,//severity : 0 = off, 1 = warn, 2 = error 
    'no-unused-vars':0 //configuring this as error was impeding dev
  }
}
