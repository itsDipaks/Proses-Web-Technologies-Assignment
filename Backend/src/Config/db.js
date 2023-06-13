const mongoose=require("mongoose")

const Connect=mongoose.connect(process.env.MONGO_URL)

module.exports={Connect}