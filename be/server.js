const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();
dotenv.config();
port = process.env.PORT || 3000;

app.use(cookieParser());
app.use(express.json());
app.use(cors({
   origin: 'http://localhost:3000'
 }));


var routes = require('./routes/routes');
routes(app);

app.listen(8800, () => {
   console.log("🚀 Server ready at http://localhost:8800");
});