var productContr = require('../controllers/product.controller');

module.exports = (app) => {
    app.route('/product/:barCode')
        .get(productContr.getByBarCode);

    app.route('/product')
        .post(productContr.addProduct);
}