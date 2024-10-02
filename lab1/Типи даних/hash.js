const tps = [true, 'hello', 5, 12, -200, 5*5, false, 'word', 99.9, '!!!', 'GG', true, 10102, 'loveJS', 'IM-42', 52];   //types

const hash = {    //collection
    number: 0,
    string: 0,
    boolean: 0,
}
for (const keys of tps) {           //cycle
    const type = typeof keys;
    hash[type]++
}


console.dir(hash);  //result

//другий,раціональніший спосіб 