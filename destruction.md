# **LECTURER PREPARATION GUIDE: JavaScript Destructuring Assignment**

## **1. Introduction**
Destructuring is a concise JavaScript syntax that allows you to **unpack values** from arrays, objects, strings, maps, and other iterables into variables.  
It improves readability and reduces repetitive code.

---

# **2. Object Destructuring**

### **Basic Syntax**
```js
let { firstName, lastName } = person;
```

### **Example**
```js
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50
};

let { firstName, lastName } = person;
```

### **Key Teaching Points**
- Order **does not matter**.
- Variable names must match property names.
- The original object remains unchanged (non‑destructive).

### **Example: Order Doesn’t Matter**
```js
let { lastName, firstName } = person;
```

---

# **3. Default Values**
Use default values when a property might be missing.

```js
let { firstName, lastName, country = "US" } = person;
```

---

# **4. Property Aliasing**
Rename a property while destructuring.

```js
let { lastName: name } = person;
```

Explain:  
- `lastName` is the property  
- `name` is the new variable

---

# **5. String Destructuring**
Strings are iterable, so you can unpack characters.

```js
let name = "W3Schools";
let [a1, a2, a3, a4, a5] = name;
```

---

# **6. Array Destructuring**

### **Basic Example**
```js
const fruits = ["Bananas", "Oranges", "Apples", "Mangos"];
let [fruit1, fruit2] = fruits;
```

### **Skipping Values**
```js
let [fruit1, , , fruit2] = fruits;
```

### **Destructuring by Index**
```js
let { [0]: fruit1, [1]: fruit2 } = fruits;
```

---

# **7. Rest Operator in Destructuring**
Collect remaining values into an array.

```js
const numbers = [10, 20, 30, 40, 50, 60, 70];
const [a, b, ...rest] = numbers;
```

---

# **8. Destructuring Maps**
Maps return `[key, value]` pairs, perfect for destructuring in loops.

```js
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

for (const [key, value] of fruits) {
  console.log(key + " is " + value);
}
```

---

# **9. Swapping Variables**
A classic destructuring trick.

```js
let firstName = "John";
let lastName = "Doe";

[firstName, lastName] = [lastName, firstName];
```

---

# **10. Teaching Strategy for the Classroom**

### **A. Start with a simple question**
“What does destructuring help us avoid?”  
→ Repetitive code like `person.firstName`, `person.lastName`, etc.

### **B. Move from objects → arrays → advanced use cases**
This mirrors how students naturally learn.

### **C. Use live coding**
Show how destructuring reduces code and improves readability.

### **D. Give students small exercises**
Examples:
- Extract only the `age` from a person object.
- Skip the second item in an array.
- Swap two numbers.
- Extract the first three characters of a string.

### **E. Reinforce the idea of non‑destructive behavior**
The original data structure is never modified.

---

# **11. Quick Summary Slide (for your lecture)**

- Extract values from objects/arrays easily  
- Order matters for arrays, not for objects  
- Supports default values  
- Supports renaming (aliasing)  
- Works with strings, maps, and any iterable  
- Rest operator collects remaining values  
- Can swap variables elegantly  
# **🔥 PRACTICAL DESTRUCTURING EXERCISES**

---

# **1. Extract Only What You Need (Object Destructuring)**

### **Task:**  
Extract `title` and `price` from the product object.

### **Starter Code**
```js
const product = {
  id: 101,
  title: "Laptop",
  price: 1200,
  stock: 50
};

// Your code here
```

### **Expected Output**
```
Laptop 1200
```

---

# **2. Default Values in Destructuring**

### **Task:**  
Extract `name`, `age`, and `country` (default to `"Unknown"` if missing).

### **Starter Code**
```js
const user = {
  name: "Alice",
  age: 25
};

// Your code here
```

### **Expected Output**
```
Alice 25 Unknown
```

---

# **3. Rename Properties (Alias)**

### **Task:**  
Extract `firstName` as `fName` and `lastName` as `lName`.

### **Starter Code**
```js
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 40
};

// Your code here
```

### **Expected Output**
```
John Doe
```

---

# **4. Array Destructuring: Get First Two Items**

### **Task:**  
Extract the first two colors.

### **Starter Code**
```js
const colors = ["red", "green", "blue", "yellow"];

// Your code here
```

### **Expected Output**
```
red green
```

---

# **5. Skip Values in an Array**

### **Task:**  
Extract only `"blue"` from the array using skipping.

### **Starter Code**
```js
const colors = ["red", "green", "blue", "yellow"];

// Your code here
```

### **Expected Output**
```
blue
```

---

# **6. Rest Operator**

### **Task:**  
Extract the first number into `first`, and the rest into `others`.

### **Starter Code**
```js
const numbers = [10, 20, 30, 40, 50];

// Your code here
```

### **Expected Output**
```
10 [20, 30, 40, 50]
```

---

# **7. Swap Two Variables**

### **Task:**  
Swap the values of `a` and `b` using destructuring.

### **Starter Code**
```js
let a = 5;
let b = 10;

// Your code here
```

### **Expected Output**
```
10 5
```

---

# **8. Destructure Function Parameters**

### **Task:**  
Use destructuring inside the function parameter.

### **Starter Code**
```js
function showUser(user) {
  // Use destructuring here
}

showUser({ name: "Remy", role: "Instructor" });
```

### **Expected Output**
```
Name: Remy, Role: Instructor
```

---

# **9. Nested Object Destructuring**

### **Task:**  
Extract `city` and `country` from the nested object.

### **Starter Code**
```js
const profile = {
  name: "Sarah",
  location: {
    city: "Kigali",
    country: "Rwanda"
  }
};

// Your code here
```

### **Expected Output**
```
Kigali Rwanda
```

---

# **10. Destructuring in a Loop (Map)**

### **Task:**  
Loop through the map and print key + value.

### **Starter Code**
```js
const salaries = new Map([
  ["John", 500],
  ["Mary", 700],
  ["Peter", 600]
]);

// Your code here
```

### **Expected Output**
```
John earns 500
Mary earns 700
Peter earns 600
```


