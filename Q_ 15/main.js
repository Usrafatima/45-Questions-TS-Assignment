var guests = ["ILsa", "Ayesha", "Zulaikha"];
guests.splice(1, 1, "Rabia");
guests.forEach(function (guest) {
    console.log("".concat(guest, ",would you like to join us for dinner?"));
});
console.log("Good news, we found a big table for dinner");
