//const fetch = require('node-fetch');

//Function to check if a number is prime
function isPrime (number) {
    if (number < 2) 
        return false;
    for (let i =2; i <= Math.sqrt(number); i++) {
        if ( number % i === 0 ) return false;
    }
    return true; 
}

//Function to check if a number is a perfect number
function isPerfect (number) {
    if (number < 2) return false;

    let sum = 1;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if ( number % i === 0 ) {
            sum += i;
            if ( i !== number / i) 
                sum += number / i;
        }
    }
    return sum === number;
}

//Function to chcek if a number is armstrong
function isArmstrong (number) {
    const absNumber = Math.abs(number);
    const digits = absNumber.toString().split('').map(Number);
    const power = digits.length;
    const sum = digits.reduce((acc, digits) => acc + Math.pow(digits, power), 0) //sum of digits power
    return sum === absNumber;
}

//Function to check if a number is odd
function isOdd (number) {
return number % 2 !== 0
}


//Function to calculate the digit sum
function digitSum (number) {
    return Math.abs(number)
    .toString()
    .split('')
    .map(Number)
    .reduce((sum, digit) => sum + digit, 0)
}


// Function to get fun act from numbers API
async function getFunFact (number) {
    const url = `http://numbersapi.com/${number}/math?json`; // API URL
    try{
        const response = await fetch(url);
        const data = await response.json();
        return data.text;

    } catch(error) {
        console.error('Error searching fun fact', error);
        return 'No fun fact available'
    }
};

//Function to classify number
async function classifyNumber (req, res) {
    const number = parseInt(req.query.number);

    if (isNaN(number) || !Number.isInteger(Number(number))) {
        return res.status(400).json ({ number:req.query.number, error:true});
    }


    const funFact = await getFunFact(number);

    // ✅ Corrected properties array logic
    const properties = [];
    if (isArmstrong(number)) properties.push('armstrong');
    properties.push(isOdd(number) ? 'odd' : 'even'); // Always push odd/even

    res.json({
        number,
        is_prime: isPrime(number),
        is_perfect: isPerfect(number),
        properties,
        digit_sum: digitSum(number),
        fun_fact: funFact
    });
};

module.exports = {classifyNumber};


