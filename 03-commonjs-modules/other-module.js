/*
function (exports, require, module, __filename, __dirname) {
console.log(arguments.callee.toString());

}
*/

//console.log(arguments.callee.toString());

/*
{
  id: '.',
  path: 'd:\\xampp\\htdocs\\Node\\03-commonjs-modules',
  exports: {},
  filename: 'd:\\xampp\\htdocs\\Node\\03-commonjs-modules\\other-module.js',
  loaded: false,
  children: [],
  paths: [
    'd:\\xampp\\htdocs\\Node\\03-commonjs-modules\\node_modules',
    'd:\\xampp\\htdocs\\Node\\node_modules',
    'd:\\xampp\\htdocs\\node_modules',
    'd:\\xampp\\node_modules',
    'd:\\node_modules'
  ]
}
  */
//console.log(module);

//d:\xampp\htdocs\Node\03-commonjs-modules\other-module.js
//console.log(__filename);

/*{}
{}
true
*/
//console.log(exports);
//console.log(module.exports);
//console.log(exports === module.exports);


/*
[Function: require] {
  resolve: [Function: resolve] { paths: [Function: paths] },
  main: {
    id: '.',
    path: 'd:\\xampp\\htdocs\\Node\\03-commonjs-modules',
    exports: {},
    filename: 'd:\\xampp\\htdocs\\Node\\03-commonjs-modules\\other-module.js',
    loaded: false,
    children: [],
    paths: [
      'd:\\xampp\\htdocs\\Node\\03-commonjs-modules\\node_modules',
      'd:\\xampp\\htdocs\\Node\\node_modules',
      'd:\\xampp\\htdocs\\node_modules',
      'd:\\xampp\\node_modules',
      'd:\\node_modules'
    ]
  },
  extensions: [Object: null prototype] {
    '.js': [Function (anonymous)],
    '.json': [Function (anonymous)],
    '.node': [Function (anonymous)]
  },
  cache: [Object: null prototype] {
    'd:\\xampp\\htdocs\\Node\\03-commonjs-modules\\other-module.js': {
      id: '.',
      path: 'd:\\xampp\\htdocs\\Node\\03-commonjs-modules',
      exports: {},
      filename: 'd:\\xampp\\htdocs\\Node\\03-commonjs-modules\\other-module.js',
      loaded: false,
      children: [],
      paths: [Array]
    }
  }
}

*/
//console.log(require);
console.log(require.extensions);