//req - é o que recebemos (o que a api recebe)
//res - é o que devolvemos (enviamos ou renderizamos na tela) - o que a api devolve
//app.get('/', ()=>); get na rota '/'

const atendimentos = require('../models/atendimentos');
const Atendimento = require('../models/atendimentos')

module.exports = app => {

    //recuperar dados
    app.get('/atendimentos', (req, res) => {
        Atendimento.lista(res)
    });

    //recuperar dados
    app.get('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)

        Atendimento.buscaPorId(id, res)
    });

    //submeter dados
    app.post('/atendimentos', (req, res) => {
        const atendimento = req.body;

        Atendimento.adiciona(atendimento, res);
    })

    //alterar dados
    app.patch('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const valores = req.body


        Atendimento.altera(id, valores, res)
    })

    app.delete('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)

        Atendimento.deleta(id, res)
    })

}