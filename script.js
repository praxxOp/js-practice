/*practicing primitives and references in js */

/*primitives*/

let a = 10;
let b = a;
b = 12;
console.log(b);

/* In primitives we can directly copy the value of another variable */

/*references */

let c = [1, 2, 3, 4, 5];
let d = [...c];
/* to copy all value of array or object  we use spread [...] operators in js */
d.push(13);
d.pop()
d.unshift(12)
d.shift()
d.splice(2,3)

let e = {
  name: "praxx",
  age: 20,
};

let f = { ...e };
f.hair = "black"; /*to push the vale in object we use  . notation */

/* rest operator */

const praxx = (a, b, c, ...d) => {
  console.log(a, b, c, d);
};

praxx(1, 2, 3, 4, 5, 6, 7, 8, 9);
/* we use rest operator to store rest values in single variable in the form of array */

/*hoisting*/

console.log(g);
var g = 30;

/* we can use hoisting only in var not in let or const */
/* Hoisting with var:
var variables are hoisted and initialized with undefined, making them accessible before declaration,
 whereas let and const variables are hoisted but not initialized, leading to ReferenceErrors if accessed before declaration.
*/ 

/* conditions in js */
/*to check single condition*/
if(a<b){
console.log("done")
}
else{
    console.log ("not done")
}

/* to check multiple condition */

if (a>b){
console.log("greater")
}
else if (a<b){
    console.log("smaller")
}
else{
    console.log("nothing")
}

// or operator

let isRaining = true;
let isSunny = false;

if (isRaining || isSunny) {
  console.log("You might need an umbrella or sunscreen!");
} else {
  console.log("The weather is neither rainy nor sunny.");
}

// ternary operators
let A = 10
let B =  12
a>B?console.log("okay"): console.log("not okay")

// promt
// var praxx2= Number(prompt("enter the number"))
// if (praxx2%2===1){
// console.log("odd")
// }
// else{
//     console.log ("even")
// }

for(i=1 ; i<=5;i++){
console.log("praxx")
}





let k = [1, 2, 3, 4, 5, 6];
let currentIndex = 0;

document.querySelector("button").addEventListener("click", function() {
  if (currentIndex < k.length) {
    let val = k[currentIndex];
    let z = val + 2;
    console.log(z);
    currentIndex++;
  }
});




// to find currentindex in array
//In JavaScript, when working with loops like for and forEach, as well as the Array.prototype.map() method,
//the second parameter in the callback function serves as the index of the current element being processed. 
//This index parameter allows you to access and manipulate both the elements themselves and
//their corresponding positions within an array during iteration or mapping operations.
// example:-

    const array = [1, 2, 3, 4, 5];
    array.forEach((element, index) => {
    console.log(`Element at index ${index} is ${element}`);
    });