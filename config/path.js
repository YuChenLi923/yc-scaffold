/**
 * Created by swull on 2017/9/28.
 */
const path = require('path'),
      rootPath = path.resolve(__dirname, '../'),
      outPath = path.resolve(rootPath,'dist'),
      entryPath = path.resolve(rootPath,'src/');
module.exports = {
    outPath,
    entryPath,
    rootPath
};