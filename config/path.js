const path = require('path'),
      rootPath = path.resolve(__dirname, '../'),
      outPath = path.resolve(rootPath, 'dist'),
      entryPath = path.resolve(rootPath, 'src/');
module.exports = {
  outPath,
  entryPath,
  rootPath
};
