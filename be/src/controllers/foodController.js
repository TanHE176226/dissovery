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

async function deleteFood(req, res) {
    const { id } = req.params;
    try {
        await prisma.food.delete({
            where: {
                id: parseInt(id)
            }
        });
        res.json({ message: 'Food deleted successfully' });
    } catch (error) {
        console.error('Failed to delete food:', error);
        res.status(500).json({ error: 'Failed to delete food' });
    }
}

async function searchByName(req, res) {
    try {
        const {id} = req.params; 
        const foods = await prisma.food.findMany()
        const filtedFoods = []
        foods.forEach(food => { if (food.Name.includes(id)){
        filtedFoods.push(food) 
    }})
        console.log(filtedFoods)
        res.send(filtedFoods)
    } catch (error) {
        console.error('Failed to get food:', error);
        res.status(500).json({ error: 'Failed to get food' });
    }
}


module.exports = {
    getAllFood,
    getFoodById,
    deleteFood,
    searchByName,
};