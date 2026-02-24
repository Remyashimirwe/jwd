// regular expression : //regex /rgexp
// /pattern/modifiers
//i 
// literal notation
const pattern = /hello/i
// rgexp objext
const patterns = new RegExp("hello", "i") 
//using regex with string 
/* - march()
 - replace()
 -search()
 - test()
 */
//example 
let text = "welcome to the code of the world !!"
result = text.match(/welcome/.test(text))
console.log(result)
// example replace()
let replace = text.replace(/code/gi , "Magic")
console.log(replace)
// example search()
let search = text.search(/world/)
console.log(search)
// example to test()
let text2 = "Hello world";
let pattern1= /t/g;
let result2 = pattern1.test(text2)
console.log(result2)
//ignore_case i
let pattern2 = /code/i
console.log(pattern2.test(text))
//global g
let pattern3 = /e/g
console.log(pattern3.test(text))
// multi_line ^ and $ works per line 
sext3 = "world\nhello";
let pattern4 = /$world/
console.log(pattern4.test(sext3))
const regex = /^Hello/;
const text3 = "Hello world\nHello again";

console.log(regex.test(text3)); 
// regex meta characters 
// \d matches digit
// \D matches non-digit 
// \w matches word
// \W matches non-word
// \s matches any space 
// \xhh matches hexadecimal 
const food = ["mango199%!", "orange", "banana12",
     "welcome to the javascript course",
      "today it will rain so remembe the umbrella"]
for(let i=0; i<food.length; i++){
    const pattern = /\x6F/g
    let result = food[i].match(pattern)
    console.log(result)
}