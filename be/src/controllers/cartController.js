const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getCart = async (req, res, next) => {
    try {
        //Get cartID from route
        // const cartID = 2;
        const cartID = parseInt(req.params.cartID);
        //Get all food detail in cart by cart id
        const fIDList = await exports.findAllFoodID(cartID);
        const fDetailList = [];

        for (let i = 0; i < fIDList.length; i++) {
            const food = await prisma.food.findUnique({ where: { FoodID: fIDList[i] } });
            fDetailList.push(food);
        }
        console.log(fDetailList);
        res.send({ foodList: fDetailList });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

exports.findAllFoodID = async (cartID) => {
    const fIDList = await prisma.cartdetail.findMany({
        where: { CartID: cartID },
        select: { FoodID: true },
    });
    return fIDList.map((f) => f.FoodID);
};

exports.removeCart = async (req, res, next) => {
    try {
        const cartID = parseInt(req.params.cartID);
        console.log("This is cartID: " + cartID);
        // const cartID = 2;
        // const foodID = 2;
        const foodID = req.body.foodID;
        console.log("This is foodID: " + foodID);
        // Remove the specified food item from the cart
        const deletedItem = await prisma.cartdetail.delete({
            where: {
                CartID_FoodID: {
                    CartID: cartID,
                    FoodID: parseInt(foodID)
                }
            }
        });
        console.log(deletedItem);
        res.redirect('');
    } catch (error) {
        console.error(error);
        next(error);
    }
};

exports.checkOut = async (req, res, next) => {

}

exports.addToCart = async (req, res, next) => {
    try {
        const { foodID, quantityAdd } = req.body;
        // Check if the food exist
        const existingCartItem = await prisma.cartdetail.findFirst({
            where: {
                FoodID: foodID
            }
        });
        if (existingCartItem) {
            // if exists, increase the quantity in the existing cart
            const updatedCartItem = await prisma.cartdetail.update({
                where: {
                    CartID_FoodID: {
                        CartID: existingCartItem.CartID,
                        FoodID: foodID
                    }
                },
                data: {
                    quantity: existingCartItem.quantity + quantityAdd
                }
            });
            res.status(200).json({ message: "Item added to cart successfully." });
        } else {
            // If does not exist in any cart, create a new cartdetail 
            const newCartItem = await prisma.cartdetail.create({
                data: {
                    FoodID: foodID,
                    quantity: quantityAdd
                }
            });
            res.status(200).json({ message: "Item added to cart successfully." });
        }
    } catch (error) {
        console.error(error);
        next(error);
    }
};


