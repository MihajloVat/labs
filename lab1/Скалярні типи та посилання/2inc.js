console.log('Друга реалізація inc:');

function inc(obj) {
    return obj.num = obj.num - 9 
}

const obj = {num: 10};
inc(obj);

console.dir(obj);