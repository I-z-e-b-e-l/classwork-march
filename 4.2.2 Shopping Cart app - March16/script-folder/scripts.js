let urName = prompt("What's ur name bruh?");
let item1 = prompt ("Tell me wat you want:");

// So prompt always makes a string, and wrapping in Number() always makes a number, so that makes typeof below irrelevant - maybe use isNan()?
// let item1cost = Number(prompt (`What is ${item1} worth to you?`));

let item1cost = prompt (`What is ${item1} worth to you?`);

if (isNaN(item1cost)!=false||item1cost<=0){
    item1cost = prompt (`Nice try, Homeslice! Enter a real number value, bruh! How much you gonna pay for ${item1}?`)
}

let item2 = prompt ("Tell me what you really really want:");
let item2cost = prompt (`How much you gonna pay for ${item2} `);
if (isNaN(item2cost)!=false||item2cost<=0){
    item2cost = prompt (`Nuh uh, bruh! Enter a real number value! How much you gonna pay for ${item2}?`)
}

let item3 = prompt ("And what you wanna really really really wanna...");
let item3cost = prompt (`What would you give me for ${item3}?`);
if (isNaN(item3cost)!=false||item3cost<=0){
    item3cost = prompt (`Nice try, Homeslice! Enter a real number value, bruh! How much you gonna pay for ${item3}?`)
}


let subtotal = Number(item1cost) + Number(item2cost) + Number(item3cost);
console.log(subtotal)


let grandtotal = subtotal + (subtotal * .0625);
// roundup?

document.getElementById("alltold").innerHTML = `${urName}, ur grand total here is \$${grandtotal}`;


