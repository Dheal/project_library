"use strict";

const authorization = async (req, res, next) => {
  try {
    const { userID, role } = req.user;

    if (role === "user" || role === "administrator") {
      // throw new Error("not authorize action");
      next();
    }
    
    // next();
  } catch (error) {
    next(error);
  }
};

module.exports = authorization;
