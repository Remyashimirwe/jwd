const scores = [85,92,78,90,88]
const output = document.getElementById("output")
const high = document.getElementById("highest")
const low = document.getElementById("lowest")
const descend = document.getElementById("descending")
// first method
text = "<ul>"
for(let i=0; i< scores.length; i++){
    text += "<li>" +scores[i] + "</li>"
}
text += "</ul>"
output.innerHTML = text
//second method
output.innerHTML += "<h3>Student marks</h3>"
for(let i = 0; i < scores.length; i++  ){
    output.innerHTML += scores[i] + "<br>"
}
//highest score
let highest = scores[0]
for(let i= 0; i< scores.length; i++){
    if(scores[i] > highest){
        highest = scores[i]
    }
}
high.innerHTML = highest
console.log(highest)

//lowerest score
let lowest = scores[0]
for(let i=0; i< scores.length; i++ ){
    if(scores[i]<lowest ){
        lowest = scores[i]
    }
}
low.innerHTML = lowest
console .log(lowest)
//sorting
let score= [85,92,78,90,88]
score.sort()
score.reverse()
console.log(score)
descend.innerHTML = score
console.log(score)
let basket = ["phone","charger","case","power bank"]
for (let i=0; i<basket.length;i++)
    console.log(basket)

console.push("headphones")
console.log(basket)
for(let i=0; i <basket.length; i++){
if(basket[i] == "charger"){
    console.log("true")
}
}