function sum(a,b,c){
    console.log(a+b+c);
}
var arrVal=[5,6,7];
sum(...arrVal);

//replace concat()
let arr1=[3,4,2,6,1];
let arr2=[7,8,9,5];
//arr1=arr1.concat(arr2);

 arr1=[...arr1, ...arr2];
console.log(arr1)