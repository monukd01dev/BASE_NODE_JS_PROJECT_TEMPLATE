const {format,createLogger,transports} = require('winston')
const {combine,timestamp,colorize,printf} = format

const myLogFormat = printf(({level,message,timestamp})=>{
    return `${timestamp} [${level}]: ${message}`
})

const logger = createLogger({
    level : 'info',
    format : combine(
        timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
        colorize(),
        myLogFormat
    ),
    transports : [
        new transports.Console(),
        new transports.File({filename:'combined.log'})
    ]
})

module.exports = logger