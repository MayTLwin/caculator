var tempNumber = 0;
var tempOperator="";
function display(output,isAppend = false) {
    const display = document.getElementById("result");
    let result = display.value;
    if (isAppend) {
     result += output;
}   else{
    result = output;
}
display.value = Number(result);
}

function numberClick(input){
    display(input.toString(), true);
}


function operatorClick(input){
    tempOperator = input;
    tempNumber  = Number(document.getElementById("result").value);
    display(0, false);

}

function clearClick(){
    display(0,false);
    tempOperator = "";
    tempNumber = 0;}

function equalClick(){
    const currentNumber=Number(document.getElementById("result").value);
    if (tempOperator === "+"){
        display(tempNumber + currentNumber,false);
    }
    else if(tempOperator === "-"){
        display(tempNumber - currentNumber,false);
    }
    else if(tempOperator === "x"){
        display(tempNumber * currentNumber,false);
    }
else{ display(tempNumber / currentNumber,false);}}