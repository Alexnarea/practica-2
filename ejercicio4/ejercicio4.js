"use strict"
/*Escribe un programa que pregunte al usuario el total de su compra y si tiene un código de descuento. Si el código es "DESCUENTO10", se aplicará un 10% de descuento. Si el código es "DESCUENTO20", se aplicará un 20% de descuento. Muestra el total después de aplicar el descuento, si corresponde, y un mensaje si el código no es válido. (10p)
*/

let totalPay = parseFloat(prompt("Ingrese el total de su compra"));
let discountCode = prompt("Ingrese su cupon de descuento");
let totalDiscount;

if(discountCode === "DESCUENTO10"){
    totalDiscount = totalPay * 0.90;
    alert("Se aplico un 10% de descuento en su compra");
    alert( "Total a pagar: $ " + totalDiscount.toFixed(2))
}else if (discountCode === "DESCUENTO20"){
    totalDiscount = totalPay * 0.80;
    alert("Se aplico un 20% de descuento en su compra");
    alert( "Total a pagar: $ " + totalDiscount.toFixed(2));
}else{
    alert("Codigo de descuento no valido");
    alert("Total a pagar: $" + totalPay.toFixed(2));
}