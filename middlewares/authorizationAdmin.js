"use strict";

const authorizationAdmin = async (req, res, next) => {
  try {
    const { userID, role } = req.user;

    if (role !== "administrator") {
      throw new Error('Anda bukan admin')
    }
    
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = authorizationAdmin;