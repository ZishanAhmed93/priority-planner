const express = require('express');
const models = require('../models');
var Sequelize = require('sequelize');
const Op = Sequelize.Op;

const TasksController = {
  registerRouter() {
    const router = express.Router();

    router.get('/', this.get);                            // get all priorities 
    
    return router;
  },
  get(req, res) {
    models.Todo.findAll({
      where: {
        priority: {[Op.between]: [5,7] },
        completed: false
      }
    })
    .then(task => {
      res.json(task);
    });
  }
};

module.exports = TasksController.registerRouter();
