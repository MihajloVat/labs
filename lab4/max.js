const m = max1([[3, -4, -3], [4, -5, 0], [2, 0, 1]]);
function max1(d2Array){
    maxValue = undefined;
    for (const innerArray of d2Array ){
        for (const value of innerArray){
            maxValue = maxValue>value ? maxValue : value
        }
    }
    return maxValue
}
console.log(m)

const m1 = max1([[3, -4, -3], [4, -5, 6], [2, 0, 1]]);
function max11(){
    res = max1.flat().reduce(Math.max())
    return res
}
console.log(m1)