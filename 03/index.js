const { Pool } = require('pg');
const express = require('express');
const app = express();
app.use(express.json());


const pool = new Pool({
    user: 'admin',
    host: 'db',
    database: 'mydb',
    password: 'password',
    port: 5432
});

app.get('/users',async(req,res)=>{
const result = await pool.query('SELECT * FROM users');
res.json(result.rows);
});

app.listen(3000,()=>{
    console.log('Server running on port 3000');
});