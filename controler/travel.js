import mongoose, { isValidObjectId } from "mongoose";


import{travelModel}from "../models/travel.js"

export const getAllTravels=async(res,peq)=>{
  try{
    let travels=await travelModel.find();
    res.json(travels);
  }
  catch(err){
    res.status(404).json({tytle:"cant find all travels",message:err.message})
  }  
}
export const addTravel=async(req,res)=>{
    let{body}=req;
    if(!body.address)
        return res.status(404).json({tytle:"address required",message:"address is missing"})
    try{
        let newTravel=new travelModel(body);
        let travel=await newTravel.save();
        res.json(travel)
    }
    catch(err){
        res.status(400).json({tytle:"cant add travel",message:err.message})
    }
}
export const deleteTravelById=async(req,res)=>{
    let{id}=req.params;
    let {onWay}=req.body;
    if(!isValidObjectId(id))
        return res.status(404).json({tytle:"code isn't valid",message:"uncorrect code"})
    try{
        if(onWay==false)
            return id;
        let travel=await travelModel.findByIdAndDelete(id);
        if(!travel)
            return res.status(404).json({tytle:"cant delete travel",message:"no such code"})
        res.json(travel)
    }
    catch(err){
        res.status(400).json({tytle:"cant delete travel with this travel's code"})
    }
}
export const getByUserId=async (req,res)=>{
    let{codeUser}=req.body;
    if(!isValidObjectId(codeUser))
        return res.status(404).json({tytle:"no valid",message:"un correct user id"})
    try{
        let travels=await travelModel.find({codeUser:codeUser});
        if(!travels)
            return res.status(404).json({tytle:"you dont have travels",message:"lets order your first travel"})
        res.json(travels)
    }
    catch(err){
        res.status(400).json({tytle:"cant show your travels",message:err.message})
    }
}
export const updateTravel=async(req,res)=>{
    let{id}=req.params;
    let{onWay}=req.body;
    if(!isValidObjectId(id))
        res.status(404).json({tytle:"not valid",message:"un correct id"})
    if(!id)
        res.status(404).json({tytle:"no such id",message:"id not found"})
    try{
        let travel=await travelModel.findByIdAndUpdate(id,onWay,{new:true})
        if(!travel)
            res.status(404).json({tytle:"cant update this traveling",message:"no such travel with such id"})
        res.json(travel)
    }
    catch(err){
        res.status(400).json({tytle:"cant update your travel",message:err.message})
    }
}
