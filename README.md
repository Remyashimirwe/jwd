# 📘 JavaScript Strings and Loops Study Guide

This project contains examples and explanations of important JavaScript
String methods and loop statements including while, do...while, and for
loops with if conditions.

------------------------------------------------------------------------

## 📌 String Methods Covered

### 🔤 Basic String Methods

  Method          Description
  --------------- ---------------------------------------------
  length          Returns number of characters
  charAt()        Returns character at index
  charCodeAt()    Returns UTF-16 character code
  codePointAt()   Returns Unicode code point
  at()            Returns character (supports negative index)
  concat()        Combines strings
  slice()         Extracts part of string
  substring()     Extracts part of string
  substr()        Extracts part (deprecated)
  toUpperCase()   Converts to uppercase
  toLowerCase()   Converts to lowercase

------------------------------------------------------------------------

### ✂️ Whitespace Methods

  Method        Description
  ------------- --------------------------------
  trim()        Removes spaces from both sides
  trimStart()   Removes spaces from start
  trimEnd()     Removes spaces from end

------------------------------------------------------------------------

### 📏 Padding & Repeating

  Method       Description
  ------------ -------------------------------
  padStart()   Pads beginning of string
  padEnd()     Pads end of string
  repeat()     Repeats string multiple times

------------------------------------------------------------------------

### 🔄 Replace & Split

  Method         Description
  -------------- ----------------------------
  replace()      Replaces first match
  replaceAll()   Replaces all matches
  split()        Converts string into array

------------------------------------------------------------------------

## 🔁 Loop Statements

### 1️⃣ While Loop

``` javascript
let i = 1;

while (i <= 5) {
  console.log(i);
  i++;
}
```

------------------------------------------------------------------------

### 2️⃣ Do...While Loop

``` javascript
let i = 1;

do {
  console.log(i);
  i++;
} while (i <= 5);
```

------------------------------------------------------------------------

### 3️⃣ For Loop with If Condition

Example: Print even numbers from 1 to 10

``` javascript
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
```

------------------------------------------------------------------------

## 🌍 Real-World Practice Problems

-   Student grading system (Pass/Fail)
-   Bank transaction filter (Deposit/Withdrawal)
-   Password strength checker
-   Shopping discount calculator
-   Count vowels in a name
-   Find largest number in array

------------------------------------------------------------------------

## 🎯 Purpose

This project helps beginners:

-   Understand JavaScript string manipulation
-   Practice loops and conditions
-   Build logical thinking with real-world problems

------------------------------------------------------------------------

## 🚀 How to Run

1.  Install Node.js or use browser console.
2.  Copy the examples into a `.js` file.
3.  Run using:

```{=html}
<!-- -->
```
    node filename.js

Or open browser → Right Click → Inspect → Console.

------------------------------------------------------------------------

## 📚 Author

Study Practice Project -- JavaScript Fundamentals

### 🛒 1️⃣ Shopping Cart System
You are building a small shopping cart for an online store.
const cart = ["Laptop", "Mouse", "Keyboard", "Monitor"];

Questions:
Display all products in the cart using a loop.


Add "Headphones" to the cart.


Remove the last item.


Show how many products are in the cart.


Display the first and last product.


👉 Bonus: Convert the cart into a comma-separated string.

### Student Score Analyzer
const scores = [85, 92, 78, 90, 88];
#### use foreach or loop
Questions: 
Find the highest score.
			
Find the lowest score.


Calculate the average score.


Check if score 90 exists in the array.


Sort the scores from highest to lowest.


👉 Bonus: Count how many students passed (pass mark = 80).
### Online Store Basket
const basket = ["Phone", "Charger", "Case", "Power Bank"];

Tasks:

Print each item using a for loop.

Insert "Earphones" into the basket.

Delete the first item.

Display the number of items.

Show the middle item.

Arrange items A → Z.

Arrange items Z → A.

Check if "Charger" is present.

Get the position of "Case".

Convert the basket into a single string using ", "
### Employee Management (Mixed Data Types)
```js 
const employees = [
  { name: "Watch" price: 500 },
  { name: "Jane", salary: 700 },
  { name: "Mike", salary: 600 }
]; 
```

Questions:
Loop and display employee names.


Find the employee with the highest salary.


Increase everyone's salary by 100.


Calculate total salary expense.


Add a new employee object.

# REAL LIFE PROJECTS 
You are working for a retail electronics store. The store sells items like laptops, keyboards, monitors, and accessories. You have been tasked with managing the product inventory for the store. This includes tracking stock quantities, prices, and total inventory value.

Data Challenge:

Each product has a name, price, and quantity in stock.

Some products may be added or removed over time.

The store manager wants to know which products are most expensive, which have the highest stock, and the total inventory value for financial reporting.

Tasks/Questions:

Display all product names to get a quick overview of what’s in the store.

Find the product with the highest price to identify premium items.

Increase the quantity of every product (e.g., after a new shipment arrives).

Calculate total inventory value (price × quantity) to understand the store’s total asset value.

Add a new product to the inventory when the store acquires new items.

Sort products by quantity from highest to lowest to prioritize restocking or sales.





