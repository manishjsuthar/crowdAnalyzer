require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
const mongoString = process.env.MONGODB_URL;

mongoose.connect(mongoString,{
    //must add in order to not get any error masseges:
    useUnifiedTopology:true,
    useNewUrlParser: true
});
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();
app.use(express.json());

const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const routes = require('./routes/routes');

app.use('/api', routes)

app.get('/', (req, res) => {
    res.send('running');
})

app.listen(5000, () => {
    console.log(`Server Started at ${5000}`)
})