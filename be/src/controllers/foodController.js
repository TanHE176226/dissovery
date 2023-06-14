const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getFoodById(req, res) {
    const { id } = req.params;
    try {
        const food = await prisma.food.findUnique({ where: { FoodID: Number(id) } });
        res.json(food);
    } catch (error) {
        console.error('Failed to get food:', error);
        res.status(500).json({ error: 'Failed to get food' });
    }
}

async function getAllFood(req, res) {
    try {
        const foods = await prisma.food.findMany();
        res.json(foods);
    } catch (error) {
        console.error('Failed to get food:', error);
        res.status(500).json({ error: 'Failed to get food' });
    }
}

module.exports = {
    getAllFood,
    getFoodById,
};