import express from 'express';
import morgan from 'morgan';
import 'dotenv/config';
import { conectarDB } from './database.js';
const app=express();

const port= process.env.PORT || 3000;


//midelwares
app.use(morgan('dev'));
app.use(express.json());

conectarDB();
app.listen(port,()=>{
    
    console.log(`server on http://localhost:${port}`);
    
})


