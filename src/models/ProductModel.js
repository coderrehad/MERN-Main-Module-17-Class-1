const mongoose = require('mongoose');
const DataSchema = mongoose.Schema(
    {
        title:{type:String, require:true},
        shortDes:{type:String, require:true},
        price:{type:String, require:true},
        discount:{type:String, require:true},
        discountPrice:{type:String, require:true},
        image:{type:String, require:true},
        star:{type:String, require:true},
        stock:{type:String, require:true},
        remark:{type:String, require:true},
        categoryID:{type:mongoose.Schema.Types.ObjectId, require:true},
        brandID:{type:mongoose.Schema.Types.ObjectId, require:true},
    },
    {
        timestamps:true,
        versionKey:false
    }
)
let ProductModel = mongoose.model('products' ,DataSchema)
module.exports = ProductModel;