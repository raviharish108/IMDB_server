import mongoose from "mongoose";
const movieSchema = new mongoose.Schema({
    moviename:{
        type: String,
        required: true
    },
    YOR:{
        type: Number,
        required: true
    },
    plot:{
        type: String,
        required:true
    },
    poster:{
        type: String,
        required: true
    },
    actors: {
        type: [String],
      },
},{
    timestamps: true
})
export default mongoose.model("Movies",movieSchema)