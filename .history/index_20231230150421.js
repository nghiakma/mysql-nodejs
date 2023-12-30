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

const user = await getUserById(21);
console.log(user)

