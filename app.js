const express = require('express');
const cors = require('cors');

const authRoute = require("./routes/authRoute.js");
const connectDB = require('./config/connection'); 

require('dotenv').config() ;
const app = express();


app.use(cors());
app.use(express.json({limit : "30mb", extended : true}));
app.use(express.urlencoded({limit : "30mb", extended : true}));
connectDB() ; 

app.use('/' ,  authRoute); 

app.listen(process.env.PORT); 