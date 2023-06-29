const http = require("http")

http.createServer((req, response) => {
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify({
        data : "Hello, My Name is Marcoantonio"
    }));
})
.listen(4001, () => console.log("Servidor Rodando"));