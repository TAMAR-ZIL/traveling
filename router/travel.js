import express, { Router } from"express"

import{ getAllTravels,addTravel,deleteTravelById,updateTravel,getByUserId}from"../controler/travel.js"

const router=Router();
router.get("/",getAllTravels);
router.get("/:userId",getByUserId);
router.post("/",addTravel);
router.delete("/:id",deleteTravelById);
router.put("/:id",updateTravel);

export default router;