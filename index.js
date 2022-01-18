const customExpress = require('./config/customExpress');
const conexao = require('./infraestrutura/database/conexao.js');
const Tabelas = require('./infraestrutura/database/tabelas.js');

conexao.connect(erro => {
    if(erro) {
        console.log(erro);
    } else {
        console.log('Conectado com Sucesso');

        Tabelas.init(conexao);

        //inicia o app
        const app = customExpress();
        //Pra que serve isso?
        app.listen(3000, () => console.log('Servidor iniciado'));
    };
});







