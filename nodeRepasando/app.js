const http = require('http')
const fs = require('fs')
const path = require('path')
const server = 
http.createServer((req, res) => {
    const filePath = path.join(__dirname, 'index.html')
    const file = fs.readFileSync(filePath, 'utf8')
    res.writeHead(200, {'Content-Type' : 'text/html; charset=UTF-8'})
    res.end(file)})

server.listen(3000, () => console.log('Servidor corriendo en puerto http://localhost:3000'))