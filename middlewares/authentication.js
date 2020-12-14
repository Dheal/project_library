"use strict";

const jwt = require("jsonwebtoken");

const userModel = require("../models/user");

const authentication = async (req, res, next) => {
  try {
    const { accesstoken } = req.headers;
    if (!accesstoken) {
      throw new Error("token reqired");
    }
    //validasi token
    const payload = jwt.verify(accesstoken, "crimsonSecr3t");

    //lakukan proses validasi ke database user
    const user = await userModel.findById(payload.userID);

    req.user = {
      userID: user._id,
      role: user.role,
    };

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = authentication;
