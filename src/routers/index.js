const { Router } = require('express');
const router = Router();
//const _ = require('underscore');

const integraciones = require('../bd/datos.json');

router.get('/', (req, res) => {
    res.json(integraciones);
});

router.post('/', (req, res) => {
    const { cliente, version, area, path, user, password, autor } = req.body;
    if (cliente && version && area && user && password && path && autor) {
        const id = integraciones.length + 1;
        const test = "jiji"; //agrega un campo con info que no esta en la BD
        const newIntegracion = { id, ...req.body, test}
        integraciones.push(newIntegracion);
        res.json(integraciones);
    } else {
        res.send('Wrong Request');
    }
});



module.exports = router;