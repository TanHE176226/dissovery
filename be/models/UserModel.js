'user strict';
var sql = require('../../../CLONE/dissovery/be/config/mysql');
var bcrypt = require('bcrypt');

// User object constructor
const salt = bcrypt.genSaltSync(10);
var User = function (user) {
    console.log(user);
    this.user_name = user.user_name;
    this.user_password = bcrypt.hashSync(user.user_password, salt);
    this.user_email = user.user_email;
    this.user_isAdmin = user.user_isAdmin;
};

User.login = function login(user, result) {
    sql.query("Select * from swp391_se1722.user where swp391_se1722.user.user_name = ? and swp391_se1722.user.user_password = ? ", [user.user_name, user.user_password], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};

User.register = function register(newUser, result) {
    sql.query("INSERT INTO swp391_se1722.user set ?", newUser, function (err, res) {
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

User.create = function create(newUser, result) {
    sql.query("INSERT INTO swp391_se1722.user set ?", newUser, function (err, res) {
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

User.getAll = function getAll(result) {
    sql.query("Select * from swp391_se1722.user", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('users : ', res);
            result(null, res);
        }
    });
};

User.getById = function getById(userId, result) {
    sql.query("Select * from swp391_se1722.user where swp391_se1722.user.user_id = ? ", userId, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};

User.updateById = function (id, user, result) {
    sql.query("UPDATE swp391_se1722.user SET user = ? WHERE swp391_se1722.user.user_id = ?", [user, id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};

User.remove = function (id, result) {
    sql.query("DELETE FROM swp391_se1722.user WHERE swp391_se1722.user.user_id = ?", [id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};

module.exports = User;