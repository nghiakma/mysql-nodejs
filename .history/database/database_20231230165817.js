import mysql from 'mysql2';
import dotenv from 'dotenv'
dotenv.config()

export const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
}).promise()


// const user = await updateUserById(25,'NGo trong')
// console.log(user);
// const user = await getUserById(21);
// console.log(user)

// const result = await createUser('ct050334','Lam Hien');
// console.log(result)

