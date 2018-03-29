var signUpBtn = document.getElementById("submit-signUp"); // sign up button
var newUserInfo = document.getElementById("signUp-info"); // new user information
var usersData = [];

main();

function main() {
    //event
    signUpBtn.addEventListener('click', function () {
        addUserToData();
    })
}

// add new user to data
function addUserToData() {
    var user = {
        name: newUserInfo.children[0].value,
        email: newUserInfo.children[1].value,
        password: newUserInfo.children[2].value
    };
    if (user.name && user.email && user.password) {
        usersData = getUserDataFromStorage();
        if (!usersData) usersData = [];
        // check matching users
        // usersData.push(user);
        // addUserDataToStorage();
    }
}


// add user info to storage
function addUserDataToStorage() {
    localStorage.setItem("users", JSON.stringify(usersData));
}

// get user data from storage
function getUserDataFromStorage() {
    return JSON.parse(localStorage.getItem('users'))
}