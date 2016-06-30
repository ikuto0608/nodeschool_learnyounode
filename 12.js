var http = require('http')
var port = process.argv[2]

var server = http.createServer(function(req, res) {
  datas = []
  req.on('data', function(data) {
    datas.push(data)
  })

  req.on('end', function() {
    datas.forEach(function(data) {
      res.write(data.toString().toUpperCase())
    })
  })
})
server.listen(port)
