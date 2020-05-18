const personOne = {
    name: 'Kyle',
    age: 24,
    favoriteFood: 'salad',
    address: {
        city: 'Somewhere',
        state: 'One of them'
    }
}

//function printUser(user) {
//    console.log(`Name is ${user.name} and age is ${user.age}`)
// }

//printUser(personOne);
//all we want is the name and age of personOne
function printUser({ name, age, favoriteFood = 'Whatever' }) {
    console.log(`Name is ${name} and age is ${age} and
    favorite food is ${favoriteFood} `)
}

printUser(personOne);