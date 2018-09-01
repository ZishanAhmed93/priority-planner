const express = require('express');
const models = require('../models');
var Sequelize = require('sequelize');
const Op = Sequelize.Op;

const TodoController = {
  registerRouter() {
    const router = express.Router();

    router.get('/:id', this.getById);                     // get a specific todo
    router.post('/', this.create);                        // create a todo
    router.put('/:id', this.updateTodo);

    return router;
  },
  
  getById(req, res) {
    models.Todo.findOne({
      where: {id: parseInt(req.params.id)},
    })
    .then(todo => {
      res.json(todo);
    });
  },
  create(req, res) { 
    models.Todo.create({
      title: req.body.title,
      description: req.body.description,
      priority: req.body.priority,
      due: req.body.due,
      completed: 'false',
    })
    .then(todo => res.json(todo))
    .catch(err => {
      res.sendStatus(400);
    });
  },
  updateTodo(req, res) {
    // const {title, description, priority, due, completed} = req.body;
    
    // const title = req.body.title;
    // const description = req.body.description;
    // const priority = req.body.priority;
    // const due = req.body.due;
    // const completed = req.body.completed;

    models.Todo.update({
      title: req.body.title,
      description: req.body.description,
      priority: req.body.priority,
      due: req.body.due,
      completed: req.body.completed
    }, {
      where: {
        id: req.params.id
      }
    })
    .then(todo => {
      res.sendStatus(200); // OK status
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(400);  // Bad request
    });
  }
};

module.exports = TodoController.registerRouter();
