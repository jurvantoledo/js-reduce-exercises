function flatten(arr) {
    return arr.reduce((flatArray, currentArray) => {
        return flatArray.concat(currentArray);
    }, []);
}

var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6]