'use strict';

var Review = require('../models/ReviewModel.js');

exports.list_all_reviews = function (req, res) {
    Review.getAll(function (err, review) {
        if (err) { res.send(err); }
        res.status(200).json(review);
    });
};

exports.get_a_review = function (req, res) {
    Review.getById(req.params.reviewId, function (err, review) {
        if (err) { res.send(err); }
        res.status(200).json(review);
    });
};

exports.create_a_review = function (req, res) {
    var new_review = new Review(req.body);
    // handles null error
    if (!new_review.review_comment) {
        res.status(400).send({ error: true, message: 'Please provide value' });
    }
    else {
        Review.create(new_review, function (err, review) {
            if (err) { res.send(err); }
            res.status(200).json(review);
        });
    }
};

exports.update_a_review = function (req, res) {
    Review.updateById(req.params.reviewId, new Review(req.body), function (err, review) {
        if (err) { res.send(err); }
        res.status(200).json(review);
    });
};

exports.delete_a_review = function (req, res) {
    Review.remove(req.params.reviewId, function (err, review) {
        if (err) { res.send(err); }
        res.status(200).json({ message: 'Review successfully deleted' });
    });
};