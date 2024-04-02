var guests = ["ILsa", "Ayesha", "Zulaikha"];
guests.splice(2, 2, "Rabia");
guests.forEach(function (guest) {
    console.log("".concat(guest, ",would you like to join us for dinner?"));
});
console.log("Good news, we found a big table for dinner");
guests.length;
console.log(" We are inviting ".concat(guests.length, " peopele to dinner"));
