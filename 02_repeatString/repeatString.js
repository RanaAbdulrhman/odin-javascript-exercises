const repeatString = function(word, num) {
    if (num >=0) { 
        let full = '';
        for(let i=0; i<num ; i++){
            full += word
        }
        return full;
    }
    else{
        return "ERROR";
    }
};
repeatString
// Do not edit below this line
module.exports = repeatString;
