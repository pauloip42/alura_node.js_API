const express = require('express'); //necessario para chamar módulos dentro de index.js
const consign = require('consign'); //??? - gerencia os controllers
const bodyParser = require('body-parser');

module.exports = () => {

    //Pra que serve isso?
    //Executa o servidor
    const app = express();

    app.use(express.urlencoded({extended: true})); //posso usar bodyParser no lugar de express
    app.use(express.json()); //posso usar bodyParser no lugar de express


    consign()
        .include('controllers')
        .into(app)
    
    return app;
}

