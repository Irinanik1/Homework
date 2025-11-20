var services = {
"стрижка": "60 грн",
"гоління": "80 грн",
"Миття голови": "100 грн",
price:function () {
    let total =0;
    for (let key in services) {
        if (typeof services[key] ==="string" && services[key].includes ("грн")) {
let cost = parseInt (services[key]);
total += cost;
        }
    }
    return total +"грн";
},
minPrice:function (){
    let prices =[];
    for (let key in services) {
      if (typeof services[key] ==="string" && services[key].includes ("грн")) {  
        prices.push(parseInt(services[key]));
    
    }
} 
return Math.min(...prices) + "грн";
},
maxPrice:function (){


    let prices =[];
    for (let key in services) {
      if (typeof services[key] ==="string" && services[key].includes ("грн")) {  
        prices.push(parseInt(services[key]));

    
    }
} 
return Math.max(...prices) + "грн";
},
set:function (name, price){
services[name] = price + "грн";    
}

};
services.set("Фарбування волосся",300);

console.log( services.price());
console.log( services.minPrice());
console.log(services.maxPrice());



/за допомогою регулярного виразу зробити відокремлення всіх слів із рядку.
function extractWords(text) {
    
        return text.match(/\b\w+\b/g);
}
//Необхідно за допомогою регулярних виразів зробити заміну всіх номерів телефонів на "XXX-XXX-XXXX" у рядку
function hidePhoneNumbers(text) {
    return text.replace(/\b\d{3}[-.]?\d{3}[-.]?\d{4}\b/g, "XXX-XXX-XXXX");
}

//Необхідно перевірити чи надані 2 email є валідними
function validateEmails(email1, email2) {
    return newFunction();

    function newFunction() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email1) && emailRegex.test(email2);
    }
}








