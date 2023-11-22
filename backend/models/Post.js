const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({}, { timestamps: true });

module.exports = mongoose.model("Post", PostSchema);
