import mysql from 'mysql2';
import dotenv from 'dotenv'
dotenv.config()

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
}).promise()

export async function getUser(){
    const [rows] = await pool.query("SELECT * FROM user")
    return rows
};

export async function getUserById(id){
    const [rows] = await pool.query(
        `SELECT * FROM user WHERE id = ?`,[id])
        return rows[0]
    
}

export async function createUser(id_card,username){
    const [result] = await pool.query(
        `INSERT INTO user (id_card,username) VALUES (?,?)`,[id_card,username])
         const id = result.insertId
        return getUserById(id)
}

export async function updateUserById(id, newUsername) {
    const [result] = await pool.query(
        `UPDATE user SET username = ? WHERE id = ?`, [newUsername, id]
    );
    return getUserById(id);
}
// const user = await updateUserById(25,'NGo trong')
// console.log(user);
// const user = await getUserById(21);
// console.log(user)

// const result = await createUser('ct050334','Lam Hien');
// console.log(result)

