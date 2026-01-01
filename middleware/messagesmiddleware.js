


export const correctNumberOfKeysM = async (req, res, next) => {
    if (Object.keys(req.body).length !== 2 ) {
        return res.status(400).json("Incorrect key number")
    }
    else
        next()
}

export const correctKeysM = async (req, res, next) => {
    if (!req.body.encrypted_text && !req.body.cipher_type ) {
        return res.status(400).json("Incorrect keys")
    }
    else
        next()
}

export const IsTheTypeCorrectrM = async (req, res, next) => { 
    for (const property in req.body) {
        if ( typeof(req.body[property]) !== 'string') 
            return res.status(400).json(`${property} is not a string`)}
    next()
}