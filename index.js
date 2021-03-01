const http = require('http');
const port = process.env.PORT || 3000;

// recebe as requisições e as responde
let server = http.createServer((req, res) => {

    // qual a url requisitada
    console.log("URL: ", req.url);
    // qual o metodo utilizado
    console.log("MÉTODO: ", req.method);

    switch (req.url) {
        case "/":
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end("Hello!");
            break

        case "/users":
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
                users: [{
                    'nome': "Edvaldo Leite", 'email': 'eguilhermeleite@gmail.com'
                },
                {
                    'nome': "Davih Leite", 'email': 'dguilhermesilvaleite@gmail.com'
                }
                ]
            }));
            break
    }
})

// ouve a requisição
server.listen(port, () => console.log(`SERVIDOR FUNCIONANDO NA PORTA ${port}. PRESSIONE CTRL + C PARA FINALIZAR.`))