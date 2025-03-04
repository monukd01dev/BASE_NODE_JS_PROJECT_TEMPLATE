const {PORT} = require('./config/server-config');
const express = require('express');
const apiRoutes = require('./routes')

const app = express();

app.use('/api', apiRoutes)

app.listen(PORT,()=>{
    console.log(`Starter Template is Up and Running on PORT : ${PORT}`)
})
