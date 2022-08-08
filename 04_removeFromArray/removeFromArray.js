const removeFromArray = function(...args) {
    const arrays = args[0];

    const newArray = [];

    array.forEach((item) => {
        if (!args.include(item)) {
            newArray.push(item);
        }
    });

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
