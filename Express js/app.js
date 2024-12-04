const http = require('node:http')
const fs = require('node:fs')

const port = process.env.PORT ?? 3000

const processRequest = (req, res) => {
    if (req.url === '/') {
        res.statusCode = 200 //OK
        res.setHeader('Content-Type', 'text/plain ;charset=utf-8')
        res.end('Welcome to Home Page')
    } else if (req.url === '/photo') {
        fs.readFile('./photo.jpg', (err, data) => {
            if (err) {
                res.statusCode = 500
                res.end('<h1>500 Internal Error</h1>')
            } else {
                res.statusCode = 200
                res.setHeader('Content-Type', 'image/jpg')
                res.end(data)
            }
        })
    } else if (req.url === '/contact') {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/html')
        res.end('<h1>Contactanos</h1>')
    } else {
        res.statusCode = 404 //Not Found
        res.setHeader('Content-Type', 'text/html')
        res.end('<h1>404</h1>')
    }
}

const server = http.createServer(processRequest)

server.listen(port, () => {
    console.log(`server listening on port http://localhost:${port}`)
})