'user strict';
var sql = require('../../../CLONE/dissovery/be/config/mysql');


// Category object constructor
var Order = function (order) {
    console.log(order);
    this.user_id = order.user_id
    this.order_payment_method = order.order_payment_method;
    this.order_tax_price = order.order_tax_price;
    this.order_shipping_price = order.order_shipping_price;
    this.order_total_price = order.order_total_price;
    this.order_is_paid = order.order_is_paid;
    this.order_paid_at = order.order_paid_at;
    this.order_is_delivered = order.order_is_delivered;
    this.order_delivered_at = order.order_delivered_at;
};

Order.getAll = function getAll(result) {
    sql.query("SELECT * FROM swp391_se1722.order", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('orders : ', res);
            result(null, res);
        }
    });
};

Order.getById = function getById(orderId, result) {
    sql.query("Select * from swp391_se1722.order where swp391_se1722.order.order_id = ? ", orderId, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};

Order.create = function create(newOrder, result) {
    sql.query("INSERT INTO swp391_se1722.order set ?", newOrder, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};

Order.updateById = function (id, order, result) {
    sql.query("UPDATE swp391_se1722.order SET swp391_se1722.order = ? WHERE swp391_se1722.order.order_id = ?", [order.order, id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};

Order.remove = function (id, result) {
    sql.query("DELETE FROM swp391_se1722.order WHERE swp391_se1722.order.order_id = ?", [id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};


module.exports = Order;