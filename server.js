try {
  const a = 1
  const c = a + b
} catch (err) {
  console.log(err)
}

const fs = require("fs")
function nodeStyleCallback(err, data) {
  if (err) {
    console.error("There was an error", err)
    return
  }
  console.log(data.toString())
}
fs.readFile("does-not-exist.txt", nodeStyleCallback)
fs.readFile("does-exist.txt", nodeStyleCallback)
