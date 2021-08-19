
require('dotenv').config({path:__dirname+'/.env'}); 
require('./config/mongoose.config'); 
const cors = require('cors');

const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

app.use(cookieParser());
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));


require('./routes/route.routes')(app);
app.listen(8000, () => {
    console.log("Listening at Port 8000")
})

