let current_users = ["Tony", "Mike", "Tom", "Nancy"];
let new_users = ["John", "Mike", "Peter", "Nancy"];

new_users.forEach(new_user => {
    if(current_users.some(current_user => current_user.toLowerCase() === new_user.toLowerCase())) {
        console.log("Username already exists:", new_user);
    } else {
        console.log("Username is available:", new_user);
    }
});
