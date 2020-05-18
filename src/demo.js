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
    name: 'Sally',
    age: 23,
    address: {
        city: 'Somewhere',
        state: 'One of them'
    }
}

const { name: firstName = 'John', address: { city } } = personOne;
console.log(firstName);
console.log(age);
console.log(city);