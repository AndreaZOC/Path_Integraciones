const { Router } = require('express');
const router = Router();
const _ = require('underscore');

const integraciones = require('../bd/datos.json');

router.get('/', (req, res) => {
    res.json(integraciones);
});

router.post('/', (req, res) => {
    const { cliente, version, area, path, user, password, autor } = req.body;
    if (cliente && version && area && user && password && path && autor) {
        const id = integraciones.length + 1;
        const newIntegracion = { id, ...req.body }
        integraciones.push(newIntegracion);
        res.json(integraciones);
    } else {
        res.send('Wrong Request');
    }
});

//revisar para mas parametros
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { cliente, version, area, path, user, password, autor } = req.body;
    if (cliente && version && area && user && password && path && autor) {
        _.each(integraciones, (integracion, i) => {
            if (integracion.id == id) {
                integracion.cliente = cliente;
                integracion.version = version;
                integracion.area = area;
                integracion.path = path;
                integracion.user = user;
                integracion.password = password;
                integracion.autor = autor;
            }
        });
        res.json(integraciones)
    } else {
        res.status(500).json({ error: 'Error' });
    }

});




module.exports = router;