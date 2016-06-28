var fs = require('fs')

var filePath = process.argv[2]
var buf = fs.readFile(filePath)

function countLines(err, file) {
  var lines = file.toString().split('\n').length - 1
  console.log(lines)
}

fs.readFile(filePath, countLines)
