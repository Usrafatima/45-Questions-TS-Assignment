let guests = ["ILsa", "Ayesha","Zulaikha"];
guests.splice (2,2, "Rabia");
guests.forEach(guest =>{
    console.log(`${guest},would you like to join us for dinner?`);
})
console.log("Good news, we found a big table for dinner");

guests.length
console.log(` We are inviting ${guests.length} peopele to dinner`);