const asyncHandler = (fn) => async(req,res,next)=>  {
    try {
        await fn(req,res,next);
    } catch (error) {
        res.status(error.status || 500).json({
            success: false,
            message: error.message 
        })
    }
}

module.exports = asyncHandler; 
/**  
 * ()()
 * const outerFunction (){
 * return innerFunction(req,res,next);}
 * OR
 * const outerFunction = () => innerFunction(req,res,next)=>{}
 * same
 */