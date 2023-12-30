import { getUser,getUserById,createUser,updateUserById } from '../models/userModel.js'

export async function getAll(){
    const user = await getUser();
    res.send(user)
};