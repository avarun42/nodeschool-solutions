let args = process.argv.slice(2);
let sum = args.reduce((prev, cur) => Number(prev) + Number(cur));

console.log(sum);