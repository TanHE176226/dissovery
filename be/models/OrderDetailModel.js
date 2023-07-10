'user strict';
var sql = require('../../../CLONE/dissovery/be/config/mysql');


// Category object constructor
var Orderdetail = function (orderdetail) {
    console.log(orderdetail);
    this.order_id = orderdetail.order_id;
    this.product_id = orderdetail.product_id;
    this.orderdetail_name = orderdetail.orderdetail_name;
    this.orderdetail_quantity = orderdetail.orderdetail_quantity;
    this.orderdetail_price = orderdetail.orderdetail_price;
};

Orderdetail.getAll = function getAll(result) {
    sql.query("SELECT * FROM swp391_se1722.orderdetail", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('orderdetails : ', res);
            result(null, res);
        }
    });
};

Orderdetail.getById = function getById(orderdetailId, result) {
    sql.query("Select * from swp391_se1722.orderdetail where swp391_se1722.orderdetail.orderdetail_id = ? ", orderdetailId, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};

Orderdetail.create = function create(newOrderdetail, result) {
    sql.query("INSERT INTO swp391_se1722.orderdetail set ?", newOrderdetail, function (err, res) {
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

Orderdetail.updateById = function (id, orderdetail, result) {
    sql.query("UPDATE swp391_se1722.orderdetail SET swp391_se1722.orderdetail = ? WHERE swp391_se1722.orderdetail.orderdetail_id = ?", [orderdetail.orderdetail, id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};

Orderdetail.remove = function (id, result) {
    sql.query("DELETE FROM swp391_se1722.orderdetail WHERE swp391_se1722.orderdetail.orderdetail_id = ?", [id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};


module.exports = Orderdetail;