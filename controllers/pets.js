//req: o que estamos recebendo
//res: o que estamos devolvendo (resposta)

const Pet = require('../models/pets.js');

module.exports = app => {
    app.post('/pet', (req, res) => {
        const pet = req.body;

        Pet.adiciona(pet, res);
    })
}