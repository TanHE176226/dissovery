const express = require("express");
const cartController = require("../controllers/cartController");
const router = express.Router();

// @route GET && POST - /posts/
router.route("/:cartID").get(cartController.getCart);
router.route("/remove/:cartID").post(cartController.removeCart);
router.route("/addtocart").post(cartController.addToCart);

module.exports = router;