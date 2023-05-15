/*
function grade(score){
    /*
    var result ="";
    if(score<50) result="Fail";
    else result="Pass";
    return result;
    */ /*
   return (score<50)?"FAIL":"PASS"; //จริงหรือเท็จ
}*/
/*
const grade = function(score){
    return (score<50)?"FAIL":"PASS";
}
*/
// Arrow Function Hardcore
//const grade = (score) => (score<50)?"FAIL":"PASS";

// Arrow Function Basic
const grade = (score) => {
    return (score<50)?"FAIL":"PASS";
}