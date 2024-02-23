import express from "express"
import {create_actor} from "../controller/actors.js"
const router= express.Router();
router.post("/createactor",create_actor)
export default router;