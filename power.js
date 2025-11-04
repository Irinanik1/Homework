function power (x,y) 
{
let result=1; 
//якщо ступень мінусова
if (y<0)
 {
y=-y; // робимо ступінь позитивною

for (let i =0; i<y;i++) 
    {
    result*=x;
}
result=1/result; // беремо зворотнє значення
}
//якщо ступень позитивна
else{
 
  for (let i =0; i<y;i++) //повторення циклу "y"разів
  { 
    result = result*x
}
}
   return result 
}

console.log (power(6,-2));
console.log (power (6,4));


 



