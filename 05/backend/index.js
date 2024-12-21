const express = require("express");
const { Pool } = require("pg");
const cors = require("cors");
const app = express();

app.use(cors({
    origin: 'http://localhost:3000'
}));
const pool = new Pool({
    user: "admin",
    host: "db",
    database: "mydb",
    password:"password",
    port:5432
});


app.get('/users',async(req,res)=>{
    const result = await pool.query('SELECT * FROM public.users');
    res.json(result.rows);
});

app.listen(5000,()=>{
    console.log("Backend running on port 5000");
});