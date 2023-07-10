'use strict';

var Product = require('../models/ProductModel.js');

exports.list_all_products = function (req, res) {
    Product.getAll(function (err, product) {
        if (err) { res.send(err); }
        res.status(200).json(product);
    });
};

exports.get_a_product = function (req, res) {
    Product.getById(req.params.productId, function (err, product) {
        if (err) { res.send(err); }
        res.status(200).json(product);
    });
};

exports.create_a_product = function (req, res) {
    var new_product = new Product(req.body);
    // handles null error
    if (!new_product.product_name) {
        res.status(400).send({ error: true, message: 'Please provide value' });
    }
    else {
        Product.create(new_product, function (err, product) {
            if (err) { res.send(err); }
            res.status(200).json(product);
        });
    }
};

exports.update_a_product = function (req, res) {
    Product.updateById(req.params.productId, new Product(req.body), function (err, product) {
        if (err) { res.send(err); }
        res.status(200).json(product);
    });
};

exports.delete_a_product = function (req, res) {
    Product.remove(req.params.productId, function (err, product) {
        if (err) { res.send(err); }
        res.status(200).json({ message: 'Product successfully deleted' });
    });
};