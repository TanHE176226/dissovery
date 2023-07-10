'user strict';
var sql = require('../config/mysql');


// Category object constructor
var Category = function (category) {
    console.log(category);
    this.category_name = category.category_name;
};

Category.getAll = function getAll(result) {
    sql.query("Select * from swp391_se1722.category", function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('categories : ', res);
            result(null, res);
        }
    });
};

Category.getById = function getById(categoryId, result) {
    sql.query("Select * from swp391_se1722.category where swp391_se1722.category.category_id = ? ", categoryId, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};

Category.create = function create(newCategory, result) {
    sql.query("INSERT INTO swp391_se1722.category set ?", newCategory, function (err, res) {
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

Category.updateById = function (id, category, result) {
    sql.query("UPDATE swp391_se1722.category SET swp391_se1722.category = ? WHERE swp391_se1722.category.category_id = ?", [category.category, id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};

Category.remove = function (id, result) {
    sql.query("DELETE FROM swp391_se1722.category WHERE swp391_se1722.category.category_id = ?", [id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};


module.exports = Category;