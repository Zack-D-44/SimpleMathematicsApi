//function that validates both values are correct type
const verifyNumber = (type, value1, value2, value3 = 0, value4 = 0) => {
    //checking if both values are of correct type and if so returning true
    if(typeof value1 !== type || typeof value2 !== type || typeof value3 !== type || typeof value4 !== type){
        return false;
    }else{
        return true;
    }
};