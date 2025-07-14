import mysql from "mysql2/promise"

export const pool = mysql.createPool({
    host:process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password : "",
    database : "classicmodels"
})

