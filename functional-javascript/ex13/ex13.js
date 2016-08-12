function repeat(operation, num) {
    if (num <= 0) return;
    operation();

    if (num % 15 === 0) setTimeout(() => repeat(operation, --num));
    else repeat(operation, --num);
}

module.exports = repeat;