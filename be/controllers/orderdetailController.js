'use strict';

var OrderDetail = require('../models/OrderDetailModel.js');

exports.list_all_orderdetails = function (req, res) {
    OrderDetail.getAll(function (err, orderdetail) {
        if (err) { res.send(err); }
        res.status(200).json(orderdetail);
    });
};

exports.get_a_orderdetail = function (req, res) {
    OrderDetail.getById(req.params.orderdetailId, function (err, orderdetail) {
        if (err) { res.send(err); }
        res.status(200).json(orderdetail);
    });
};

exports.create_a_orderdetail = function (req, res) {
    var new_orderdetail = new OrderDetail(req.body);
    OrderDetail.create(new_orderdetail, function (err, orderdetail) {
        if (err) { res.send(err); }
        res.status(200).json(orderdetail);
    });
};

exports.update_a_orderdetail = function (req, res) {
    OrderDetail.updateById(req.params.orderdetailId, new OrderDetail(req.body), function (err, orderdetail) {
        if (err) { res.send(err); }
        res.status(200).json(orderdetail);
    });
};

exports.delete_a_orderdetail = function (req, res) {
    OrderDetail.remove(req.params.orderdetailId, function (err, orderdetail) {
        if (err) { res.send(err); }
        res.status(200).json({ message: 'OrderDetail successfully deleted' });
    });
};