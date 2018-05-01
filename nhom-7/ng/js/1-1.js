var signUpBtn = document.getElementById("submit-signUp"); // sign up form
var newUserInfo = document.getElementById("signUp-info"); // new user information
var usersData = getUserDataFromStorage() ? getUserDataFromStorage() : []; // users data in local storage

mainEvent();

function mainEvent() {
    //event
    signUpBtn.addEventListener('submit', function (event) {
        event.preventDefault();
        addUserToData();
    });

    $(newUserInfo.children).keypress(function () {
        if (newUserInfo.children.length === 4) {
            $(newUserInfo.children).last().remove();
        }
    })
}

// add new user to data
function addUserToData() {
    var user = {
        name: newUserInfo.children[0].value,
        email: newUserInfo.children[1].value,
        password: newUserInfo.children[2].value
    };
    if (user.name && user.email && user.password.length >= 6) {
        // check matching users
        if (checkMatchinguser(user)) {
            usersData.push(user);
            addUserDataToStorage();
            window.location.href = "2.html";
        } else {
            handleMatchingUser();
        }
    }
}

// handle matching user
function handleMatchingUser() {
    if (newUserInfo.children.length < 4) {
        $(newUserInfo).append("<p class='font-weight-bold text-center text-danger m-0 mt-3'>" +
            "Your user name or email is used.</p>");
    }
}

// check matching username and email
function checkMatchinguser(newUser) {
    for (var i = 0; i < usersData.length; i++) {
        if (usersData[i].name === newUser.name ||
            usersData[i].email === newUser.email)
            return false;
    }
    return true;
}

// add user info to storage
function addUserDataToStorage() {
    localStorage.setItem("users", JSON.stringify(usersData));
}

// get user data from storage
function getUserDataFromStorage() {
    return JSON.parse(localStorage.getItem('users'))
}