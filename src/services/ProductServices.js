const mongoose = require('mongoose');
const BrandModel = require('../models/BrandModel');
const CategoryModel = require('../models/CategoryModel');
const ProductSliderModel = require('../models/ProductSliderModel')
const ProductModel = require('../models/ProductModel')

const ObjectId = mongoose.Types.ObjectId;

const  BrandListService= async ()=>{
    try{
        let result = await BrandModel.find();
        return {status: "success", data:result}
    }catch (e) {
        return {status: "fail", data:e}.toString()
    }
}

const  CategoryListService= async ()=>{
    try{
        let result = await CategoryModel.find();
        return {status: "success", data:result}
    }catch (e) {
        return {status: "fail", data:e.toString()}
    }
}

const  SliderListService= async ()=>{
    try{
        let result = await ProductSliderModel.find();
        return {status: "success", data:result}
    }catch (e) {
        return {status: "fail", data:e.toString()}
    }
}

const ListByBrandService = async (req) => {

    try {
        let BrandID=new ObjectId(req.params.BrandID);
        let MatchStage={$match:{brandID:BrandID}}
        let JoinWithBrandStage = {$lookup:{from:'brands', localField:'brandID', foreignField:'_id', as:'brand'}};
        let JoinWithCategoryStage = {$lookup:{from:'categories', localField:'categoryID', foreignField:'_id', as:'category'}}

        let UnwindBrandStage={$unwind:"$brand"};
        let UnwindCategoryStage={$unwind:"$category"};
        let ProjectionStage = {$project: {'brand._id':0, 'category._id':0, 'categoryID':0, 'brandID':0, 'createdAt':0,
                'updatedAt':0,'brand.createdAt':0,'brand.updatedAt':0,'category.createdAt':0,'category.updatedAt':0, }};

        //Query
        let data= await  ProductModel.aggregate([
            MatchStage,
            JoinWithBrandStage,
            JoinWithCategoryStage,
            UnwindBrandStage,
            UnwindCategoryStage,
            ProjectionStage
        ])
        return {status:"success",data:data}

    }catch (e) {
        return {status:"fail",data:e.toString()}
    }
};



const ListByCategoryService = async (req) => {

    try {
        let CategoryID=new ObjectId(req.params.CategoryID);
        let MatchStage={$match:{categoryID:CategoryID}}
        let JoinWithBrandStage = {$lookup:{from:'brands', localField:'brandID', foreignField:'_id', as:'brand'}};
        let JoinWithCategoryStage = {$lookup:{from:'categories', localField:'categoryID', foreignField:'_id', as:'category'}}

        let UnwindBrandStage={$unwind:"$brand"};
        let UnwindCategoryStage={$unwind:"$category"};
        let ProjectionStage = {$project: {'brand._id':0, 'category._id':0, 'categoryID':0, 'brandID':0, 'createdAt':0,
                'updatedAt':0,'brand.createdAt':0,'brand.updatedAt':0,'category.createdAt':0,'category.updatedAt':0, }};

        //Query
        let data= await  ProductModel.aggregate([
            MatchStage,
            JoinWithBrandStage,
            JoinWithCategoryStage,
            UnwindBrandStage,
            UnwindCategoryStage,
            ProjectionStage
        ])
        return {status:"success",data:data}

    }catch (e) {
        return {status:"fail",data:e.toString()}
    }
}



const ListByRemarkService = async (req) => {

    try {
        let Remark= req.params.Remark;
        let MatchStage={$match:{remark:Remark}}
        let JoinWithBrandStage = {$lookup:{from:'brands', localField:'brandID', foreignField:'_id', as:'brand'}};
        let JoinWithCategoryStage = {$lookup:{from:'categories', localField:'categoryID', foreignField:'_id', as:'category'}}

        let UnwindBrandStage={$unwind:"$brand"};
        let UnwindCategoryStage={$unwind:"$category"};
        let ProjectionStage = {$project: {'brand._id':0, 'category._id':0, 'categoryID':0, 'brandID':0, 'createdAt':0,
                'updatedAt':0,'brand.createdAt':0,'brand.updatedAt':0,'category.createdAt':0,'category.updatedAt':0, }};

        //Query
        let data= await  ProductModel.aggregate([
            MatchStage,
            JoinWithBrandStage,
            JoinWithCategoryStage,
            UnwindBrandStage,
            UnwindCategoryStage,
            ProjectionStage
        ])
        return {status:"success",data:data}

    }catch (e) {
        return {status:"fail",data:e.toString()}
    }
}




module.exports = {
    BrandListService,
    CategoryListService,
    SliderListService,
    ListByBrandService,
    ListByCategoryService,
    ListByRemarkService
};