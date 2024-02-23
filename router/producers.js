import express from "express"
import {create_producer} from "../controller/producers.js"
const router= express.Router();
router.post("/createproducers",create_producer)
export default router;