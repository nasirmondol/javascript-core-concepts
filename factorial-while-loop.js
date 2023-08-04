// function factorial(numbers) {
//     let num = 1;
//     let sum = 1;
//     while (i < num) {
//         sum = sum * num;
//         i++;
//     }
//     return sum;

// }
// const factNum = factorial(4)
// console.log(factNum)

function factorila(numbers) {
    let sum = 1;
    for (let i = 1; i <= numbers; i++) {
        sum = sum * i;
    }
    return sum
}
const factNum = factorila(5)
console.log(factNum)