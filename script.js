const score=[85,92,78,90,88]
const output = document.getElementById("output")
text = "<ol>"
for(let i=0; i< score.length; i++){
    text += "<li>" +score[i] + "</li>"
}
text = "</ol>"
output.innerHTML = text



