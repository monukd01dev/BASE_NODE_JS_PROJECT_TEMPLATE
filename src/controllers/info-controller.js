const {StatusCodes} = require('http-status-codes')
const {logger} = require('../config')
const { ResponseObject } = require('../utils')
const info = (req,res)=>{

    return res.status(StatusCodes.OK).json(
        new ResponseObject(true,'API is Live')
    )

}

module.exports ={
    info
}