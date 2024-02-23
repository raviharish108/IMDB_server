import Movies from "../model/movies.js" 
export const create_movie=async(req,res)=>{
    try{
        const{moviename,YOR,plot,poster}=req.body;
        const movie={
            "moviename":moviename,
            "YOR":YOR,
            "plot":plot,
            "poster":poster,
      }
   const new_movie=await new Movies(movie);
   await new_movie.save();
   return res.json({msg:"successfully created new movie"}) 
    }catch(err){
    return res.status(500).json({msg:err.message})
    }
}