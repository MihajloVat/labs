function fn() {
    const obj1 = { name: 'mike' }
    let obj2 = { name: 'mike' }
    console.log(obj1, obj2)

    //obj1 = {name:'vitalik'}
    obj2 = { name: 'vitalik' }
    console.log(obj1, obj2)

    obj1.name = 'anton'
    obj2.name = 'anton'
    console.log(obj1, obj2)
}
fn()
/* Пояснення роботи коду:
 Спочатку я записав 2 об'єкти,як і написано в завданні

 В наступному сегменті змінити obj1 не вийшло,
 адже це константа,на відміну від obj2

 В третьому сегменті я продемонстував,що ,посилаючись безпосередньо на ключі об'єктів,
 їх можна змінити в обох obj */


function createUser(name, city) {
    const obj = { name, city }
    return obj
}
console.dir('\n', createUser('mike', 'kyiv'))
