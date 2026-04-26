const express=require('express');

function biasCalculator(data){
    return new Promise((resolve, reject)=>{

        let maleTotal=0;
        let femaleTotal=0;
        let maleSelected=0;
        let femaleSelected=0;
    
         data.forEach(row => {
        if(row.Gender==='Male'||row.Gender === 'male'){
            maleTotal++;
            if(row.Selected==='1'){
            maleSelected++;
        }
        }
        
        if(row.Gender==='Female'||row.Gender === 'female'){
            femaleTotal++;
            if(row.Selected==='1'){
              femaleSelected++;
            }
        }
        

    });

    //selection rate
    const maleSelectionRate=maleTotal?Math.round((maleSelected/maleTotal)*100):0;
    const femaleSelectionRate=femaleTotal?Math.round((femaleSelected/femaleTotal)*100):0;

    //calculate fairness score
    const difference=Math.abs(maleSelectionRate-femaleSelectionRate);
    const fairnessScore=Math.round(100-difference);
    let biasStatus='';

    if(difference>20){
        biasStatus='Bias Detected';
    }else{
       biasStatus='Fair';
    }
    
    resolve({
        maleSelectionRate,
        femaleSelectionRate,
        fairnessScore,
        biasStatus
    });
    
});   

}
module.exports=biasCalculator;
    