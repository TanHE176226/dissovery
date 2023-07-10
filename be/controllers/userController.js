'use strict';

var User = require('../models/UserModel.js');

exports.login = function (req, res) {
    var new_user = new User(req.body);
    // handles null error
    if (!new_user.user_name || !new_user.user_password) {
        res.status(400).send({ error: true, message: 'Please provide username/password!' });
    }
    else {
        User.login(new_user, function (err, user) {
            if (err) { res.send(err); }
            res.status(200).json(user);
        });
    }
};

exports.register = function (req, res) {
    var new_user = new User(req.body);
    // handles null error
    if (!new_user.user_name || !new_user.user_password) {
        res.status(400).send({ error: true, message: 'Please provide username/password!' });
    }
    else {
        User.register(new_user, function (err, user) {
            if (err) { res.send(err); }
            res.status(200).json(user);
        });
    }
};

exports.list_all_users = function (req, res) {
    User.getAll(function (err, user) {
        if (err) { res.send(err); }
        res.status(200).json(user);
    });
};

exports.get_a_user = function (req, res) {
    User.getById(req.params.usersId, function (err, user) {
        if (err) { res.send(err); }
        res.status(200).json(user);
    });
};

exports.create_a_user = function (req, res) {
    var new_user = new User(req.body);
    // handles null error
    if (!new_user.user_name || !new_user.user_password) {
        res.status(400).send({ error: true, message: 'Please provide username/password!' });
    }
    else {
        User.create(new_user, function (err, user) {
            if (err) { res.send(err); }
            res.status(200).json(user);
        });
    }
};

exports.update_a_user = function (req, res) {
    User.updateById(req.params.userId, new User(req.body), function (err, user) {
        if (err) { res.send(err); }
        res.status(200).json(user);
    });
};

exports.delete_a_user = function (req, res) {
    User.remove(req.params.userId, function (err, user) {
        if (err) { res.send(err); }
        res.status(200).json({ message: 'User successfully deleted' });
    });
};