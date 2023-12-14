const mongoose = require('mongoose');
const DataSchema = mongoose.Schema(
    {
        productID:{type:mongoose.Schema.Types.ObjectId, require:true},
        userID:{type:mongoose.Schema.Types.ObjectId, require:true}
    },
    {
        timestamps:true,
        versionKey:false
    }
)
let WishModel = mongoose.model('wishes' ,DataSchema)
module.exports = WishModel;