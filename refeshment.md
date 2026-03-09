##  **Project Goal**
Build a browser‑based **Smart Personal Dashboard** that demonstrates core JavaScript concepts, including:

- Operators  
- If conditions  
- Loops  
- Strings  
- Numbers  
- Functions  
- Objects  
- Scope  
- Dates  
- Temporal (optional)  
- Arrays  
- Sets  
- Maps  
- Iterations  
- Math  
- RegExp (optional)  
- Destructuring  
- Data Types  
- Errors (try/catch/throw)

This project helps you practice real‑world JavaScript while touching almost every topic in the JS fundamentals list.

---

# **1. Project Structure**

Create a folder named `dashboard_project` with the following files:

```
dashboard_project/
│── index.html
│── style.css
└── app.js
```

---

#  **2. Requirements Breakdown**

Below are the required features and the JavaScript concepts each one must demonstrate.

---

##  **A. Greeting Section**
**Concepts:** Dates, Strings, Functions, Conditions

### Requirements:
- Display a greeting message such as:
  - “Good Morning”
  - “Good Afternoon”
  - “Good Evening”
- The greeting must change based on the current time.
- Use a function to generate the greeting.

---

##  **B. Task Manager**
**Concepts:** Arrays, Objects, Loops, DOM, Errors

### Requirements:
- Provide an input box for entering a task.
- When the user clicks **Add Task**, the task should be:
  - validated (no empty tasks)
  - stored as an object `{ id, text }`
  - added to an array
- Display all tasks in a list.
- Use a loop to render tasks.
- Use `try/catch` to handle invalid input.

---

##  **C. Math Utility Box**
**Concepts:** Numbers, Operators, Functions, Arrays, Math object

### Requirements:
- Accept a comma‑separated list of numbers.
- Calculate and display:
  - Sum
  - Average
  - Maximum
  - Minimum
- Use array methods (`map`, `reduce`, spread operator).

---

## **D. User Settings**
**Concepts:** Sets, Maps, Destructuring, Objects

### Requirements:
- Create a Set of user preferences.
- Store user data in a Map.
- Use destructuring to extract values.
- Display a confirmation message.

---

## **E. Error Handling**
**Concepts:** try/catch/throw

### Requirements:
- Throw custom errors for:
  - Empty task input
  - Invalid number input
- Display error messages using `alert()`.

---

# **3. Styling Requirements (CSS)**

- Use simple, clean styling.
- Each section must have:
  - padding  
  - border  
  - rounded corners  
  - spacing between sections  

---

# **4. Testing Checklist**

Before submitting, verify:

### Greeting Section
- [ ] Greeting changes based on time  
- [ ] Function returns correct message  

### Task Manager
- [ ] Tasks add correctly  
- [ ] Empty input triggers an error  
- [ ] Tasks display in a list  
- [ ] Uses objects + arrays  

### Math Utility
- [ ] Handles valid numbers  
- [ ] Rejects invalid input  
- [ ] Calculates sum, avg, max, min  

### User Settings
- [ ] Uses Set  
- [ ] Uses Map  
- [ ] Uses destructuring  

### General
- [ ] No console errors  
- [ ] Code is clean and readable  