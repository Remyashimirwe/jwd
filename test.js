const dis = document.getElementById("display");
product = [{name: "remy", age: 15}]
function sorti(){
    product.sort()
    product.reverse()
    dis.innerHTML = product
}