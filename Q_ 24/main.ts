//Test with equality
let color = "Pink";
console.log("Is color != 'Pink'?");
console.log(color  != 'Pink');
//Test with inequality
let car = "honda";
console.log("Is car == 'honda'?");
console.log(car == 'honda');

//&&operator
let a  = 56;
let b = a > 50 && a < 60;
console.log(b);
//false
let c = 70;
let d = c < 20 && c > 50 ;
console.log(d);

//OR|| operator
//true
let  e = 80;
let f = e < 35 || e > 45;
console.log(f);
//false
let g = 80;
let h = g < 11 || g > 99;
console.log(h);

//Lower Case Function
let capitalCase = ("GOVERNER INITIATIVE");
let lowercapitalcase = capitalCase.toLowerCase();
console.log(lowercapitalcase);

let mixedwords = ("GoVeRnEr iNitIaTiVe");
let lowermixedwords = mixedwords.toLowerCase();
console.log(lowermixedwords)

//Array check
let seasons =["Winter", "Summer", "Autumn","Springs"];
let num = ("2 5 ,6");
console.log(Array.isArray(seasons));
console.log(Array.isArray(num));