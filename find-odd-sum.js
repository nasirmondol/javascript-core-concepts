
function findOddInArray(numbers) {
    const oddNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        if (element % 2 === 1) {
            oddNumbers.push(element);
        }
    }
    return oddNumbers;
}

function getSumOddNumbers(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index]
        sum += element;
        
    }
    return sum
}


let myArray = [10, 30, 20, 40, 50, 11, 33, 87, 45, 67];
const oddNumbers = findOddInArray(myArray);
const sum = getSumOddNumbers(oddNumbers)

console.log(sum)

