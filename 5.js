var fs = require('fs')

var dirPath = process.argv[2]
var extArg = process.argv[3]
var mdList = []

fs.readdir(dirPath, function(err, list) {
  list.forEach(function(file) {
    ext = file.split('.')[1]
    if(ext == extArg) {
      mdList.push(file)
      console.log(file)
    }
  })
})
