function evenNumbersOnly(numbers) {
    const even = [];
    for (const number of numbers) {
        if (number % 2 === 0) {
            even.push(number)
            console.log(number);

        }

    }
    return even;
}

const numbers = [5, 8, 91, 24, 6];
const even = evenNumbersOnly(numbers);
console.log('even number', even);

function sumOfEvenNumbers(numbers) {
    let sum = 0;
    for (const number of numbers) {
        if (number % 2 === 0) {
            console.log(number);
            sum = sum + number;
        }
    }
    return sum;
}

const sum = sumOfEvenNumbers(numbers)
console.log('sum of even number', sum);