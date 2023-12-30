import mysql from 'mysql2';

const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'Example@2022#',
    database: 'attendance'
}).promise();

async function getUser(){
    const [rows] = await pool.query("SELECT * FROM user")
    return rows
}

const uer = await getUser()
console.log(uer)
