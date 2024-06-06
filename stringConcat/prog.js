function stringConcat(arr) {
    return arr.reduce((prev, cur) => prev.toString() + cur.toString());
 }
 
 console.log(stringConcat([1,2,3])); // "123"
 