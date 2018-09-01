const express = require('express');
const models = require('../models');
var Sequelize = require('sequelize');
const Op = Sequelize.Op;

const CompletedController = {
  registerRouter() {
    const router = express.Router();

    router.get('/', this.get);                            // get all priorities 
    
    return router;
  },
  get(req, res) {
    models.Todo.findAll({
      where: {
        completed: 'true'
      }
    })
    .then(priority => {
      res.json(priority);
    });
  }
};

module.exports = CompletedController.registerRouter();
