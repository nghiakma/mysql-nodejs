import { getUser,getUserById,createUser,updateUserById } from '../models/userModel.js'

export async function getAll(){
    const user = await getUser();
    res.send(user)
};

export async function getById(){
    const id = req.params.id
    const user = await getUserById(id)
    res.send(user)
};

export async function add(){
    const {id_card,username} = req.body;
    const user = await createUser(id_card, username)
    res.send(user)
};

export async function update(){
    const id = req.params.id;
    const {username} = req.body
    const user = await updateUserById(id, username)
    res.send(user)
};