let guests = ["ILsa", "Ayesha","Zulaikha"];
guests.splice (1,1, "Rabia");
guests.forEach(guest =>{
    console.log(`${guest},would you like to join us for dinner?`);
})
console.log("Good news, we found a big table for dinner");