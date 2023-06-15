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

// exports.addToCart = async (req, res, next) => {
//   try {
//     const { foodId, userId, quantity } = req.body;

//     if (!foodId || !userId || !quantity) {
//       return res.status(400).json({ success: false, message: 'Missing foodId, userId, or quantity' });
//     }

//     const cart = await prisma.cart.findFirst({ where: { userId } });

//     if (!cart) {
//       const newCart = await prisma.cart.create({ data: { userId } });
//       await prisma.cartItem.create({ data: { cartId: newCart.id, foodId, quantity } });
//     } else {
//       const cartItem = await prisma.cartItem.findFirst({ where: { cartId: cart.id, foodId } });

//       if (cartItem) {
//         await prisma.cartItem.update({
//           where: { id: cartItem.id },
//           data: { quantity: cartItem.quantity + quantity },
//         });
//       } else {
//         await prisma.cartItem.create({ data: { cartId: cart.id, foodId, quantity } });
//       }
//     }

//     return res.status(200).json({ success: true, message: 'Product added to cart successfully' });
//   } catch (error) {
//     console.error('Failed to add product to cart', error);
//     return res.status(500).json({ success: false, message: 'Internal server error' });
//   }
// };

