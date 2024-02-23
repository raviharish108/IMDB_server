import express from "express"
import {create_movie} from "../controller/movies.js"
const router= express.Router();
router.post("/createmovie",create_movie)
export default router;