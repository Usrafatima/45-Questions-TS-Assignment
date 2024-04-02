//Test with equality
var color = "Pink";
console.log("Is color != 'Pink'?");
console.log(color != 'Pink');
//Test with inequality
var car = "honda";
console.log("Is car == 'honda'?");
console.log(car == 'honda');
//&&operator
var a = 56;
var b = a > 50 && a < 60;
console.log(b);
//false
var c = 70;
var d = c < 20 && c > 50;
console.log(d);
//OR|| operator
//true
var e = 80;
var f = e < 35 || e > 45;
console.log(f);
//false
var g = 80;
var h = g < 11 || g > 99;
console.log(h);
//Lower Case Function
var capitalCase = ("GOVERNER INITIATIVE");
var lowercapitalcase = capitalCase.toLowerCase();
console.log(lowercapitalcase);
var mixedwords = ("GoVeRnEr iNitIaTiVe");
var lowermixedwords = mixedwords.toLowerCase();
console.log(lowermixedwords);
//Array check
var seasons = ["Winter", "Summer", "Autumn", "Springs"];
var num = ("2 5 ,6");
console.log(Array.isArray(seasons));
console.log(Array.isArray(num));
