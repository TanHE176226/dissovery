'user strict';
var sql = require('../config/mysql');

// Brand object constructor
var Brand = function (brand) {
    console.log(brand);
    this.brand_name = brand.brand_name;
};

Brand.getAll = function getAll(result) {
    sql.query("Select * from swp391_se1722.brand", function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('brands : ', res);
            result(null, res);
        }
    });
};

Brand.getById = function getById(brandId, result) {
    sql.query("Select * from swp391_se1722.brand where swp391_se1722.brand.brand_id = ? ", brandId, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};

Brand.create = function create(newBrand, result) {
    sql.query("INSERT INTO swp391_se1722.brand set ?", newBrand, function (err, res) {
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

Brand.updateById = function (id, brand, result) {
    sql.query("UPDATE swp391_se1722.brand SET swp391_se1722.brand = ? WHERE swp391_se1722.brand.brand_id = ?", [brand.brand, id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};

Brand.remove = function (id, result) {
    sql.query("DELETE FROM swp391_se1722.brand WHERE swp391_se1722.brand.brand_id = ?", [id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};


module.exports = Brand;