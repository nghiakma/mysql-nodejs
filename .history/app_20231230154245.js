import express from 'express'
import { getUser,getUserById,createUser } from './index.js';
const app = express()
app.use(express.json())
app.get("/user", async (req,res) => {
    const user = await getUser();
    res.send(user)
})

app.get("/user/:id", async (req,res) => {
    const id = req.params.id
    const user = await getUserById(id)
    res.send(user)
})

app.post("/user", async (req,res) => {
    const {id_card,username} = req.body;
    const user = await createUser(id_card, username)
    res.send(user)
})

app.use((err,req,res,next)=>{
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

app.listen(8080,() => {
    console.log('Server is running on port 8080')
})