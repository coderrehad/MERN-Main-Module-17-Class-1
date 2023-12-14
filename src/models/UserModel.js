const mongoose = require('mongoose');
const DataSchema = mongoose.Schema(
    {
        email:{type:String, require:true},
        otp:{type:String, require:true},
    },
    {
        timestamps:true,
        versionKey:false
    }
)
let UserModel = mongoose.model('users' ,DataSchema)
module.exports = UserModel;