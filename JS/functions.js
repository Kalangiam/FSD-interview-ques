//Named function

function add(a,b,c){
    return a + b + c
}

const addition = add(1,2,3)
console.log(addition)

//anonymous function

const add = function(a,b,c){
    return a + b + c
}

console.log(add(1,2,3))

//IIFE

(function(a,b,c){
    console.log(a + b + c)
})(1,2,3)

//arrow function

const add = (a,b,c) => {
    return a + b + c
}

console.log(add(1,2,3))

// higer order function
//map
var arr = [1,2,3,4];
var result = arr.map((num)=>num*10);
console.log(result)

//filter
var arr1 = [1,2,3,4,5,6,7,8,9,10];
var result = arr1.filter((num)=>num > 5);
console.log(result)

//reduce
var arr2 = [1,2,3,4,5,6,7];
var result = arr2.reduce((num,num1)=>num*num1);
console.log(result)

var arr3 = [10,50,5,15,37,125];
var asc = arr3.sort((num1,num2)=>num1-num2);  
console.log(asc)
var des = arr3.sort((num1,num2)=>num2-num1);
console.log(des)

//find
var arr4 = [0,1,2,3,4,5,6,7,8,9,10];
var result = arr4.find((num)=>num < 5);
console.log(result)