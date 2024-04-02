var guests = ["Ilsa", "Zulaikha", "Ayesha"];
guests.unshift("Tayyaba");
guests.splice(1, 0, "Rabia");
guests.push("Laiba");
guests.forEach(function (guest) {
    console.log("".concat(guest, " hey youre ivited for dinner"));
});
console.log("Sorry i can only invite two people for dinner");
