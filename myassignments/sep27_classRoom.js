function printOddNumbers(limit) {
    for (let i = 1; i < limit; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}

function printNumbersDivisibleByFive(limit) {
    for (let i = 1; i < limit; i++) {
        if (i % 5 === 0) {
            console.log(i);
        }
    }
}

printOddNumbers(20);
printNumbersDivisibleByFive(50);