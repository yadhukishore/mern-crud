import express from 'express';
import { createInstance, getInstanceById, getInstances, updateInstance } from '../controllers/instance.controller.js';

const router = express.Router();

router.post("/instances", createInstance);
router.get("/instances", getInstances); 
router.get("/edit/:id", getInstanceById); 
router.put("/edit/:id", updateInstance);

export default router;