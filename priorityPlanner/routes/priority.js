const express = require('express');
const models = require('../models');
var Sequelize = require('sequelize');
const Op = Sequelize.Op;

const PriorityController = {
  registerRouter() {
    const router = express.Router();

    router.get('/', this.get);                            // get all priorities 
    
    return router;
  },
  get(req, res) {
    models.Todo.findAll({
      where: {
        priority: {[Op.gte]: 8},
        completed: false
      }
    })
    .then(priority => {
      res.json(priority);
    });
  }
};

module.exports = PriorityController.registerRouter();
