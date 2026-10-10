function reverse(companyName) {
    let reverseName = "";
    let companyNameArray = companyName.split("");

    for (let i = companyNameArray.length - 1; i >= 0; i--) {
        reverseName += companyNameArray[i];
    }
    console.log(reverseName);
}
reverse("TestLeaf");



function findDuplicate(arr){

    let arrLength = arr.length;
    let duplidates = [];

    for (let i = 0; i < arrLength; i++) {
        for (let j = i+1; j < arrLength; j++) {
            if (arr[i] === arr[j]) {
                duplidates.push(arr[i]);
            }  
        }
    }
    console.log(duplidates);
}

findDuplicate([56,78,90,23,90,76,43,56])