const express = require('express');
const models = require('../models');
var Sequelize = require('sequelize');
const Op = Sequelize.Op;

const BacklogController = {
  registerRouter() {
    const router = express.Router();

    router.get('/', this.get);                            // get all priorities 
    
    return router;
  },
  get(req, res) {
    models.Todo.findAll({
      where: {
        priority: {[Op.lt]: 5},
        completed: false
      }
    })
    .then(backlog => {
      res.json(backlog);
    });
  }
};

module.exports = BacklogController.registerRouter();
