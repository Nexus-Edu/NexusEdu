// Server Creation
const express = require('express')
const cors = require('cors')

const app = express()
app.use(express.json())

//port
const PORT = 5000;

// Default Route
app.get('/', (req, res) => {
    res.status(200).json({"message" : "Success, Thank you for using the NexusEdu API"});
})

//routers
const userRouter = require('./Routers/userRouter')
const userAccountRouter = require('./Routers/userAccountRouter')
const discussionRouter = require('./Routers/discussionBoardRouter')
const programRouter = require('./Routers/programsRouter')

app.use('/user', userRouter)
// app.use(userAccountRouter)
app.use('/board', discussionRouter)
app.use('/program', programRouter)


app.listen(PORT, () =>{
    console.log(`http://localhost:${PORT}/`)
})