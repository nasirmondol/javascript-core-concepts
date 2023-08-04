function findLeapYear(years) {
    let leapYear = [];
    for (let i = 0; i < years.length; i++) {
        let index = i;
        let year = years[index]
        // console.log(index, year)
        if (year % 4 === 0) {
            leapYear.push(year)
        }
    }
    return leapYear;
}

const leapYears = [2023, 2024, 2025, 2028, 2030];
const leapYear = findLeapYear(leapYears)
console.log(leapYear);