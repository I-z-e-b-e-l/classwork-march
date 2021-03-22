// console.log(`It's alive!`)


/*  
Temperature conversion app.

Part 1
Link this script file to the HTML file. Confirm it is linked by
console logging something.✔️

Part 2
Create 2 HTML text elements in the HTML file so that we can display
our outputs to the user.✔️

Part 3
Ask the user for the temperature in Fahrenheit.✔️
Convert the number to whatisit and display it back to the user.

Part 4
If the degrees in Fahrenheit is less than 69, display a message
that says "Oh that's cold!".
If the degrees in Fahrenheit is greater than or equal to 69, the message
should say "Temperature is just right!".
Otherwise the message should say "That's not a temperature".

---
Equation is: °C = 5 / 9(°F - 32).

First think about each step, write your own notes about what to do, 
and then start coding. Remember to test your code throughout the 
whole process by checking the browser and the console.

For hints, check out the hints.txt file.
*/

// Updated version

let tempF = Number(prompt(`What is the temperature in Fahrenheit?`));

let tempFtoC = (tempF-32)*(5/9);
let whatisit = `${tempF} degrees in Fahrenheit is ${tempFtoC} degrees in celcius!`;
let message = "";

if(tempF < 69) {
    message = `🐧 Brrrr! It's cold in here! 🥶❄️☃️`;
}else if (tempF>=69){
    message = `Mmmmm... temperature is just right 😁`;
}else {
    tempFtoC = ""
    message = `That's not a number! Try again!`;
}
    

document.getElementById('dothething').innerHTML = whatisit;
document.getElementById('dotheotherthing').innerHTML = message;

// OG Version 

// let tempF=prompt(`What is the temperature in Fahrenheit?`);


// if (isNaN(tempF)==true){

//     alert (`That's not a number! Try again!`);
//     tempF=prompt(`What is the temperature in Fahrenheit`);

//     let tempFtoC=(Number(tempF)-32)*(5/9);
//     document.getElementById('dothething').innerHTML = `${tempF} degrees in Fahrenheit is ${tempFtoC} degrees in whatisit!`

//     if (tempF<=69) {
//     document.getElementById('dotheotherthing').innerHTML = `🐧 Brrrr! It's cold in here! 🥶❄️☃️`
//     }else
//     {document.getElementById(`dotheotherthing`).innerHTML= `Mmmmm... temperature is just right 😁`
//     }

// }else {
//     let tempFtoC=(Number(tempF)-32)*(5/9);
    
//     document.getElementById('dothething').innerHTML = `${tempF} degrees in Fahrenheit is ${tempFtoC} degrees in whatisit!`

//     if (tempF<=69) {
//     document.getElementById('dotheotherthing').innerHTML = `🐧 Brrrr! It's cold in here! 🥶❄️☃️`
//     }else
//     {document.getElementById(`dotheotherthing`).innerHTML= `Mmmmm... temperature is just right 😁`
//     }

// }
