const tps = [true, 'hello', 5, 12, -200, 5*5, false, 'word', 99.9, '!!!', 'GG', true, 10102, 'loveJS', 'IM-42', 52];   //types

const hash = {}  //empty collection

for (const key of tps){      //fooling 
const type = typeof key;
let tempo = hash[type] || 0;
hash[type] = tempo + 1; 
}

console.dir(hash);   //result
