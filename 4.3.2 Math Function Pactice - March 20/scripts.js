
// 1A
function doTheThing1A(parameter1A){
    return 23 + parameter1A;
}   
console.log(doTheThing1A(5));

// 1B
function doTheThing1B(parameter1B){
    return parameter1B-77;
}   
console.log(doTheThing1B(1));

// 1C
function doTheThing1C(parameter1C){
    return 2*parameter1C;
}   
console.log(doTheThing1C(2));

// 1D 
function doTheThing1D(parameter1D){
    return parameter1D/2;
}   
console.log(doTheThing1D(4));;

// 1E
// function loveMath(name = `stranger`){
//     console.log(`${name}, I <3 doing math!`);
// }
// loveMath(prompt (`What is your name?`));

// 2A
function multiplyTwoParamters(par1, par2){
    return par1*par2;
}   
console.log(multiplyTwoParamters(4,3));

// 2B
function divideTwoParameters(num1, num2){
    return num1/num2;
}
console.log(divideTwoParameters(10, 5))

// 2C 
function subtractTwoParameters(sub1, sub2){
    return sub1/sub2;
}
console.log(subtractTwoParameters(50, 5))

// 2D
function addTwoParameters(add1, add2){
    return add1 + add2;
}
console.log(addTwoParameters(8,4))

// 2e Create a function that that takes in your name and your favorite math topic and returns a String below “<math topic> is <your name> favorite topic in math!”

let urName = prompt (`What is your name?`)
let faveMath = prompt (`What is your favorite topic in math?`)

function tellMeMath (urName, faveMath) {
    return `${faveMath} is ${urName}'s favorite topic in math!`;
}

console.log(tellMeMath (urName, faveMath))




