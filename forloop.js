const employees = [
  { name: "Watch", salary: 500 },
  { name: "Jane", salary: 700 },
  { name: "Mike", salary: 600 }
]; 

for(let i in employees){
    employees[i].salary += 100
    console.log(employees[i].salary)
}