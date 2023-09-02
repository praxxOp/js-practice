/*practicing primitives and references in js */


/*primitives*/

let a = 10;
let b = a
b = 12
console.log(b)

/* In primitives we can directly copy the vale of another variable */

/*references */

let c = [1,2,3,4,5]
let d = [...c]
/* to copy all value of array or object  we use spread [...] operators in js */
d.push(13)

let e = {
    name: "praxx",
    age : 20,
}

let f = {...e}
f.hair="black"; /*to push the vale in object we use  . notation */


/* rest operator */

const praxx= (a,b,c,...d)=>{
console.log(a , b , c , d)
}

praxx(1,2,3,4,5,6,7,8,9)
/* we use rest operator to store rest values in single variable in the form of array */







