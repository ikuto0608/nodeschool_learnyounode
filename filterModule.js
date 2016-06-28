var path = require('path')
var fs = require('fs')

var filteredListUp = function(dirPath, extArg, callback) {
  mdList = []
  fs.readdir(dirPath, function(err, list) {
    if (err) {
      callback(err, null)
      return
    }
    list.forEach(function(file) {
      ext = file.split('.')[1]
      if (ext == extArg) {
        mdList.push(file)
      }
    })
    callback(err, mdList)
  })
}

module.exports = filteredListUp
