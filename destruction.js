//destructuring in js
// objects syntax
// let { key1, key2} = valiablename
const person = {firstname: "Remy", lastname:"Ashimirwe", age: 27}
function welcome(){
    let {firstname: f, lastname: l, country = "Rwanda"} = person 
    document.getElementById("wel").innerHTML= `Welcome back ${f} ${l} and you can try the free trial today from ${country}`
}
let name = "Ashimirwe";
let [a1,a2,a3,a4,a5, ...rest] = name;
console.log(...rest)
// array
const fruits =["mango","cabbage", "orange"]
let [f1,...res]= fruits
console.log(`we have ${f1} and`, ...res)
// desctructuring on map
const fruit = new Map([
    ["apples", 500],
    ["orange", 300],
    ["bananas", 700]
])
for(const [key, values] of fruit){
    console.log(key + " costs "+ values)
}
let firstName = "John";
let lastName = "Doe";
[firstName, lastName] = [lastName, firstName];

console.log(firstName); 
console.log(lastName); 

