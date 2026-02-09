const cart = ["laptop", "Mouse", "Keyboard", "Monitor"];
const output = document.getElementById("cart");
cart.push("Headphones");

output.innerHTML += "<h2>Product in cart</h2>";
for (let i=0; i <cart.length; i++){
    output.innerHTML += cart[i] + "<br>"
}
cart.push("Headphones");
cart.pop()
size = cart.length
document.getElementById("length").innerHTML += "<h3>length of the cart</h3>"
document.getElementById("length").innerHTML += size


