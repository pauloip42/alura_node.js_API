const fs = require('fs'); //biblioteca para manipular arquivos

//o que é um buffer?
//Quando devo utilizar buffer e quando devo utilizar stream?

/*
    trocamos readFile por createReadStream
    readFile é uma função síncrona e trava a execução do código
    Stream é assíncrona. A execução da função é feita externamente por uma API
*/

//o que é stream?
module.exports = (caminho, nomeDoArquivo, callbackImagemCriada) => {
    const novoCaminho = `./assets/imagens/${nomeDoArquivo}`
    fs.createReadStream(caminho)
        .pipe(fs.createWriteStream(novoCaminho))
        .on('finish', () => callbackImagemCriada(novoCaminho));

}

/*
    Assíncrono: acontece em paralelo com outras "tarefas"
    O node.Js é single thread e só executa uma tarefa por vez
    
    Como funcionam as execuções assíncronas?

    Tarefas síncronas são executadas sequencialmente na Stack JS
    Tarefas assínconas são executadas por terceiros (Chrome WebAPI, C++ API, ...)
    As tarefas assíncronas não são executadas pelo JS mas sim por uma API
    
    A API responsável pela execução devolve os resultados para uma Pilha de Callback (Callback Queue) que retorna para o JS e para o Stack JS

*/

/*

https://nodejs.org/api/events.html#events_class_eventemitter


Stream é uma instância da classe EventEmitter, que está dentro do módulo nativo events (eventos).

Todo EventEmitter emite:

o evento “newListener” quando um novo listener é adicionado
e “removeListener” quando um listener é removido.
Legal, mas no que isso importa pra gente? Bom, esses eventos são ouvidos por um listener e, como a stream é uma instância da classe EventEmitter, ela também trabalha esperando por eventos serem desencadeados, emite eventos que adicionam e removem listeners e, dessa forma, entram no event loop do javascript!

Além do módulo events, o Node.js possui diversos outros módulos nativos compilados em binário à nossa disposição que você pode conferir na página de Core Modules do Node.js.
https://nodejs.org/api/modules.html#modules_core_modules

*/


