const Router = require('express').Router();

const racksController = require('../controllers/racks');

Router.get('/',racksController.get);
Router.post('/', racksController.addRacks);
Router.delete('/:id', racksController.deleteRacks);
Router.patch('/:id', racksController.editRacks);

module.exports = Router;