const express = require('express');
const app = express();
const cors = require('cors');
const foodRoutes = require('./routes/footRoutes');

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.json());
app.use(express.static('public'));
app.use(cors({ origin: 'http://localhost:3000' }));

//định nghĩa các route cho ứng dụng của mình bằng cách sử dụng các phương thức HTTP như GET, POST, PUT, DELETE, vv:
app.get('/', function (req, res) {
  res.send('Hello world');
});


//sử dụng routes để đưa đường dẫn đúng controller xử lý
app.use('/getfood', foodRoutes);
app.use('/cart',require("./routes/cartRoute"));


//Sign Up 
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
    res.json("Error");
  }
})

//Login
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

