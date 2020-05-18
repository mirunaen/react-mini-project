const alphabet = ['A', 'B', 'C', 'D', 'E', 'F']
const numbers = ['1', '2', '3', '4', '5', '6']
//const a = alphabet[0]
//const b = alphabet[1]
const [a, b, ...rest] = alphabet;
const newArray = [...alphabet, ...numbers]
console.log(a);
console.log(b);
console.log(rest);
console.log(newArray);

function sumAndMultiply(a, b) {
    return [a + b, a * b]
}

const array = sumAndMultiply(2, 3)
console.log(array);