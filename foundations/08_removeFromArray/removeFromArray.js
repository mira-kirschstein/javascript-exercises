const removeFromArray = function(array, ...args) {
    // create a new empty array
    const newArray = [];
    
    //use forEach to fo through the array
    array.forEach((item) => {
        if (!args.includes(item)) {
            // push every element into the new array
            // UNLESS it is included in the function arguments
            newArray.push(item);
        }   
    });
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
