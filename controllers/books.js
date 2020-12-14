const booksModel = require('../models/books');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userModel = require("../models/user");

class BooksController{
    static async login(req, res, next){
        try {
          const { username, password } = req.body;
    
          const user = await userModel.findOne({
            username: username,
          });
    
          if (!user) {
            throw new Error("invalid username / password");
          }
    
          if (!bcrypt.compareSync(password, user.password)) {
            throw new Error("invalid username / password");
          }
    
          const tokenPayload = {
            userID: user._id,
          };
    
          const jwtToken = jwt.sign(tokenPayload, "crimsonSecr3t");
    
          res.status(200).json({
            message: "login success",
            accesToken: jwtToken,
          });
        } catch (error) {
          next(error);
        }
      };

    static async get(req,res){
        try {
            const books = await booksModel.find();
            res.status(200).json({
                books: books,
            })
        } catch (error) {
            console.log(error);
        }
    }

    static async addBooks(req,res){
        try {
            const{author, title, published_year,rack} = req.body;
            // const author ='Andrea Hirata';
            // const title ='Laskar Pelangi';
            // const published =2008;

            const books = await booksModel.create({
                author: author,
                title: title,
                published_year: published_year,
                rack: rack,
            });

            res.status(201).json({
                message: "book created",
                book: books,
            })
        } catch (error) {
            res.status(500).json({
                error: error,
            })
        }
    }

    static async deleteBook(req,res){
        try {
            // const temukanID = await booksModel.findById(req.params.id)
            // const del = await temukanID.deleteOne()
            const hapusID = await booksModel.findByIdAndDelete(req.params.id)

            res.status(201).json({
                message: "book deleted",
                book: hapusID,
            })
        } 
        catch (error) {
            res.status(500).json({
                error: error,
            })
        }
    }

    static async editBook(req,res){
        try {
            const editID = await booksModel.findByIdAndUpdate(req.params.id,{$set:req.body})


            res.status(201).json({
                message: "book updated",
                book: editID,
            })
        
        } catch (error) {
            res.status(500).json({
                message: "filed",
                error: error,
            })  
        }
    }
}

module.exports = BooksController;
