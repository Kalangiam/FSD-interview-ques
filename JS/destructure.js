//copy by value
var a = 10;
var b = a;
b = 5;
console.log(a);
console.log(b);

//copy by reference
var arr1 = [1,2,3];
var arr2 = arr1;
arr2.push(4);

console.log(arr1);
console.log(arr2)

//accessing the array 
var a =  [1,2,3,45,6];

console.log(a[3]) //index

//accessing the object 
var  b = {
    name:"dinesh",
    age:"30"
}

console.log(b.name);  //dot
console.log(b["age"]) //box

//Destructure array

var animals =  ["lion","tiger","dog","cat"];

// var pet = animals[2];
// var pet1 = animals[3];
// var king = animals[0];
// var king1 = animals[1];

var [king,king1,pet,pet1] = animals;

console.log(king)

//Destructure object

var student = {
    name :"Karthick",
    age:"35",
    address:"vellore"
}
var {name, age, address} = student


console.log(age)
