const mongoose = require('mongoose');
const DataSchema = mongoose.Schema(
    {
        productID:{type:mongoose.Schema.Types.ObjectId, require:true},
        userID:{type:mongoose.Schema.Types.ObjectId, require:true},
        color:{type:String, require:true},
        price:{type:String, require:true},
        qty:{type:String, require:true},
        size:{type:String, require:true},
    },
    {
        timestamps:true,
        versionKey:false
    }
)
let CartModel = mongoose.model('carts' ,DataSchema)
module.exports = CartModel;