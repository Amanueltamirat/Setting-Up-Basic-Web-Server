import express from 'express';
import dotev from 'dotenv';
import Router from './route/myRoute.js';

dotev.config();

const app = express();

const PORT = process.env.PORT || 5000


app.use('/', Router)


app.listen(PORT,()=>{
    console.log('Running on port:',PORT)
  
})