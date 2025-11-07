 function TheoryImitation(count){
    let count1=0
    let count2=0
    for(let i=0; i<count;i++){
     let num = Math.floor(Math.random()*901)+100; 
    
    if(num %2 ===0){
    count1++;
    } else {
    count2++;    
    }
}
let percent1 = (count1 / count)*100;
let percent2 = (count2 / count)*100;

return {
    generatedCount: count,
    even: count1,
    odd: count2,
    evenPercent: percent1,
    oldPercent: percent2,
};
}
 console.log(TheoryImitation(1000));



