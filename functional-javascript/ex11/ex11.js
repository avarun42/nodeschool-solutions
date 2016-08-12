function arrayMap(arr, fn, thisArg = this) {    
    return arr.reduce((mappedArr, cur, i) => {
        mappedArr[i] = fn.call(thisArg, cur, i, arr);
        return mappedArr;
    }, []);
}

module.exports = arrayMap;