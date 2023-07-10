'use strict';

var Category = require('../models/CatergoryModel.js');

exports.list_all_categories = function (req, res) {
    Category.getAll(function (err, category) {
        if (err) { res.send(err); }
        res.status(200).json(category);
    });
};

exports.get_a_category = function (req, res) {
    Category.getById(req.params.categoryId, function (err, category) {
        if (err) { res.send(err); }
        res.status(200).json(category);
    });
};

exports.create_a_category = function (req, res) {
    var new_category = new Category(req.body);
    // handles null error
    if (!new_category.category_name) {
        res.status(400).send({ error: true, message: 'Please provide value' });
    }
    else {
        Category.create(new_category, function (err, category) {
            if (err) { res.send(err); }
            res.status(200).json(category);
        });
    }
};

exports.update_a_category = function (req, res) {
    Category.updateById(req.params.categoryId, new Category(req.body), function (err, category) {
        if (err) { res.send(err); }
        res.status(200).json(category);
    });
};

exports.delete_a_category = function (req, res) {
    Category.remove(req.params.categoryId, function (err, category) {
        if (err) { res.send(err); }
        res.status(200).json({ message: 'Category successfully deleted' });
    });
};