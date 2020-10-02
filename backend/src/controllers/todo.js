const express = require('express');
const Todo = require('../models/todo')

const router = express.Router();

router.get('/', async (req, res) => {

    const result = await Todo.find()

    res.json(result);
})

router.post('/', async (req, res) => {
    const {title, body} = req.body

    const todo = new Todo({title, body})

    const result = await todo.save()

    res.json(result);
})

router.get('/:id', async (req, res) => {
    const id = req.params.id

    const result = await Todo.findOne({_id: id})

    res.json(result);
})








module.exports = router;