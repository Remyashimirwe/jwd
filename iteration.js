// iteration in js
//it mean looping though the sequences of elements
//ex: array , string, map, set 
//type 4 iterating over the string 
///ex1
const word = "Hello World"
for( let i of word){
    if(i == "o"){
        console.log("found")
    }
}
console.log(word)
// iterating over an array
const arr = [10,20,40,50]
for(const ele of arr){
    console.log(ele)
}
//using forEach() 
console.log("------------------")
arr.forEach((ele) => {
    console.log(ele);
})
//arrow function 
//syntax 
/*() => {
    
}
*/
/* function addItems(a,b){
    console.log(`Hello ${a} and ${b}`)
}
a = prompt("Enter your name: ");
b = prompt("Enter your freind name: ");
result = addItems(a,b);
console.log(result)*/
// iterating over the Set()
console.log("----------")
const fruits =new Set(["apple", "mango", "banana"])
for (const fruit of fruits){
    console.log(fruit)
}

// practice
/* sum = 0
avg =0
const marks  = [100,20,30,40,50]
for(let i=0 ; i< marks.length;i++){
    sum += marks[i]
    avg = sum/5
}
console.log(avg)
*/
// iterating over a map()
console.log("-----------------")
const students = new Map([
    ["name", "Remy"],
    ["age", 22],
    ["gender","Male"]
]
);
// for all element in the map 
for(const [key,value] of students){
    console.log(key,value)
}
// for key only 
console.log("---getting the key only")
for (const key of students.values()){
    console.log(key)
}

/// count times
console.log("--------counting")
count = 0
const words = "my academic education"
for(const word of words){
    if(word == "a"){
        console.log(word)
    }
}
//console.log(count)

const nums = [2, 4, 6, 8, 10];
for (let num of nums){
    console.log(num * 3)
}
console.log("mixed")
const mixed = [1, 2, 5, 8, 11, 14];
even = []
for(let mix of mixed){
    if(mix % 2 == 0){
        even.push(mix)
    }
}
console.log(even)
