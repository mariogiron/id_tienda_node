const mongoose = require('mongoose');

const Product = require('./models/product.model');

mongoose.connect('mongodb://127.0.0.1:27017/tienda_online');

(async () => {
    // Crear productos
    /** const product = await Product.create({
        name: 'Sandwichera',
        description: 'Para el almuerzo',
        price: 35,
        stock: 32,
        department: 'cocina',
        available: false
    }); */

    // Recupero documentos
    const products = await Product.find({
        department: 'cocina',
        price: { $lt: 500 }
    });
    // select * from products where department = 'cocina'
    console.log(products);


    mongoose.disconnect();

})();
