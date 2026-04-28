const dotenv=require('dotenv');
dotenv.config();
const express =require('express');
const cors = require('cors');
const app=express();
app.use(cors());
app.use(express.json());
const analyzeRoute=require('./routes/analyzeRoutes');
const aiRoute=require('./routes/aiRoutes')


app.use(express.urlencoded({extended:false}));

app.get('/',(req,res)=>{
    res.send("this is backend server of FairAI");
});

app.use('/FairAI',analyzeRoute);
app.use('/FairAI/ai',aiRoute)

module.exports=app;