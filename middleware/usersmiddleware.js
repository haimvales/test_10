import { getFirstByValue } from "../dal/usersdal.js"


export const correctNumberOfKeys = async (req, res, next) => {
    if (Object.keys(req.body).length !== 2 ) {
        return res.status(400).json("Incorrect key number")
    }
    else
        next()
}

export const correctKeys = async (req, res, next) => {
    if (!req.body.username || !req.body.password ) {
        return res.status(400).json("Incorrect keys")
    }
    else
        next()
}

export const IsTheTypeCorrectr = async (req, res, next) => { 
    for (const property in req.body) {
        if ( typeof(req.body[property]) !== 'string') 
            return res.status(400).json(`${property} is not a string`)}
    next()
}

export const existingReportNumber = async (req, res, next) => {
    try {
        const fieldCode = await getFirstByValue('users', 'username', req.body.username)
        if (fieldCode)
            return res.status(409).json("Conflict")
        next()
    } catch (err) {
        return { err: err.name }
    }
}








export const validateUser = async (req, res, next) => {
    try {
        const fieldCode = await getFirstByValue('users', 'username', req.params.username)
        if (!fieldCode)
            return res.status(401).json({msg:'Unauthorized'})
        next()
    } catch (err) {
        return { err: err.name }
    }
}

// const validateUserKeyNumber = async (req,res,next)=>{
//     const {username,password} =  req.params
//     try{
//        users = await fileJsonToArr("./db/users.json") 
//     }catch(err){
//         res.json({err:err.name})
//     }
//     const findUser = users.find((user) => {return user.username === username && user.password === password})
//     if (findUser){
//         next()        
//     }
//     else
//         return res.status(401).json({msg:'Unauthorized'}) 
// }
