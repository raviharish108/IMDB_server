import mongoose from "mongoose";
const producerSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    gender:{
        type: String,
        required: true
    },
    dob:{
        type: Date,
        default: Date.now
    },
    bio:{
        type: String,
        required: true
    },
    producedmovies: {
        type: [String],
      },
},{
    timestamps: true
})

export default mongoose.model("Producers",producerSchema)