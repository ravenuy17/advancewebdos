const mongoose = require("mongoose")

const NewsSchema = mongoose.Schema({
   heading:String,
   description:String,
   time:String,
   image:String,
})

module.exports = mongoose.model("News", NewsSchema);