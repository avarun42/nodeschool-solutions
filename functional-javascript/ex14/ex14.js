function repeat(operation, num) {
    if (num <= 0) return null;
    operation();
    return repeat.bind(this, operation, --num);
}

function trampoline(fn) {
    while (fn) fn = fn();
}

module.exports = (operation, num) => trampoline(repeat.bind(this, operation, num));