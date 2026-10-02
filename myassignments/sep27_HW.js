function oddNumber(n) {
    for (let i = 0; i < n; i++) {
        if (i%2!=0) {
           console.log(i);
        }
    }
}
oddNumber(20)
console.log("********************************");



let TestingType = "smoke"
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

switchSelected(TestingType)


let age =60
function ageValidation(age) 
{
    if (age >60) {
        console.log("senior citizen");
    } 
    else if(age >18){
        console.log("Adult");
    }
    else {
        console.log("kids");
    }
}
ageValidation(age)


