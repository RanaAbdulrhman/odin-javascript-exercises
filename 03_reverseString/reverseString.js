const reverseString = function(word) {
    let LettersArray = word.split("");
    let reversedArrray = [];
    let l = "";
    while(!LettersArray.length==0){ 
        l = LettersArray.pop();
        reversedArrray.push(l);
    }
    return reversedArrray.join("");
};

// Do not edit below this line
module.exports = reverseString;
