var magicians = ["Harry", "Ron", "Hermoine"];
function make_great(magicians) {
    var greatMagicians = [];
    magicians.forEach(function (magician) {
        greatMagicians.push("".concat(magician, " the Great"));
    });
    return greatMagicians;
}
var greatMagicians = make_great(magicians.slice());
console.log("Original :");
console.log(magicians);
console.log("Great magicians:");
console.log(greatMagicians);
