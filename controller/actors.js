import Actors from "../model/actors.js" 
export const create_actor=async(req,res)=>{
    try{
        const{name,gender,dob,bio,movies}=req.body;
        const actor={
            "name":name,
            "gender":gender,
            "dob":dob,
            "bio":bio,
          "movies":movies,
      }
   const new_actor=await new Actors(actor);
   await new_actor.save();
   return res.json({msg:"successfully created new actor"}) 

    }catch(err){
    return res.status(500).json({msg:err.message})
    }
}