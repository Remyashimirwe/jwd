
# 🟦 **1. ReferenceError Exercises**

### **Exercise 1**
What error will this code produce?
```js
console.log(a);
let a = 10;
```

### **Exercise 2**
Fix the code so it runs without errors:
```js
try {
  total = price + tax;
} catch (err) {
  console.log(err.name);
}
```

### **Exercise 3**
Write a `try…catch` that catches the error:
```js
let x = y + 5;
```

### **Exercise 4**
Explain why this produces a ReferenceError:
```js
let x = z;
let z = 3;
```

---

# 🟩 **2. TypeError Exercises**

### **Exercise 5**
Predict the error:
```js
let num = 10;
num.toUpperCase();
```

### **Exercise 6**
Fix the TypeError:
```js
let greet = "Hello";
greet();
```

### **Exercise 7**
Wrap this in a try–catch and print the error message:
```js
undefinedFunction();
```

### **Exercise 8**
Why does this produce a TypeError?
```js
let student = {};
student();
```

---

# 🟧 **3. RangeError Exercises**

### **Exercise 9**
What error occurs?
```js
new Array(-5);
```

### **Exercise 10**
Fix the code:
```js
let n = 3.14;
n.toPrecision(200);
```

### **Exercise 11**
Write a try–catch that catches the RangeError:
```js
let x = (123).toPrecision(500);
```

### **Exercise 12**
Explain why this is a RangeError:
```js
let arr = new Array(999999999999);
```

---

# 🟥 **4. URIError Exercises**

### **Exercise 13**
Predict the error:
```js
decodeURI("%%%");
```

### **Exercise 14**
Fix the code so it does not throw a URIError:
```js
decodeURIComponent("%");
```

### **Exercise 15**
Wrap this in try–catch and print the error name:
```js
decodeURI("%E0%A4%A");
```

### **Exercise 16**
Explain why this is invalid:
```js
encodeURI("\uD800");
```

---

# 🟪 **5. SyntaxError Exercises**

### **Exercise 17**
Identify the syntax error:
```js
let name = "John;
```

### **Exercise 18**
Correct the code:
```js
if (x > 5 {
  console.log("OK");
}
```

### **Exercise 19**
Why can’t this SyntaxError be caught by try–catch?
```js
try {
  let x = eval("5+");
} catch (err) {
  console.log(err.name);
}
```

### **Exercise 20**
Fix the syntax:
```js
function test( {
  return 1;
}
```

---

# 🟫 **6. EvalError Exercises (conceptual)**

### **Exercise 21**
Explain why modern JavaScript rarely throws EvalError.

### **Exercise 22**
What error will this produce?
```js
eval("let x = ;");
```

### **Exercise 23**
Rewrite this code **without using eval**:
```js
let result = eval("2 + 3");
```

### **Exercise 24**
Why is eval discouraged in production code?

---

# ⚫ **7. try–catch–finally Exercises**

### **Exercise 25**
Add a `finally` block that prints `"Done"`:
```js
try {
  let x = y + 1;
} catch (err) {
  console.log(err.name);
}
```

### **Exercise 26**
Write a try–catch that handles **any** error and prints `"Error occurred"`.

### **Exercise 27**
Predict the output:
```js
try {
  throw "Something went wrong";
} catch (err) {
  console.log(err);
} finally {
  console.log("Finished");
}
```

### **Exercise 28**
Fix the code so it catches the error:
```js
try 
  let x = 5 / 0;
catch (err) {
  console.log(err);
}
```

---

# 🟦 **8. Mixed Error Identification**

### **Exercise 29**
Identify the error type:
```js
let arr = new Array(-10);
```

### **Exercise 30**
Identify the error type:
```js
let x = "hello";
x();
``` 