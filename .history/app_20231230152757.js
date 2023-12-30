import express from 'express'
import { getUser,getUserById,createUser } from './index.js';
const app = express()

app.get("/user", async (req,res) => {
    const user = await getUser();
    res.send(user.tojson())
})

app.use((err,req,res,next)=>{
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

app.listen(8080,() => {
    console.log('Server is running on port 8080')
})