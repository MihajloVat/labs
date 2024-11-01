const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;
const div = x => x / 2;

const pipe = (...args) => {
    if (args.some((arg) => typeof arg !== 'function')) {
        throw ': function "pipe()" runs only with functions'
    }
    result = (x) => args.reduce((f1, f2) => f2(f1), x)
    return result
}

const func = pipe(inc, twice, cube, div);
console.log(func(5))
