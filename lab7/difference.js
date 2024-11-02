const difference = (array1, array2) => {
    const newArray = []
    for  (const element of array1){
        if (!array2.includes(element)){
            newArray.push(element)
        }
    }
    return newArray
}

const arrayNum = [7, -2, 10, 5, 0];
const arrayNum2 = [0, 10];
const resultNum = difference(arrayNum, arrayNum2);
console.log(resultNum);

const arrayCities = ['Beijing', 'Kiev'];
const arrayCities2 = ['Kiev', 'London', 'Baghdad'];
const resultCities = difference(arrayCities, arrayCities2);
console.log(resultCities);