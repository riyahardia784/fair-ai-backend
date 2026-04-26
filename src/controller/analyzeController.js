const express= require('express');
const readCSV= require('../utilis/readCSV');
const biasCalculator=require('../utilis/biasCalculator')

const analyzizData= async(req  , res) => {
    try{
        let data;
        if(req.file){
            const filePath = req.file.path;
             data = await readCSV(filePath);
            

        }
        else if(req.body.data){
            data = req.body.data;
            
        }
         else {
      return res.status(400).json({
        success: false,
        message: "No data provided"
      });
    }
        const result=await biasCalculator(data);
        return res.json({
            success:true,
            data:data,
            result:result,
        
        });
    }catch(error){
        return res.status(500).json({
            success:false,
            message:error.message
        });
    }
   
};



module.exports={analyzizData};