var net = require('net')
var port = process.argv[2]

function fitTwoDigits(num) {
  return num.length == 1 ? '0' + num : num
}

function formattedDate(rawDate) {
  return rawDate.getFullYear() + '-' +
         fitTwoDigits((rawDate.getMonth() + 1).toString()) + '-' +
         fitTwoDigits(rawDate.getDate().toString()) + ' ' +
         fitTwoDigits(rawDate.getHours().toString()) + ':' +
         fitTwoDigits(rawDate.getMinutes().toString())
}

var server = net.createServer(function(socket) {
  var now = formattedDate(new Date())
  socket.write(now)
  socket.end('\n')
})
server.listen(port)
