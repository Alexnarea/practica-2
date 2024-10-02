"use strict"
/*Verificación de Edad y Ingresos:
Para ser elegible para un subsidio, debes tener al menos 18 años y tus ingresos mensuales deben estar entre 500€ y 2000€. Escribe un programa que pregunte al usuario su edad y sus ingresos mensuales y muestre por pantalla si el usuario es elegible para el subsidio o no. (10p)
*/

let age = parseInt(prompt("Ingrese su edad: "));
let money = parseFloat(prompt("Registre sus ingresos mensuales"));

if(age >= 18 && money >= 500 && money <= 2000 ){
    alert("usted es elegido para el subsidio");
}else{
    alert("Usted no es elegido para el subsidio");
}