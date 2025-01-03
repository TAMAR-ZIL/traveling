import mongoose, { isValidObjectId } from "mongoose";


import{taxiModel}from"../models/product.js"

export const getAllTaxies=async(res,peq)=>{
  try{
    let taxies=await taxiModel.find();
    res.json(taxies);
  }
  catch(err){
    res.status(404).json({tytle:"cant find all taxies",message:err.message})
  }  
}
export const getTaxiById=async(res,peq)=>{
    let {id}=req.params;
    if(!isValidObjectId(id))
        return res.status(404).json({tytle:"invalid code",message:"this is not a correct code"})
    try{
      let code=await taxiModel.findById(id);
      res.json(code);
    }
    catch(err){
      res.status(400).json({tytle:"cant get by code",message:err.message})
    }  
}
export const addTaxi=async(req,res)=>{
    let{body}=req;
    if(!body.nameProduct||!body.driver)
        return res.status(404).json({tytle:"taxi name and driver details required",message:"taxi name or driver details are missing"})
    if(body.nameProduct.length <= 2)
        return res.status(400).json({title:"cannt add taxi", massage: "name is too short"})
    try{
        let newTaxi=new taxiModel(body);
        let taxi=await newTaxi.save();
        res.json(taxi)
    }
    catch(err){
        res.status(400).json({tytle:"cant add taxi",message:err.message})
    }
}
export const deleteTaxiById=async(req,res)=>{
    let{id}=req.params;
    if(!isValidObjectId(id))
        return res.status(404).json({tytle:"code isn't valid",message:"uncorrect code"})
    try{
        let taxi=await taxiModel.findByIdAndDelete(id);
        if(!taxi)
            return res.status(404).json({tytle:"cant delete taxi",message:"no such code"})
        res.json(taxi)
    }
    catch(err){
        res.status(400).json({tytle:"cant delete taxi with this taxi's code"})
    }
}
export const updateTaxiById=async (req,res)=>{
    let{id}=req.params;
    let{body}=req;
    if(!isValidObjectId||!body)
        return res.status(404).json({tytle:"invalid details",message:"code isnt correct or no such taxi"})
    if(body.nameProduct.length<2)
        return res.status(404).json({tytle:"uncorrect detail",message:"name is too short"})
    try{
        let taxi=await taxiModel.findByIdAndUpdate(id,req.body,{new:true})
        if(!taxi)
            return res.status(404).json({tytle:"cant update this taxi",message:"no such taxi with such code"})
    }
    catch(err){
        res.status(400).json({tytle:"cannt update taxi",message:err.massage})
    }
}


