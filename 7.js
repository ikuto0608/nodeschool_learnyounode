var http = require('http')

targetPath = process.argv[2]

http.get(targetPath, (res) => {
  res.setEncoding("utf8")
  res.on("data", console.log)
  res.on("error", console.error)
})
