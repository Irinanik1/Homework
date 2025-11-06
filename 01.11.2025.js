 function power(base, exponent) {
  return Math.pow(base, exponent);
}
let result = power(5,3); 
console.log(result);

function power2 (x,y)
{
let result=1;
for (let i=0; i<y; i++) 
{
let sum =0;

for (let j=0; j<x; j++) 
    
    {
sum=sum + result;
}
result=sum //збереження нового результату
}
return result;
}

console.log (power2(6,4));// 1296
 




function power (x,y) 
{
let result=1; 
//при мінусовій ступені
if (y<0)
 {
y=-y; //в позитивну ступень

for (let i =0; i<y;i++) 
    {
    result*=x;
}
result=1/result; //  зворотнє значення
}
//якщо ступень позитивна
else{
 
  for (let i =0; i<y;i++) //повторення циклу "y"
  { 
    result = result*x
}
}
   return result 
}

console.log (power(6,-2));
console.log (power (6,4)); 


