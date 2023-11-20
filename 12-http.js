const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our home page!');    
    }
    else if (req.url === '/about') {
        res.end('Here is our story!');    
    }
    else{
        res.end(`
        <h1> OOPS! </h1>
        <p> We Can't seem to connect to the page! </p>
        <a href="/"> Back to the homepage</a>
        `)
    }
     
})

server.listen(5000)