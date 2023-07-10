'use strict';

var Order = require('../models/OrderModel.js');

exports.list_all_orders = function (req, res) {
    Order.getAll(function (err, order) {
        if (err) { res.send(err); }
        res.status(200).json(order);
    });
};

exports.get_a_order = function (req, res) {
    Order.getById(req.params.orderId, function (err, order) {
        if (err) { res.send(err); }
        res.status(200).json(order);
    });
};

exports.create_a_order = function (req, res) {
    var new_order = new Order(req.body);
    Order.create(new_order, function (err, order) {
        if (err) { res.send(err); }
        res.status(200).json(order);
    });
};

exports.update_a_order = function (req, res) {
    Order.updateById(req.params.orderId, new Order(req.body), function (err, order) {
        if (err) { res.send(err); }
        res.status(200).json(order);
    });
};

exports.delete_a_order = function (req, res) {
    Order.remove(req.params.orderId, function (err, order) {
        if (err) { res.send(err); }
        res.status(200).json({ message: 'Order successfully deleted' });
    });
};