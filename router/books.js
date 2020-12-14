const Router = require('express').Router();

const booksController = require('../controllers/books');
const authentication = require("../middlewares/authentication");
const authorization = require("../middlewares/authorization");
const authorizationAdmin = require("../middlewares/authorizationAdmin")

Router.get('/',authentication, authorization,booksController.get);
Router.post('/',authentication, authorizationAdmin, booksController.addBooks);
Router.delete('/:id',authentication, authorizationAdmin, booksController.deleteBook);
Router.patch('/:id',authentication, authorizationAdmin, booksController.editBook);

module.exports = Router;