import express from 'express'
import dotenv from 'dotenv'

dotenv.config()
import { github,githubcallback } from './Github.js'
const app=express()

const PORT=3000;
app.get('/api',(req,res)=>{
    res.json({message:"hey "})
})

app.get('/github',github);
app.get('/github/callback',githubcallback);



app.listen(PORT,()=>{
    console.log("server is running ");
})