
let names = ["Mayur", "Unmesh", "Kartik", "Gopal"]

// to get the first character 

let chars = names.map((value) => value.charAt(0));
console.log(chars);

// to check if value is present
let indexPosition = names.findIndex((value) => value === 'Kartik');
console.log("Value found @ " + indexPosition);

