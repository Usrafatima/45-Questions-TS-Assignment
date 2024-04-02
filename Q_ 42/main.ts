let Magicians = ["Harry", "Ron", "Hermoine"]
function make_great(magicians: string[]) {
  for (let i = 0; i < magicians.length; i++) {
         magicians[i] = magicians[i] + " the Great";
   }
}

make_great (Magicians); 
console.log (Magicians);
