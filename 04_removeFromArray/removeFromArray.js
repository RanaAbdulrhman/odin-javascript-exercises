const removeFromArray = function() {
    let list = arguments[0];
    let index = -1; 
    for(let i= 1; i< arguments.length; i++){
        index = list.indexOf(arguments[i]); 
        if(index>=0)
            list.splice(index, 1);
    }
    return list;
};

console.log(removeFromArray([1, 2, 3, 4], 3))
// Do not edit below this line
module.exports = removeFromArray;
