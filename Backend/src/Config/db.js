const mongoose=require("mongoose")
 
const Connect=mongoose.connect( "mongodb+srv://itsdipakpawar4206:processtech@cluster0.zsrxzbf.mongodb.net/UserData?retryWrites=true&w=majority")

module.exports={Connect}