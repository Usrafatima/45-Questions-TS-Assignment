let guests =  ["Ilsa", "Zulaikha", "Ayesha"];
guests.unshift("Tayyaba");
guests.splice (1, 0, "Rabia");
guests.push("Laiba");
guests.forEach (guest => {
    console.log(`${guest} hey youre ivited for dinner`)
})
console.log("Sorry i can only invite two people for dinner" );