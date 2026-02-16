const dis = document.getElementById("display");
stock = [{name: "Monitor", price: 1500, quantity: 15},
    {name: "Keyboard", price: 1400, quantity: 19},
    {name: "mouse", price: 200, quantity: 18}];
function displayProduct(){
    dis.innerHTML = ""
    for(let i=0; i< stock.length; i++){
        const product = stock[i]
        inventoryvalue = product.price* product.quantity
       // console.log(inventoryvalue)
        const row = document.createElement("tr")
        row.innerHTML = `<td>${product.name}</td>
        <td>${product.price}</td>
        <td>${product.quantity}</td>
        <td>${product.inventoryvalue}</td>`
        dis.appendChild(row)
    }
    
}

