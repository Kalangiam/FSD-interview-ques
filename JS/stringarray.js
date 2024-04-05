//primitive data types

var a = 10;
console.log(typeof(a)); //number

var b = 10.2;
console.log(typeof(b)); //number

var c;
console.log(typeof(c)); //undefined

var d = null;
console.log(typeof(d)); //object

var e = "hi";
console.log(typeof(e)); //string
 
var f = true;
console.log(typeof(f)); //boolean


//non-primitive data types

var arr = [1,"hi",true,10.3];
console.log(arr)
console.log(typeof(arr))

var obj = {
    name:"John",
    Nickname:["doe, mark"]
}
console.log(obj);
console.log(typeof(obj))

//string methods

var fruit = "applemango   "
console.log(fruit.length)
console.log(fruit.toUpperCase())
console.log(fruit.charAt(2));
console.log(fruit.substring(1,7)) // pplema
console.log(fruit.split('l'))
console.log(fruit.indexOf('a'))
console.log(fruit.replace('m','M'))
console.log(fruit.trim())  // removes the space at front and back 

//array method

var vegs = ["carrot","beetroot","brinjal"];
var fruits = ["apple,","banana"]
vegs.push("tomato","gabbage");
vegs.pop()
vegs.shift()
vegs.unshift("gabbage")

var joined = fruits.concat(vegs)
var sliced = vegs.slice(0, 2)
var spliced = vegs.splice(2, 1, "potato")



