const browserVersion = "Chrome";

function getBrowserVersion() {

    console.log("Global variable:",browserVersion);

    if (browserVersion === "Chrome") {
            let browserVersion = "safari"
        console.log("inside block:",browserVersion);
    }
    var browserVersion = "FF"
   console.log("outside block:",browserVersion);
   
}

console.log("outside function:",browserVersion);

getBrowserVersion();

console.log("outside function:",browserVersion);
