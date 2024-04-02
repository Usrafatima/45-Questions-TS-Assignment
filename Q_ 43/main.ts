let magicians: string[] = ["Harry", "Ron", "Hermoine"];

function make_great(magicians: string[]): string[] {
    let greatMagicians = [];
    magicians.forEach(magician => {
        greatMagicians.push(`${magician} the Great`);
    });
    return greatMagicians;
}

let greatMagicians = make_great(magicians.slice()); 
console.log("Original :");
console.log(magicians); 
console.log("Great magicians:");
console.log(greatMagicians);