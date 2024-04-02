var guests = ["Tayyaba", "Anabia", "ILsa", "Ayesha", "Rabia", "Laiba"];
while (guests.length > 2) {
    var guestremoved = guests.pop();
    console.log("Hey Sorry, ".concat(guestremoved, " I can't invite you to dinner"));
}
guests.forEach(function (lasttwo) {
    console.log("Hey ".concat(lasttwo, " you are still invited to dinner"));
});
guests.pop();
guests.pop();
console.log("Empty list", guests);
