const express = require('express');
const Todo = require('../models/todo')

const router = express.Router();

router.get('/', async (req, res) => {

    const result = await Todo.find()

    res.json(result);
})

router.post('/', async (req, res) => {
    console.log("req.body", req.body);
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

router.put('/:id', async (req, res) => {

    const id = req.params.id
    const {title, body} = req.body;

    const result = await Todo.updateOne({_id: id}, {title, body})

    res.json(result);
})


router.delete('/:id', async (req, res) => {
    const id = req.params.id

    const result = await Todo.deleteOne({_id: id})

    res.json(result);
})








module.exports = router;