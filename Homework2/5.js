var r = 15; // радіус
var Pi = 3.1415; // число Пі
var S = Pi * r * r; // площа круга
console.log("Площа круга з радіусом " + r + " дорівнює " + S);


var services = {
"стрижка": "60 грн",
"гоління": "80 грн",
"Миття голови": "100 грн",
price:function () {
    let total =0;
    for (let key in services) {
        if (typeof services[key] ==="string" && services[key].includes ("грн")) {   


