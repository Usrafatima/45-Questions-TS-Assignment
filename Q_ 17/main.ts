let guests = ["Tayyaba", "Anabia", "ILsa", "Ayesha", "Rabia", "Laiba"];
while (guests.length > 2) {
    let guestremoved = guests.pop();
    console.log(`Hey Sorry, ${guestremoved} I can't invite you to dinner`);
}
guests.forEach(lasttwo => {
    console.log(`Hey ${lasttwo} you are still invited to dinner`)
    
});
guests.pop()
guests.pop()
console.log("Empty list",guests);