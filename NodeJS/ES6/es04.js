let nums = [10,20,30,40,50,60];

console.log(nums);


//... is a spread operator which is basically used to append the value
let anotherNums = [100,200,300,400,500, ...nums];
console.log(anotherNums);


//num2 is not another array but just refering/pointing to same memory
let num2 = nums;
num2.push(999);

console.log(num2);
console.log(nums);
console.log(num2===nums);

//[ 10, 20, 30, 40, 50, 60, 999 ]
// [ 10, 20, 30, 40, 50, 60, 999 ]



let p1={name: 'Mayur', email: 'mayur@ps.com'};
console.log(p1);


let p2 = {city: 'bengaluru', country:'india', ...p1};
console.log(p2);

let p3 = {...p1}
console.log(p3);

console.log(p3===p1);

