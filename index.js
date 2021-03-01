const http = require('http');
const port = process.env.PORT || 3000;

// recebe as requisições e as responde
let server = http.createServer((req, res) => {

    // qual a url requisitada
    console.log("URL: ", req.url);
    // qual o metodo utilizado
    console.log("MÉTODO: ", req.method);
    res.end("OK");
})

// ouve a requisição
server.listen(port, () => console.log(`SERVIDOR FUNCIONANDO NA PORTA ${port}. PRESSIONE CTRL + C PARA FINALIZAR.`))