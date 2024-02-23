
import Producers from "../model/producers.js" 
export const create_producer=async(req,res)=>{
    try{
        const{name,gender,dob,bio}=req.body;
        const producer={
            "name":name,
            "gender":gender,
            "dob":dob,
            "bio":bio,
      }
   const new_producer=await new Producers(producer);
   await new_producer.save();
   return res.json({msg:"successfully created new producer"}) 

    }catch(err){
    return res.status(500).json({msg:err.message})
    }
}