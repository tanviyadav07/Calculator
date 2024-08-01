const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";

const calculate = (btnVlaue)=>{
    display.focus();
    if(btnVlaue === "=" && output !== ""){
        output=eval(output.replace("%", "/100"));
    } else if(btnVlaue ==="AC"){
        output="";
    } else if(btnVlaue === "DEL"){
        output = output.toString().slice(0, -1);
    } else{
        if(output === "" && specialChars.includes(btnVlaue)) return;
        output += btnVlaue;
    }
    display.value = output;
};

buttons.forEach((button)=>{
    button.addEventListener("click",(e)=>calculate(e.target.dataset.value));
});