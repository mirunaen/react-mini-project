const personOne = {
    name: 'Kyle',
    age: 24,
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

const { name, age } = personOne;
console.log(name);
console.log(age);