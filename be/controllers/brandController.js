'use strict';

var Brand = require('../models/BrandModel.js');

exports.list_all_brands = function (req, res) {
    Brand.getAll(function (err, brand) {
        if (err) { res.send(err); }
        res.status(200).json(brand);
    });
};

exports.get_a_brand = function (req, res) {
    Brand.getById(req.params.brandId, function (err, brand) {
        if (err) { res.send(err); }
        res.status(200).json(brand);
    });
};

exports.create_a_brand = function (req, res) {
    var new_brand = new Brand(req.body);
    // handles null error
    if (!new_brand.brand_name) {
        res.status(400).send({ error: true, message: 'Please provide value' });
    }
    else {
        Brand.create(new_brand, function (err, brand) {
            if (err) { res.send(err); }
            res.status(200).json(brand);
        });
    }
};

exports.update_a_brand = function (req, res) {
    Brand.updateById(req.params.brandId, new Brand(req.body), function (err, brand) {
        if (err) { res.send(err); }
        res.status(200).json(brand);
    });
};

exports.delete_a_brand = function (req, res) {
    Brand.remove(req.params.brandId, function (err, brand) {
        if (err) { res.send(err); }
        res.status(200).json({ message: 'Brand successfully deleted' });
    });
};