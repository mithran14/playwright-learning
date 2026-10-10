function printOddNumbers(limit) {
    for (let i = 1; i < limit; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}
printOddNumbers(20)
console.log("********************************");

function switchSelected()
{

    switch (TestingType) {
        case "smoke":
                console.log("smoke selected");
            break;
        case "Sanity":
                console.log("Sanity selected");
            break;
        case "Regression":
                console.log("Regression selected");
            break;
        default:
            console.log("E2E selected");
            break;
    }
}

switchSelected("smoke")


function ageValidation(age) {
    if (age >= 60) {
        console.log("Senior citizen");
    } else if (age >= 18) {
        console.log("Adult");
    } else {
        console.log("Kid");
    }
}
ageValidation(60)


