# JavaScript Sets & Maps -- Complete Guide

## Topics Covered

-   Set
-   WeakSet
-   Map
-   WeakMap
-   Methods, Logic, Exercises

------------------------------------------------------------------------

## SET

A Set stores **unique values**.

``` js
const set = new Set([1,2,2,3]);
```

### Methods

-   add()
-   delete()
-   has()
-   clear()
-   size

### Remove duplicates

``` js
const unique = [...new Set([1,1,2,3])];
```

------------------------------------------------------------------------

## WEAKSET

-   Only objects
-   Not iterable
-   Auto garbage collected

``` js
const ws = new WeakSet();
ws.add({name:"Remy"});
```

------------------------------------------------------------------------

## MAP

Stores key/value pairs with ANY type of keys.

``` js
const map = new Map();
map.set("name","Remy");
```

### Methods

-   set()
-   get()
-   has()
-   delete()
-   size

### Count words example

``` js
const words = ["apple","apple","banana"];
const count = new Map();
for (let w of words){
 count.set(w,(count.get(w)||0)+1);
}
```

------------------------------------------------------------------------

## WEAKMAP

-   Keys must be objects
-   Not iterable
-   Used for private data

``` js
const wm = new WeakMap();
wm.set(user,{logged:true});
```

------------------------------------------------------------------------

## PRACTICE QUESTIONS

### Easy

1.  Remove duplicates from array.
2.  Check if array has duplicates.
3.  Create Set numbers 1--100.

### Medium

4.  Intersection of arrays.
5.  Count letter frequency.
6.  Students Map.

### Hard

7.  Shopping cart using Map.
8.  Logged users WeakSet.
9.  Private balance WeakMap.

------------------------------------------------------------------------

Happy Coding 🚀
