const mongoose= require('mongoose')

const DataSchema= mongoose.Schema({

    name:String,
    userN:String,
    mail:String,
    phoneNo:String,
    pass:String,
    confpass:String,
    genderS:String

})
module.exports=mongoose.model('userName',DataSchema);