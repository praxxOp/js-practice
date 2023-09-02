/*practicing primitives and references in js */

/*primitives*/

let a = 10;
let b = a;
b = 12;
console.log(b);

/* In primitives we can directly copy the vale of another variable */

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


