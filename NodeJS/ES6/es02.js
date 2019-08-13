

//to show working of tags function


function myTag(string, p1, p2) {
    console.log("String " +string);
    console.log(p1, p2);
    console.log(arguments);
    return "return value from myTag"
}

let name = "Himanshu";
let age = 24;
let s1 = myTag `${name} is ${age} years old`;
console.log(s1);

/*
String , is , years old
Himanshu 24
{ '0': [ '', ' is ', ' years old' ], '1': 'Himanshu', '2': 24 }
return value from myTag
*/

function myTag1(string, ...args) {
    console.log(string);
    console.log(args);
    for(temp of args)
        console.log(temp);
        
}

myTag1 `${name} is ${age} years old`

/*
[ '', ' is ', ' years old' ]
[ 'Himanshu', 24 ]
Himanshu
24
*/