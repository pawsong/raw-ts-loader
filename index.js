var ts = require('typescript');

module.exports = function(content) {
  this.cacheable && this.cacheable();

  var compiled = ts.transpileModule(content, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      sourceMap: true,
    },
  });

  var result = {
    source: content,
    output: compiled.outputText,
    sourceMap: compiled.sourceMapText,
  };

  this.value = result;
  return "module.exports = " + JSON.stringify(result);
}
