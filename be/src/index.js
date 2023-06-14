const express = require('express');
const app = express();
const cors = require('cors');
const foodRoutes = require('./routes/footRoutes');

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

app.use(cors({ origin: 'http://localhost:3000' }));

//định nghĩa các route cho ứng dụng của mình bằng cách sử dụng các phương thức HTTP như GET, POST, PUT, DELETE, vv:
app.get('/', function (req, res) {
  res.send('Hello world');
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
//sử dụng routes để đưa đường dẫn đúng controller xử lý
app.use('/getfood', foodRoutes);

app.listen(3001, function () {
  console.log('Example app listening on port 3001npm!');
});


