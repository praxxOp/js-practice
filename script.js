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
d.pop();
d.unshift(12);
d.shift();
d.splice(2, 3);

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
if (a < b) {
  console.log("done");
} else {
  console.log("not done");
}

/* to check multiple condition */

if (a > b) {
  console.log("greater");
} else if (a < b) {
  console.log("smaller");
} else {
  console.log("nothing");
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
let A = 10;
let B = 12;
a > B ? console.log("okay") : console.log("not okay");

// promt
// var praxx2= Number(prompt("enter the number"))
// if (praxx2%2===1){
// console.log("odd")
// }
// else{
//     console.log ("even")
// }

for (i = 1; i <= 5; i++) {
  console.log("praxx");
}

let k = [1, 2, 3, 4, 5, 6];
let currentIndex = 0;

document.querySelector("button").addEventListener("click", function () {
  if (currentIndex < k.length) {
    let val = k[currentIndex];
    let z = val + 2;
    console.log(z);
    currentIndex++;
  }
});

while (a <= 20) {
  let add = a++;
  console.log(add);
}

// to find currentindex in array
//In JavaScript, when working with loops like for and forEach, as well as the Array.prototype.map() method,
//the second parameter in the callback function serves as the index of the current element being processed.
//This index parameter allows you to access and manipulate both the elements themselves and
//their corresponding positions within an array during iteration or mapping operations.
// example:-

const array = [1, 2, 3, 4, 5];
const hi = array.forEach((element, index) => {
  return `Element at index ${index} is ${element}`;
});
console.log(hi);
//  forEach: Does not return a new array; it simply iterates through an array and
//  performs an action on each element.

//  map: Returns a new array created by applying a function to each element in the original array.

const hii = array.map((element, index) => {
  return `Element at index ${index} is ${element}`;
});
console.log(hii);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Example 1: Filter even numbers
const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log("Even numbers:", evenNumbers);

// example 2
const greater = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const filteredArray = greater.filter((val) => {
  let great = val < 5;
  console.log(`Value: ${val}, Is it great? ${great}`);
  return great;
});

console.log(filteredArray); // Output: [1, 2, 3, 4]

const mapArray = greater.map((val) => {
  let great = val < 5;
  return great;
});

console.log(mapArray);

const addition = greater.reduce((acc, cv) => {
  return acc + cv;
}, 10);

console.log(addition);

// objects:-
let man = {
  gender: "male",
};

let obj = {
  name: "prathamesh",
  age: 20,
  surname: "Shelke",
};
console.log(obj);
obj.__proto__ = man;

console.log(obj.name);


// higher order funtion
let higherorderfunc = 12
const func1 =(func2)=>{
console.log(func2())

}

func1(()=>{
return higherorderfunc+2;
})


// constructor function

function Constructor(color) {
  this.shape = "circle";
  this.width = 12;
  this.color = color;
}

const constructor2 = new Constructor("red");

console.log(constructor2);

const button = document.querySelector("Button");
button.addEventListener("click", function() {
  console.log(this);
});


// this keyword in javascript
// Global Context: In the global context (outside of any function), 
// this refers to the global object, which is window in a web browser and global in Node.js.
console.log(this);

// Function Context: Inside a regular function (not an arrow function), the value of this is determined by how the function is called. 
// It can be influenced by the caller, the context in which the function is invoked, and whether the function is attached to an object.
// In regular function
function abcd(){
  var v = 2+2
  console.log(v)
  console.log(this)
}
abcd()

// Method Context: When a function is called as a method of an object, 
// this refers to the object itself. For example:

let thiskeyword = {
  name : "prathamesh",
  age:20,
  sum: function (){
    var v = 2+2
    console.log(v)
    console.log(this)
  }
  
}

thiskeyword.sum();

// Constructor Context: When a function is used as a constructor to create objects with the new keyword,
//  this refers to the newly created object:
function Person(name) {
  this.name = name;
  
}
const john = new Person("John");
console.log(john.name); 




axios.get('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => {
    console.log('Response data:', response.data );
  })
  .catch((error) => {
    console.error('Error:', error);
  });



function abcd (name,age,height){
   this.name = name,
  this.age = age,
  this.height = height
}

let prathamesh = new abcd("prathamesh",20,6)
let rohan = new abcd("rohan",20,6);
console.log(rohan)
console.log(prathamesh )



  let nowIndex = 1;
  let boxes = document.querySelectorAll(".box");
  let prevButton = document.querySelector(".prev");
  let nextButton = document.querySelector(".next");

  prevButton.addEventListener("click", function () {
    if (nowIndex > 0) {
      boxes[nowIndex].classList.remove("scaled");
      nowIndex -= 1;
      boxes[nowIndex].classList.add("scaled"); 
    }
  });

  nextButton.addEventListener("click", function () {
    if (nowIndex < boxes.length - 1) {
      boxes[nowIndex].classList.remove("scaled"); 
      nowIndex += 1;
      boxes[nowIndex].classList.add("scaled"); 
    }
  });



