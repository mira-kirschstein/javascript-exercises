const sumAll = function(int1, int2) {
    //Check if ints are positiv
    let sum = 0;

    //check if both ints are positive 
    if( int1 > 0 && int2 > 0 && Number.isInteger(int1) && Number.isInteger(int2)){

        //swap ints so order of input doesnt matter
        if(int1>int2){
            for(let i=int2; i<= int1; i++){
                sum += i;
            }
        } else{
            for(let i = int1; i<=int2; i++){
              sum += i;
            }
        }
    } else {
        return "ERROR";
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
