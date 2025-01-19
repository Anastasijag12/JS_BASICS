// zadaca1:

let globalNum=10;

function checkScope() {
    console.log(globalNum);
}
checkScope();

// b)

let globalNumber=10;
function checkScope() {
    let localNum= globalNumber;
    console.log(localNum);

}
console.log(globalNumber === localNum);
checkScope();

// v)

let blockNum=10;
if(true) {
    console.log(typeof blockNum);
}


