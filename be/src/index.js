const express = require('express');
const app = express();
const cors = require('cors');
const foodRoutes = require('./routes/footRoutes');

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

app.use(express.json());
app.use(express.static('public'));
app.use(cors({ origin: 'http://localhost:3000' }));

//định nghĩa các route cho ứng dụng của mình bằng cách sử dụng các phương thức HTTP như GET, POST, PUT, DELETE, vv:
app.get('/', function (req, res) {
  res.send('Hello world');
});

//sử dụng routes để đưa đường dẫn đúng controller xử lý
app.use('/getfood', foodRoutes);
app.use("/cart", require("./routes/cartRoute"));

app.listen(3001, function () {
  console.log('Example app listening on port 3001npm!');
});