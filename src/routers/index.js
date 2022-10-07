const { Router } = require('express');
const router = Router();
//const _ = require('underscore');

const datos = require('../bd/datos.json');

router.get('/', (req, res) => {
    res.json(datos);
});

module.exports = router;