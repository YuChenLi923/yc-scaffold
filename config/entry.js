const glob = require('glob'),
      {entryPath} = require('./path'),
      entry = {},
      pageEntry = glob.sync(entryPath + '/*.js');
pageEntry.forEach(function (path) {
  const fileName = path.substring(path.lastIndexOf('\/') + 1, path.lastIndexOf('.')),
        filePath = 'js/pages/' + fileName;
  entry[filePath] = path;
});
// 公用第三方库;
// entry.vender = [];
module.exports = {
  entry,
  chunks: Object.keys(entry)
};
