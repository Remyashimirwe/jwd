function myfun(){
    const output = document.getElementById("demo");
    output.innerHTML = "";
    let input = document.getElementById("demo2").value;
    try{
        if(input.trim() == "") throw "empty input";

    }catch(e){
        console.log(e)
    }

}