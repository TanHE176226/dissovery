const express = require("express");
const cartController = require("../controllers/cartController");
let router = express.Router();

// @route GET && POST - /posts/
router.route("/:cartID").get(cartController.getCart);
router.route("/remove/:cartID").post(cartController.removeCart);

module.exports = router;