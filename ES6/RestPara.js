//es5
// function sum (a,b){
// console.log(a+b);
// }
// sum (1,2,3,4,5);  // output is 3

//ES6
 function sum(...inputs){
     console.log(inputs);
 }
 sum(1,2,2,3,4,5);

function sum(...inputs){
    console.log(inputs);
    let total=0;
    for(let i of inputs){
     total +=i;
    }
    console.log(total);
}
sum(1,2,2,3,4,5);