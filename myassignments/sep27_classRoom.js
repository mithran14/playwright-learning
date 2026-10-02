function oddNumber(n) {
    for (let i = 0; i < n; i++) {
        if (i%2!=0) {
           console.log(i);
        }
    }
}
oddNumber(20)
console.log("********************************");



function divisible(n) {
    for (let j = 1; j < n; j++) {
        if (j%5==0) {
           console.log(j);
        }
    }
}
divisible(50)