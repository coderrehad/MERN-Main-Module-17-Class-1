const mongoose = require('mongoose');
const DataSchema = mongoose.Schema(
    {
        categoryName:{type:String, require:true, unique:true},
        categoryImg:{type:String, require:true}
    },
    {
        timestamps:true,
        versionKey:false
    }
)
let CategoryModel = mongoose.model('categories' ,DataSchema)
module.exports = CategoryModel;