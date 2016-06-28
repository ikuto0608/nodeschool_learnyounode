var http = require('http')

var urls = [
            { key: 1, value: process.argv[2]},
            { key: 2, value: process.argv[3]},
            { key: 3, value: process.argv[4]}
          ]
var result_map = []

urls.forEach(function(url) {
  http.get(url.value, function(res) {
    var data = ''
    res.setEncoding('utf8')
    res.on('data', function(chunk) {
      data += chunk
    })
    res.on('end', function() {
      result_map.push({ key: url.key, value: data })
      if (result_map.length == 3) {
        [1, 2, 3].forEach(function(key) {
          result_map.find(function(result) {
            if (result.key == key) {
              console.log(result.value)
            }
          })
        })
      }
    })
  })
})
