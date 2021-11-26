//Es5
let arr1=[1,2,3];
let arr2= arr1;
arr2.push(4,5);
console.log(arr2);  //output is [1,2,3,4,5]
console.log(arr1); // same output [1,2,3,4,5]

//ES6 (replace copy)

let arrc1=[4,5,6];
let arrc2=[...arrc1,4,6];

console.log(arrc2);   //output is [4,5,6,4,6]
console.log(arrc1);   // output [4,5,6]