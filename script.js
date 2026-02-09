const scores = [85,92,78,90,88]
const output = document.getElementById("output")
const high = document.getElementById("highest")
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



