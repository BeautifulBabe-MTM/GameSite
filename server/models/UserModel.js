const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
    Name: { type: String, required: true },
    Admin: { type: Boolean, required: true }
});

module.exports = model('Users', UserSchema);