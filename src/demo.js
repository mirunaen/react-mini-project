const personOne = {
    name: 'Kyle',
    age: 24,
    favoriteFood: 'salad',
    address: {
        city: 'Somewhere',
        state: 'One of them'
    }
}

const personTwo = {
    age: 23,
}
//put it together and over writte what was in personOne
const personThreee = { ...personOne, ...personTwo }
console.log(firstName);
console.log(age);
console.log(city);