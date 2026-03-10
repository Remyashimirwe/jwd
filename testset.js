const names = ["Remy", "Anna", "John", "Remy", "John"];
const seen = new Set()
const duplicates = new Set()
for (let name of names){
    if(seen.has(name)){
        duplicates.add(name)
    }else{
        seen.add(name)
    }
}
console.log(duplicates)