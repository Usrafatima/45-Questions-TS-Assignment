var current_users = ["Tony", "Mike", "Tom", "Nancy"];
var new_users = ["John", "Mike", "Peter", "Nancy"];
new_users.forEach(function (new_user) {
    if (current_users.some(function (current_user) { return current_user.toLowerCase() === new_user.toLowerCase(); })) {
        console.log("Username already exists:", new_user);
    }
    else {
        console.log("Username is available:", new_user);
    }
});
