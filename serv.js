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

