const express = require('express');
const app = express();
const cors = require('cors');
const foodRoutes = require('./routes/footRoutes');

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

app.use(cors({ origin: 'http://localhost:3000' }));

// app.get('/', function (req, res) {
//   res.send('Hello world');
// });
const corsOptions = {
  origin: "http://localhost:3000",
};

app.use('/getfood', foodRoutes);


app.post('/Shop', async(req, res) => {
  const food = await prisma.food.findMany()
  console.log(food)
  res.send(food);
});

app.get('/SearchById/:id', async(req,res) => {
  const {id} = req.params; 
 
  const foods = await prisma.food.findMany()
  const filtedFoods = []
  foods.forEach(food => { if (food.Name.includes(id)){
    filtedFoods.push(food) 
  }})
  console.log(filtedFoods)
    res.send(filtedFoods) 
  })
 
app.listen(3001, function () {
  console.log('Example app listening on port 3001npm!');
});