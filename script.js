const billInput = document.querySelector("#billInput");
const tip = document.querySelectorAll(".tip");
const totalTip = document.getElementById("totalTip");
const custom = document.getElementById("custom");
const numberOfPeople = document.getElementById("people-input");
const totalAmount = document.querySelector("#totalAmount");

let tipValue = 0;
let people = 1;
let tipPercent = 0;

tip.forEach(function(val){
    val.addEventListener("click", calculateTip);
})

function calculateTip(event){
    if(custom.value !== ""){
        tipPercent = Number(custom.value);
    }else{
        tipPercent = (event.target.innerHTML).replace("%", "");
    }
    tipValue = (tipPercent/100) * billInput.value;
    totalTip.innerHTML = tipValue;
    totalAmt();
}

custom.addEventListener("input", calculateTip);

billInput.addEventListener("input", totalAmt);

numberOfPeople.addEventListener("input", totalAmt);

function totalAmt(){
    people = Number(numberOfPeople.value);

    if(people === "" || people === 0){
        people = 1;
    }
    let total = (Number(billInput.value) + tipValue)/people;
    totalAmount.innerHTML = "$" +total;
}

function reset(){
    billInput.value = ""
    custom.value = ""
    numberOfPeople.value = ""
    
    totalTip.innerHTML = "$0.00";
    totalAmount.innerHTML = "$0.00";
}
