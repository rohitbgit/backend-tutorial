


//promises

const asyncHandler =(requestHandler)=>{
    (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).catch((error)=>next(error))
    }
}

//try catch
// const asyncHandler =(fun) => async (req,res,next) => {
//     try {
//         await fun(req,res,next)
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success : true,
//             message : err.message
//         })
//     }
// } // high order function (take function as a parameter or variable)

export {asyncHandler}