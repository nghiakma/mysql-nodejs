import mysql from 'mysql2';
import dotenv from 'dotenv'
dotenv.config()

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
}).promise()

async function getUser(){
    const [rows] = await pool.query("SELECT * FROM user")
    return rows
};

async function getUserById(id){
    const [rows] = await pool.query(
        `SELECT * FROM user WHERE id = ?`,[id])
        return rows[0]
    
}

async function createUser(id_card,username){
    const [result] = await pool.query(
        `INSERT INTO user (id_card,username) VALUES (?,?)`,[id_card,username])
    return result.insertId
}

const user = await getUserById(21);
console.log(user)

const result = await createUser('ct050334','Tran nghia');
console.log(result)

