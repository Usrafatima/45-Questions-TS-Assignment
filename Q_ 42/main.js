var Magicians = ["Harry", "Ron", "Hermoine"];
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
}
make_great(Magicians);
console.log(Magicians);
