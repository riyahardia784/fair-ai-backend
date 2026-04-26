const express= require('express');
const {explainBias,suggest}=require('../controller/aiController')

const router=express.Router();

router.post('/explain',explainBias);
router.post("/suggest", suggest);

module.exports=router;