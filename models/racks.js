"use strict";

const mongoose = require("mongoose");

const rackSchema = new mongoose.Schema(
    {
        section:{
            type: String,
            required: true,
        },
        number:{
            type:Number,
            required: true,
        },
        floor:{
            type: Number,
            required: true,
        },
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

const Racks = mongoose.model("racks",rackSchema);
module.exports = Racks;