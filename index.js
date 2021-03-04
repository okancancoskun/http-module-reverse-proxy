const http = require('http');

http.createServer((req, res) => {
    const options = {
        hostname: 'localhost',
        port: 5000,
        path: req.url,
        headers: req.headers
    }

    const proxy = http.request(options, (request, response) => {
        request.pipe(res, {
            end: true
        })
    })
    req.pipe(proxy, { end: true })
}).listen(3000, () => console.log('server started'))
