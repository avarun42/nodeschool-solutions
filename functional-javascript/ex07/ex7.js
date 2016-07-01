function reduce(arr, fn, initial) {
    if (typeof arr === 'undefined' || arr.length <= 0) return initial;
    initial = fn(initial, arr[0], 0, arr);
    return reduce(arr.slice(1), fn, initial);
}

module.exports = reduce;