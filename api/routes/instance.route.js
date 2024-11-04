import express from 'express';
import { createInstance, getInstances } from '../controllers/instance.controller.js';

const router = express.Router();

router.post("/instances", createInstance);
router.get("/instances", getInstances); 

export default router;