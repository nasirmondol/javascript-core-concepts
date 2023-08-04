// function isEven(number) {
//     let even = number % 2;
//     if (even === 0) {
//         console.log('This number is even')
//     }
//     else {
//         console.log('this number is odd')
//     }
// }
// var evenNumber = isEven(432);


// isLeap year

function isLeapyear(year) {
    const leapYear = year % 4;
    if (leapYear === 0) {
        return true;
    }
    else {
        return false;
    }
}

const myYearLeapYear = isLeapyear(2028)
console.log('My year ', myYearLeapYear)
const herYearLeapYear = isLeapyear(2033)
console.log( herYearLeapYear);
