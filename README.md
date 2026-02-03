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
