function total(arr) {
    return arr.reduce((prev, curr) => prev + curr);
}

console.log(total([1,2,3])); // 6