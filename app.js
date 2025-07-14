import {config} from 'dotenv'
import {configRouter} from "./configRout.js"
import express from "express"
config()
const app = express()
const PORT = process.env.PORT || 3000

configRouter(app)

app.listen(PORT,()=>{
    console.log(`the servis is on port ${PORT}`);
})