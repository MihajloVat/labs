const contract = (fn, ...types) => (...args) => {
    for (let i = 0; i < args.length; i++) {
        const arg = args[i]
        const def = types[i]
        const nameInArg = def.name.toLowerCase()
        if (typeof arg !== nameInArg) {
            throw new TypeError(`Wrong argument detected`)
        }
    }
    const res = fn(...args)
    const def2 = types[types.length - 1]
    const nameInRes = def2.name.toLowerCase()
    if (typeof res !== nameInRes) {
        throw new TypeError(`Wrong result detected`);
    }
    return res;
}

const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);
const res1 = addNumbers(2, 3);
console.dir(res1); 

const concat = (s1, s2) => s1 + s2;
const concatStrings = contract(concat, String, String, String);
const res2 = concatStrings('Hello ', 'world!');
console.dir(res2);

const concat2 = (s1, s2) => s1 + s2;
const concatStrings2 = contract(concat, String, Number, String);
const res3 = concatStrings2('Hello ', 'world!');
console.dir(res3);
