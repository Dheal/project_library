"use strict";

const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
    {
        author:{
            type: String,
            required: true,
        },
        title:{
            type:String,
            required: true,
        },
        published_year:{
            type: Number,
            required: true,
        },
        rack:{
            type: mongoose.Types.ObjectId, 
            ref: 'racks',
        },
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

const Books = mongoose.model("books",bookSchema);
module.exports = Books;