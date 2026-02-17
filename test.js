let store=[
     {name: "laptop", price: 500,Quantity:30},
     {name: "smartphone", price: 700,Quantity:39},
     {name: "keyboard", price: 600,Quantity:40},
    {name: "monitor", price: 800,Quantity:45}
];
highest= store[0].price;
high= store[0].Quantity;
total = 1
multiply = []
total_asset=0
console.log(store)
for (let i = 0; i < store.length; i++) {
    if (highest<store[i].price && high<store[i].Quantity) {
         //highest =store[i].price
         //high =store[i].Quantity
        high_product = store[i].name
        total = store[i].price * store[i].Quantity
       
    } 
}
for (let i = 0; i < store.length; i++) {
     store[i].Quantity += 100
     multiply[i]=store[i].price * store[i].Quantity
     total_asset += multiply[i]
     console.log(multiply[i])

    
}
console.log("the most expensive product with high stock: "+high_product)
console.log("the total invetory is : " +total)
console.log("our total asset is :"+total_asset)
//console.log("the highest is :"+highest);
//console.log("the highest is :"+high);
store.push({name:"smartwatch",price:1000,Quantity:50})
console.log(store)
store.sort()
console.log(store)
for (let i = 0; i < store.length; i++) {
   
    console.log(store[i].name)
}
const easy= ["js","python","js","java","python"]
console.log(set)
