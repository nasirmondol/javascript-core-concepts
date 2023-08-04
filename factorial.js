function factorial(numbers) {
    let sum = 1;
    for (let i = 1; i <= numbers; i++) {
        sum = sum * i;
    }
    return sum
}
const fact = factorial(9);
// console.log(fact)

function decrementalFactorial(numbers) {
    let result = 1;
    for (let i = numbers; i >= 1; i--) {
        result = result * i;
    }
    return result
}
const number = 10;
const factorialResult = decrementalFactorial(number);
console.log(factorialResult);

// function factorial(number){
//     let result = 1;
//     for(let i = 1; i <= number; i++){
//         result = result * i;
//     }
//     return result;
// }

// const result = factorial(9);
// console.log(result);