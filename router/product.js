import express, { Router } from "express"
import{getAllTaxies,getTaxiById,addTaxi,deleteTaxiById,updateTaxiById}from"../controler/product.js"

const router=Router();
router.get=('/',getAllTaxies);
router.get=('/:id',getTaxiById);
router.post('/',addTaxi);
router.delete('/:id',deleteTaxiById);
router.put('/:id',updateTaxiById);
export default router;