'user strict';
var sql = require('../../../CLONE/dissovery/be/config/mysql');


// Category object constructor
var Product = function (product) {
    console.log(product);
    this.user_id = product.product_id;
    this.brand_id = product.product_id;
    this.category_id = product.product_id;
    this.product_name = product.product_id;
    this.product_image_url = product.product_id;
    this.product_description = product.product_id;
    this.product_rating = product.product_id;
    this.product_price = product.product_id;
    this.product_count_in_stock = product.product_id;
    this.roduct_status = product.product_id;
};

Product.getAll = function getAll(result) {
    sql.query("Select * from swp391_se1722.product", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('products : ', res);
            result(null, res);
        }
    });
};

Product.getById = function getById(productId, result) {
    sql.query("Select * from swp391_se1722.product where swp391_se1722.product.product_id = ? ", productId, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};

Product.create = function create(newProduct, result) {
    sql.query("INSERT INTO swp391_se1722.product set ?", newProduct, function (err, res) {
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

Product.updateById = function (id, product, result) {
    sql.query("UPDATE swp391_se1722.product SET swp391_se1722.product = ? WHERE swp391_se1722.product.product_id = ?", [product.product, id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};

Product.remove = function (id, result) {
    sql.query("DELETE FROM swp391_se1722.product WHERE swp391_se1722.product.product_id = ?", [id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};


module.exports = Product;