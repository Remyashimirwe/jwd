/* const food = ["rice", "igitoke", "potatoes"] /* array or list*/
/*const numbers =[12,123,4343,,6565];
const foods = {name: "matoke", cost: 100}; 
/* object */
/*date = Date()
numbers[0] = Date();
food[0] = "juice";
food[1] = "coffee"
console.log(food.length)
console.log(food[food.length -1]) /* to access the last element of the array */
/*console.log(numbers.sort()) /* sorting or arranging the array */
/*document.getElementById("output").innerHTML = numbers.toString(); /* output the element in string but in html*/
/*console.log(date);*/

/* using for loop method */
const names = ["remy", "emmy", "uwase", "benitha"];
text = "<ol>";
for(let i=0; i< names.length; i++){
    text += "<li>" + names[i] + "</li>"
    console.log(names[i]);
}
text += "</ol>";
document.getElementById("list").innerHTML = text;

/* using foreach function method */
item = "<ul>";
names.forEach(myfuction);
item += "</ul>"
document.getElementById("forc").innerHTML = item

function myfuction(value){
    item += "<li>" + value + "</li>"
}
names.push("Sandra");

names[7] = "kevin";
console.log(names)
const lakes = []
lakes [0] = "kivu"
console.log(lakes)
const marks = new Array(10,200,39438,6489);
console.log(marks.length)