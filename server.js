// require http module
var http = require("http")

// cretae a server callback function
function serverCallbackFnc(req, res) {
  // set the response content
  res.writeHead(200, {
    "Content-Type": "text/plain",
  })
  // send the response
  res.end("Hello World!")
}
// create the server
var server = http.createServer(serverCallbackFnc)
server.listen(8080) // listen on port 8080
// print a message when server starts listening
console.log(`Server running on port http://127.0.0.1:8080`)
