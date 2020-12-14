"use strict";

const bcrypt = require("bcryptjs");
const userModel = require("../models/user");

class User {
  static async register(req, res, next){
    try {
      const { username, password ,role} = req.body;

      const userData = {
        username: username,
        password: bcrypt.hashSync(password),
        role : role,
      };

      const user = await userModel.create(userData);

      res.status(201).json({
        user: user,
      });
    } catch (error) {
      next(error);
    }
  };

  
}

module.exports = User;
