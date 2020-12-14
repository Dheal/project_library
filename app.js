"use strict"

const express = require('express');
const cors = require("cors");
const mongoose = require('mongoose');
const mongooseURL = "mongodb://localhost:27017/library";
const errorHandler = require("./middlewares/errorHandler");
const Router = require('./router');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(Router);
app.use(errorHandler);

mongoose.connect(mongooseURL,{useCreateIndex:true, useUnifiedTopology:true,useNewUrlParser: true,useFindAndModify: false})
.then(()=>{
    console.log(`connect to mongoDB`);
})
.catch((err)=>{
    console.log(err);
})
app.listen(3000,()=>{
    console.log(`server ready listening on port 3000`)
})




//routing
// const booksModel = require('./models/books');
// app.get("/books",async (req,res)=>{
//     try {
//         const booksList = await booksModel.find();

//         res.status(200).json({
//             books: booksList,
//         })
//     } catch (error) {
//         console.log(error);
//     }
// })