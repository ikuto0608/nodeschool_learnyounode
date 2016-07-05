var http = require('http')
var url = require('url')
var port = process.argv[2]

var server = http.createServer(function(req, res) {
  content = url.parse(req.url, true)
  content.query.iso ? date = new Date(content.query.iso) : date = null

  res.writeHead(200, { 'Content-Type': 'applicatoin/json' })

  if(content.pathname == '/api/parsetime' && date) {
    hour = date.getHours()
    minute = date.getMinutes()
    second = date.getSeconds()

    res.end(
      JSON.stringify({
        "hour": hour,
        "minute": minute,
        "second": second
      })
    )
  } else if (content.pathname == '/api/unixtime' && date) {
    res.end(
      JSON.stringify({
        "unixtime": date.getTime()
      })
    )
  } else {
    res.writeHead(400)
    res.end()
  }
})
server.listen(port)
