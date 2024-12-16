const http = require('node:http') //protocolo http
const fs = require('node:fs')

const desiredPort = process.env.PORT ?? 1234

const processRequest = (req, res) => {
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    if (req.url === '/') {    ///una lógica para separar las respuestas según la ruta
        res.statusCode = 200 //ok
        res.setHeader('Content-Type', 'text/html; charset=utf-8')
        res.end('<h1>Home</h1>')
    } else if (req.url === '/contacto') {  
        res.statusCode = 200 //ok
        res.end('<h1>Contacto</h1>')
    } else if (req.url === '/imagen.jpg') {
        res.setHeader('Content-Type', 'image/jpg')
        fs.readFile('./imagen.jpg', (err, data) => {
            if (err) {
                res.statusCode = 500
                res.end('<h1 style="color:red">500 Internal Server Error</h1>') 
            } else {
                res.setHeader('Content-Type', 'image/png')
                res.end(data)
            }

        })
    } else {
        res.statusCode = 404 //fail
        res.end('<h1 style="color:red">404</h1>')
    }
}

const server = http.createServer(processRequest)

server.listen(desiredPort, ()=> {
    console.log(`server listening on port http://localhost:${desiredPort}`)
})
