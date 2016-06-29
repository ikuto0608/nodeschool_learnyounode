var http = require('http')
var fs = require('fs')
var port = process.argv[2]
var fileLocation = process.argv[3]


var server = http.createServer(function(req, res) {
  var readStream = fs.createReadStream(fileLocation)
  readStream.on('open', function() {
    readStream.pipe(res)
  })

  readStream.on('error', function(err) {
    console.log(err)
  })

  readStream.on('close', function() {
    console.log('session closed')
  })
})
server.listen(port)
