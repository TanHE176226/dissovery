const express = require('express');
const app = express();
const cors = require('cors');
const foodRoutes = require('./routes/footRoutes');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

app.use(cors({ origin: 'http://localhost:3000' }));

//định nghĩa các route cho ứng dụng của mình bằng cách sử dụng các phương thức HTTP như GET, POST, PUT, DELETE, vv:
app.get('/', function (req, res) {
  res.send('Hello world');
});

app.get('/SearchById/:id', async (req, res) => {
  const { id } = req.params;
  const foods = await prisma.food.findMany()
  const filtedFoods = []
  foods.forEach(food => {
    if (food.Name.includes(id)) {
      filtedFoods.push(food)
    }
  })
  console.log(filtedFoods)
  res.send(filtedFoods)
})
//sử dụng routes để đưa đường dẫn đúng controller xử lý
app.use('/getfood', foodRoutes);
app.post('/signup', async (req, res) => {
  const { FirstName, LastName, Email, Password } = req.body;

  try {
    const createdAccount = await prisma.account.create({
      data: {
        FirstName,
        LastName,
        Email,
        Password
      }
    });
    // console.log(req.body);
    res.json(createdAccount);
  } catch (error) {
    console.error(error);
    res.json("Error messis");
  }
  
})


app.post('/login', async (req, res) => {
  const { Email, Password } = req.body;

  console.log("This is email: " + Email);
  console.log("This is password: " + Password);
  const account = await prisma.account.findFirst({
    where: {
      Email,
      Password: String(Password) // Chuyển đổi Password thành chuỗi
    }
  });


  if (account != null) {
    res.json(account);
  } else {
    // Kiểm tra các trường hợp nhập sai và trả về mã lỗi tương ứng
    if (!Email && !Password) {
      res.status(400).json({ error: 'Email and password are required' });
    } else if (!Email) {
      res.status(400).json({ error: 'Email is required' });
    } else if (!Password) {
      res.status(400).json({ error: 'Password is required' });
    } else {
      res.status(401).json({ error: 'Invalid email or password' });
    }
  }
});

app.listen(3001, function () {
  console.log('Example app listening on port 3001npm!');
});


