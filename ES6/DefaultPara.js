// //ES5
// function mult(a,b){
//     console.log(a*b);
// }
// mult(4);  // o/p is NaN

//ES6
function mult=(a,b=4)=>{
    console.log(`the mult of two no is ${a*b}`);
};
mult(4);