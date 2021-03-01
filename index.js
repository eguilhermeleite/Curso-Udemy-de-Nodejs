const express = require('express');
let app = express();
const port = process.env.PORT || 3000;

// rota padrão
app.get('/', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end("Hello!")
});

// rota users
app.get('/users', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({
        users: [{ 'nome': "Edvaldo Leite", 'email': 'eguilhermeleite@gmail.com' }, { 'nome': "Davih Leite", 'email': 'dguilhermesilvaleite@gmail.com' }
        ]
    });

});

// ouve a requisição
app.listen(port, () => console.log(`SERVIDOR FUNCIONANDO NA PORTA ${port}. PRESSIONE CTRL + C PARA FINALIZAR.`))