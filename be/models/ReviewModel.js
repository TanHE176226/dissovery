'user strict';
var sql = require('../../../CLONE/dissovery/be/config/mysql');


// Category object constructor
var Review = function (review) {
    console.log(review);
    this.user_id = this.user_id;
    this.product_id = this.product_id;
    this.review_name = this.review_name;
    this.review_rating = this.review_rating;
    this.review_comment = this.review_comment;
};

Review.getAll = function getAll(result) {
    sql.query("SELECT * FROM swp391_se1722.review", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('reviews : ', res);
            result(null, res);
        }
    });
};

Review.getById = function getById(reviewId, result) {
    sql.query("Select * from swp391_se1722.review where swp391_se1722.review.review_id = ? ", reviewId, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};

Review.create = function create(newReview, result) {
    sql.query("INSERT INTO swp391_se1722.review set ?", newReview, function (err, res) {
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

Review.updateById = function (id, review, result) {
    sql.query("UPDATE swp391_se1722.review SET swp391_se1722.review = ? WHERE swp391_se1722.review.review_id = ?", [review.review, id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};

Review.remove = function (id, result) {
    sql.query("DELETE FROM swp391_se1722.review WHERE swp391_se1722.review.review_id = ?", [id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};

module.exports = Review;