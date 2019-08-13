


// to show loops and template strin with ``
function test() {
    for(let i =0 ; i<=5; i++) {
        console.log("value is " + i);
        
    }
}

test();

//////////

let s1 ="Mayur"
let s2 = "Karnataka"
let s3 = "This is ES6 type programming";

console.log(s1);
console.log(s2);
console.log(s3);


//template string
let s4 = `this is new feature of es6`
let s5 = `Hi my name is ${s1} from ${s2}`

console.log(s4);
console.log(s5);

///////condition///////

let age = 30;
let s6 = `${s1} is ${age<18?"Minor":"Major"}`
console.log(s6);

////
