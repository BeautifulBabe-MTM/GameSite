const { Schema, model } = require("mongoose");

const GameSchema = new Schema({
    Title: { type: String, required: true },
    Img: { type: String, required: true },
    Desc: { type: String, required: true },
    Price: { type: String, required: true }
});

module.exports = model('Games', GameSchema);