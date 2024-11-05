import express from 'express';
import { createInstance, getInstanceById, getInstances, softDeleteInstance, updateInstance } from '../controllers/instance.controller.js';

const router = express.Router();

router.post("/instances", createInstance);
router.get("/instances", getInstances); 
router.get("/edit/:id", getInstanceById); 
router.put("/edit/:id", updateInstance);
router.put("/soft-delete/:id", softDeleteInstance);

export default router;