const cart = ["laptop", "Mouse", "Keyboard", "Monitor"];
const output = document.getElementById("cart");
//add the element
cart.push("Headphones");
//display the the cart
output.innerHTML += "<h2>Product in cart</h2>";
for (let i = 0; i < cart.length; i++) {
  output.innerHTML += cart[i] + "<br>";
}
// remove the element but the last one
cart.pop();
// length
size = cart.length;
document.getElementById("length").innerHTML += "<h3>length of the cart</h3>";
document.getElementById("length").innerHTML += size;
// dislplay last
document.getElementById("elem").innerHTML += "<p>this the first product</p>";
document.getElementById("elem").innerHTML += cart[0];
document.getElementById("elem").innerHTML += "<p>this the last product</p>";
document.getElementById("elem").innerHTML += cart[cart.length - 1];
