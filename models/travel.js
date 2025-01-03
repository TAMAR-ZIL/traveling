import { Schema,model,ObjectId } from "mongoose";
import { taxiSchema } from "./product.js";

export const travelSchema=Schema({
    date:{type:Date,default:new Date()},
    travelDate:{type:Date,default:new Date()},
    address:String,
    codeUser:{type:ObjectId,ref:"user"},
    taxi:taxiSchema,
    onWay:Boolean,
    counterPrice:{type:Number,default:20},
    kilometers:Number
})
export const travelModel=model("travel",travelSchema);
