const express = require('express');
const router = express.Router(); // Al ejecutar este metodo nos va a devolver un objeto de JS y ahi vamos a almacenar las rutas


const IndexController = require('../controllers/index');


router.get('/', IndexController.index);

router.get('/products', IndexController.ListOfProducts);

router.post('/new-product', IndexController.newProduct);

module.exports = router;
