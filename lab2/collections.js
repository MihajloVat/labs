const data = [
    { name: 'Marcus Aurelius', phone: '+380445554433' },
    { name: 'Simon Petliura', phone: '+380569801488' },
    { name: 'Patrick Bateman', phone: '+380966965692' }
]
function findPhoneByName(name) {
    for (let i = 0; i <= data.length - 1; i++) {
        if (data[i].name === name) {
            return data[i].phone
        }
    }
}
console.log(findPhoneByName('Simon Petliura'))

const hash = {
    'Marcus Aurelius': '+380445554433',
    'Simon Petliura': '+380569801488',
    'Patrick Bateman': '+380966965692'
}

const findPhoneByName1 = (name) => hash[name]
console.log(findPhoneByName1('Patrick Bateman'))