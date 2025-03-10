const http = require('node:http')

const dittoJson = require('./pokemon/ditto.json')

const port = 1234

const processRequest = (req, res) => {
  const { method, url } = req

  switch (method) {
    case 'GET':
      switch (url) {
        case '/pokemon/ditto':
          res.setHeader('Content-Type', 'aplication/json')
          return res.end(JSON.stringify(dittoJson))
        default:
          res.statusCode = 404
          res.setHeader('Content-Type', 'text/html; charset=utf-8')
          return res.end('<h1>404</h1>')
      }

    case 'POST':
      switch (url) {
        case '/pokemon':{
          let body = ''

          // escuchar evento
          req.on('data', chunk => {
            body += chunk.toString()
          })

          req.on('end', () => {
            const data = JSON.parse(body)
            // llamar a una base de datos para guardar la info
            // res.writeHead(201), { 'Content-Type': 'application/json; charset=utf-8' }
            res.setHeader('Content-Type', 'aplication/json ; charset=utf-8')
            res.end(JSON.stringify(data))
          })

          break
        }

        // case '/otro':{
        //   const body = ''
        //   break
        // }
        default:
          res.statusCode = 404
          res.setHeader('Content-Type', 'text/plain; charset=utf-8')
          return res.end('<h1>404 Not Found</h1>')
      }
  }
}

const server = http.createServer(processRequest)

server.listen(port, () => {
  console.log('server listening on port http://localhost:1234')
})
