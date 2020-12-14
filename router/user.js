"use strict";

const Router = require("express").Router();

const userController = require("../controllers/user");
const userLogin = require("../controllers/books");

Router.post("/register", userController.register);
Router.post("/login",userLogin.login);


module.exports = Router;
