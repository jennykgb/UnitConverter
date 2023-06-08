/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const mf=3.281;
const lg=0.264;
const kp=2.204;


const convert = document.getElementById("convert-btn");


const feet = document.getElementById("feet");
const meters = document.getElementById("meters");
const gallons = document.getElementById("gallons");
const liters = document.getElementById("liters");
const pounds = document.getElementById("pounds");
const kilos = document.getElementById("kilos");


function mtof(num){
    return num/mf;
    
}
function ftom(num){
    return num*mf;
}
function ltog(num){
    return num*lg;
}
function gtol(num){
    return num/lg;
}
function ktop(num){
    return num*kp;
}
function ptok(num){
    return num/kp;
}

convert.addEventListener("click", function(){
    
    const num = document.getElementById("num").value;
    console.log(num)
    
    for(let i=1; i<7; i++){
        let unit = document.getElementById(`initial${i}`);
        unit.textContent = num;
    }

    feet.textContent = mtof(num).toFixed(3);
    meters.textContent = ftom(num).toFixed(3);
    gallons.textContent = ltog(num).toFixed(3);
    liters.textContent = gtol(num).toFixed(3);
    pounds.textContent = ktop(num).toFixed(3);
    kilos.textContent = ptok(num).toFixed(3);
    
})