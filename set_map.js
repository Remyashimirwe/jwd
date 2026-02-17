// we are going to study about the set 
const set = new Set([1,2,3,4,5,6,6,6,6,6,])
console.log(set)
// set methods
// to add the data or values in set add()
const fruits = new Set()
fruits.add("apple");
fruits.add("mango");
fruits.add("banana")
// how to delete or remove value delete()
fruits.delete("mango")
console.log(fruits)
// method to check the values if it's exist in the set
console.log(fruits.has("mango"))
// method called clear() when you want to clean the set
//fruits.clear()
console.log(fruits)
// method that called size 
console.log(fruits.size)
// how to loop thought the set 
const numbers = new Set([1,2,3,10,40])
for(let number of numbers){
    console.log(number)
}
// set logic 
const arr = [1,2,3,4,34,4,5,6,5,56,6]
const unique = [...new Set(arr)];
console.log(arr)
console.log(unique)
// fast lookup
const ids = new Set([100,200,400])
x=ids.has(102)
console.log(x)
//intersection 
const a = [1,2,3,5]
const b = [89,2,12,3,56]
const setA = new Set(a)
const common = b.filter(x => setA.has(x))
console.log(common)
//weakSet
let user = {name: "king"}
const ws = new WeakSet();
ws.add(user)
console.log(ws.has(user))
console.log(ws)
//continue with the map
const map = new Map();
map.set("name", "remy")
map.set(1,"kamana")
map.set(true,"boolean key")
// looping in map
for(let [key] of map){
    console.log(key)
}
const num  = new Set();
for (let i=1; i<=100; i++){
    num.add(i);
}
console.log(num)


