# JavaScript Sets & Maps -- Complete Guide

This guide covers: - Set - Set Methods - Set Logic & Real Use Cases -
WeakSet - Map - Map Methods - Map Logic & Real Use Cases - WeakMap -
Practical Exercises

------------------------------------------------------------------------

## 1️⃣ SET IN JAVASCRIPT

### What is a Set?

A Set is a special object that stores **unique values**. Duplicates are
automatically removed.

``` js
const set = new Set([1,2,3,3,4,4]);
console.log(set); // {1,2,3,4}
```

### Why Sets are useful

Use Set when you need: - Unique values - Fast lookup - Remove duplicates
from arrays

------------------------------------------------------------------------

## 2️⃣ SET METHODS

### add(value)

``` js
const fruits = new Set();
fruits.add("apple");
fruits.add("banana");
fruits.add("apple"); // ignored
```

### delete(value)

``` js
fruits.delete("banana");
```

### has(value)

``` js
fruits.has("apple"); // true
```

### clear()

``` js
fruits.clear();
```

### size

``` js
console.log(fruits.size);
```

------------------------------------------------------------------------

## 3️⃣ LOOPING THROUGH SET

``` js
const numbers = new Set([10,20,30]);
for (let num of numbers) {
  console.log(num);
}
```

------------------------------------------------------------------------

## 4️⃣ SET LOGIC (REAL USE CASES)

### Remove duplicates

``` js
const arr = [1,1,2,2,3,4,4];
const unique = [...new Set(arr)];
```

### Fast lookup

``` js
const ids = new Set([101,102,103]);
ids.has(102);
```

### Intersection

``` js
const a = [1,2,3];
const b = [2,3,4];
const setA = new Set(a);
const common = b.filter(x => setA.has(x));
```

------------------------------------------------------------------------

## 5️⃣ WEAKSET

-   Stores ONLY objects
-   Cannot be looped
-   Auto garbage collection

``` js
let user = {name:"Remy"};
const ws = new WeakSet();
ws.add(user);
ws.has(user);
```

Use cases: - Track logged users - Track DOM elements - Temporary object
tracking

------------------------------------------------------------------------

## 6️⃣ MAP IN JAVASCRIPT

Keys can be ANY type.

``` js
const map = new Map();
map.set("name","Remy");
map.set(1,"number key");
map.set(true,"boolean key");
```

------------------------------------------------------------------------

## 7️⃣ MAP METHODS

``` js
map.set("age",25);
map.get("name");
map.has("age");
map.delete("age");
map.size;
```

------------------------------------------------------------------------

## 8️⃣ LOOPING MAP

``` js
for (let [key,value] of map) {
  console.log(key,value);
}
```

------------------------------------------------------------------------

## 9️⃣ MAP LOGIC

### Word frequency

``` js
const words = ["apple","banana","apple","orange"];
const count = new Map();
for (let word of words) {
  count.set(word,(count.get(word) || 0) + 1);
}
```

### Users with IDs

``` js
const users = new Map();
users.set(1,{name:"Remy"});
users.set(2,{name:"John"});
```

### Object → Map

``` js
const obj = {a:1,b:2};
const map = new Map(Object.entries(obj));
```

------------------------------------------------------------------------

## 🔟 WEAKMAP

-   Keys must be objects
-   Not iterable
-   Used for private data

``` js
let user = {name:"Remy"};
const wm = new WeakMap();
wm.set(user,{logged:true});
wm.get(user);
```

------------------------------------------------------------------------

## ⚖️ NORMAL vs WEAK

  Feature                Set/Map   WeakSet/WeakMap
  ---------------------- --------- -----------------
  Stores primitives      ✅        ❌
  Iterable               ✅        ❌
  Garbage collected      ❌        ✅
  Keys must be objects   ❌        ✅

------------------------------------------------------------------------

## 🧪 PRACTICAL QUESTIONS

### EASY

1.  Remove duplicates → \["JS","Python","JS","Java","Python"\]
2.  Check duplicates → \[1,2,3,4,5,1\]
3.  Create Set numbers 1--100

### MEDIUM

4.  Intersection A=\[1,2,3,4\], B=\[3,4,5,6\]
5.  Count letters in "javascript"
6.  Students Map (ID → name)

### HARD

7.  Shopping cart using Map
8.  Logged users using WeakSet
9.  Private balances using WeakMap

------------------------------------------------------------------------

# Exercise 1 — Unique Emails

You receive a list of emails from a signup form.

## Remove duplicates.

const emails = [
  "remy@gmail.com",
  "john@gmail.com",
  "remy@gmail.com",
  "anna@gmail.com",
  "john@gmail.com"
];


## Expected:

["remy@gmail.com","john@gmail.com","anna@gmail.com"]

## Exercise 2 — Check Duplicate Names

Return true if array contains duplicates.

const names = ["Remy","Anna","John","Remy"];

## Exercise 3 — Unique Random Numbers

Generate 20 random numbers (1–50)
Store only unique numbers using Set.

## Exercise 4 — Remove vowels using Set

Remove vowels from string:

"javascript is amazing"


## Hint:

vowels = new Set(['a','e','i','o','u'])

## Exercise 5 — Find Unique Characters

Count how many unique letters exist in:

"programming"
