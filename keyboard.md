### 1. Detect When the User Presses “Enter” to Submit
Scenario:  
There is an input field. Instead of clicking a button, the user should press Enter to submit.

Task:  
Write code that listens for keydown and checks if the key is "Enter"
### 2.Build a Simple Game Character Controller
Scenario:  
A character on the screen should jump when the user presses the spacebar, and crouch when they press Shift.

Task:  
Use keyboard events to trigger different actions based on the key pressed.
### 3. Show the Last Key Pressed on the Screen
Scenario:  
Every time the user presses a key, display the key name on the page.

Task:  
Use event.key to show the pressed key inside a <p> element.
### 4. Prevent Typing Certain Keys
Scenario:  
In a text field, the user should NOT be allowed to type numbers.

Task:  
Use keyboard events to detect numeric keys and prevent them.
### 5.Create a Virtual Piano
Scenario:  
Pressing keys like A, S, D, F should play different sounds.

Task:  
Use keydown to map keys to audio files.
### 6. Shortcut Keys for a Web App
Scenario:  
Pressing:

Ctrl + S -- saves

Ctrl + D --duplicates

Ctrl + Q --quits

Task:  
Detect combinations using event.ctrlKey and event.key
