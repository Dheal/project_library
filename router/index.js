const Router = require('express').Router();

const booksRouter = require('./books');
const racksRouter = require('./racks')
const userRouter = require("./user");

Router.use("/users", userRouter);
Router.use("/books",booksRouter);
Router.use("/racks",racksRouter);


module.exports = Router;