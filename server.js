const http = require('http');

const server = http.createServer( (request, response) => {
    console.log(request.url);

    const resp = Object();

    resp['/'] = '<h1>home</home>';
    resp['/contato'] = '<h1>contato</home>';
    resp['/casa'] = '<h1>casa</home>';


    response.end(resp[request.url] || '<h1>Sem URL: Erro 404</h1>');

    //response.end('Erro 404 (sem resposta para esta URL)');
});

server.listen(3001, 'localhost', () => {
    console.log('Sevidor em pé em http://localhost:3001');
    console.log('Para derrubar o nosso servidor é só apertar ctrl+c');
})

