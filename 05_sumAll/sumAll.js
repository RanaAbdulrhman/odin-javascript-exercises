const sumAll = function(num1,num2) {
    if(typeof num1 == 'number' && typeof num2 == 'number')
        if(num1 >= 0 && num2 >=0){
            if (num1>num2){
                let z = num1;
                num1 = num2;
                num2 = z;
            }
            let sum = 0; 
            for(let i = num1; i<= num2; i++){
            sum = sum + i;
            }
            return sum;
        }
    return 'ERROR';   
};

// Do not edit below this line
module.exports = sumAll;
