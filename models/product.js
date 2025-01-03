import { Schema,model } from "mongoose";
export const driverSchema=Schema({
    name:String,
    phone:String,
    email:String
})

export const taxiSchema=Schema({
nameProduct:String,
description:String,
colorTaxi:String,
creationDate:{type:Date,default:new Date()},
driver:driverSchema
})
export const taxiModel=model("taxi",taxiSchema)