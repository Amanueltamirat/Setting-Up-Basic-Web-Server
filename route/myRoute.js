import express from 'express';

const Router = express.Router();

Router.get('/',(req,res)=>{
    try {
        res.status(200).send('Hello Everyone!');
    } catch (error) {
        res.status(500).send({message:'Something went wrong!'})
    }
})

Router.get('/name',(req,res)=>{
     try {
        res.status(200).send(`I'm Amanuel Tamirat!`);
    } catch (error) {
        res.status(500).send({message:'Something went wrong!'})
    }
})

Router.get('/hobby',(req,res)=>{
    
       try {
        res.status(200).json({hobby:["Watching Soccer", "Reading Books","Playing video games"]});
    } catch (error) {
        res.status(500).send({message:'Something went wrong!'})
    }
})
Router.get('/dream',(req,res)=>{
        try {
        res.status(200).send('Becoming one of Top 5% of Full-Stack Developer!');;
    } catch (error) {
        res.status(500).send({message:'Something went wrong!'})
    }
})

export default Router