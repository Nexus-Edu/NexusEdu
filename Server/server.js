const express = require('express')

const app = express()
app.use(express.json())

//routers
const routers = require('./Routers/routers')

//port
const PORT = process.env.PORT || 5000;
app.use(routers)

app.listen(PORT, () =>{
    console.log('Hope your day is going great!')
})