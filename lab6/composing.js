const handlers = []
const pipe = (...args) => {
    if (args.some((arg) => typeof arg !== 'function')) {
        throw ': function "pipe()" runs only with functions'
    }
    const catcher = (x) => {
        try {
            result = args.reduceRight((f1, f2) => f2(f1), x)
            return result
        } catch (error) {
            for (const handler of handlers) {
                handler(error);
            }
            return null
        }
    }
    return catcher
};
pipe.on = (name, handler) => {
    if (name === 'error') handlers.push(handler);
}

const inc = x => { throw 'nope' };
const twice = x => x * 2;
const cube = x => x ** 3;
const div = x => x / 2;

const func = pipe(inc,twice, cube, div);
const func2 = pipe(twice, cube, div);

pipe.on('error', (error) => {
    console.log('Is it works?', error);
  });

console.log(func(5),`\n`)
console.log(func2(5))
