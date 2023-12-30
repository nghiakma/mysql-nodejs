import express from 'express'
import dotenv from 'dotenv'
import {router} from './routes/userRouter.js'
dotenv.config()
const app = express()


app.use(express.json())


app.use("/api",)

app.use((err,req,res,next)=>{
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

app.listen(8080,() => {
    console.log('Server is running on port 8080')
})