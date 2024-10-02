"use strict"
/*En este ejercicio, tendrán total libertad para elegir la problemática y la mejor solución. Cada grupo podrá decidir su propio enfoque y desarrollar el software según sus criterios.*/

let num1 = 0;
let num2 = 1;
let r;
let limite = parseInt(prompt("Ingrese el limite para la sucesión"))

while(num1<=limite){
    r = num1+num2;
    console.log(num1);
    
    num1=num2;
    num2=r;
}