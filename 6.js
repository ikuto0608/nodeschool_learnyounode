var filterModule = require('./filterModule.js')

var dirPath = process.argv[2]
var extArg = process.argv[3]

filterModule(dirPath, extArg, function(err, files) {
  files.forEach(function(file) {
    console.log(file)
  })
})
