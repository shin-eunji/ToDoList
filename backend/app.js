const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const Health = require('./src/controllers/health')
const Todo = require('./src/controllers/todo')


dotenv.config();

const app = express();

mongoose.connect('mongodb+srv://shineunji:wl1692@cluster0.rmdi0.mongodb.net/todos?retryWrites=true&w=majority')
    .then((res) => {
        console.log("성공입니다!!!!!");
    })
    .catch(err => {
        console.log("에러입니다!!!!!", err);
    })


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/health', Health)
app.use('/todo', Todo)

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server on ${PORT}`);
})