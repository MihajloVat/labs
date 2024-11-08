const store = (...value) => () => value.toString()

const read = store(5,4,10);
const value = read();
console.log(value); 