const {StatusCodes} = require('http-status-codes')
const {logger} = require('../config')
const info = (req,res)=>{
    logger.info('Every time I refresesh whoho')
    logger.error("shit man there is an error")
    return res.status(StatusCodes.OK).json({
        success : true,
        message : "API is live",
        error : {},
        data : {}
    })

}

module.exports ={
    info
}