'use strict';

var mongoose = require('mongoose'),
    config = require('../../../config/config'),
    Utils = require('../../../domain/utils/utils'),
    Product = require('../../../domain/models/product').Product;


exports.getByBarCode = (req, res) => {
    Product.findOne({ 'barCode': req.params.barCode }, function (err, product) {
        if (err) {
            res.status(404).send({
                message: Utils.getErrorMessageFromModel(err)
            });
        } else {
            res.status(200).send({
                message: 'Sucesso',
                result: product
            });

        }
    });
};

exports.addProduct = (req, res) => {
    var query = { 'barCode': req.body.barCode };
    var options = { upsert: true, new: true };

    Product.findOneAndUpdate(query, req.body, options, function (err, product) {
        if (err) {
            res.status(404).send({
                message: Utils.getErrorMessageFromModel(err)
            });
        } else {
            res.status(200).send({
                message: 'Sucesso',
                result: product
            });

        }
    });
}