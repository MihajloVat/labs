function array() {
    const data = []
    const index = (i) => data[i]
    index.push = (any) => data.push(any)
    index.pop = () => data.pop()
    array.console = () => 'what?'
    return index
}

const arr = array();

arr.push('JS');
arr.push('array');
arr.push(2 + 2 === 3);

console.log(arr(0));
console.log(arr(1));
console.log(arr(2));

console.log(arr.pop());
console.log(arr.pop());
console.log(arr.pop());

console.log(arr.pop()); 
