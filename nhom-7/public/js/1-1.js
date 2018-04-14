var signUpForm = document.getElementById("submit-signUp"); // sign up form
var newUserInfo = document.getElementById("signUp-info"); // new user information
// var signUpBtn = document.getElementById("signUp-btn");
var existed = true; // check if this user existed
// fix some carousel components' classes

mainEvent();

function mainEvent() {
    //event
    $(signUpForm).submit(function (event) {
        if (existed) event.preventDefault();
        if (checkMatchinguser()) {
            return handleMatchingUser();
        }
        existed = false;
    });
    $(newUserInfo.children).keypress(function () {
        if (newUserInfo.children.length === 4) {
            $(newUserInfo.children).last().remove();
        }
    })
}

// handle matching user
function handleMatchingUser() {
    if (newUserInfo.children.length < 4) {
        $(newUserInfo).append("<p class='font-weight-bold text-center text-danger m-0 mt-3'>" +
            "Your user name or email is used.</p>");
    }
}

// check matching username and email
function checkMatchinguser() {
    var newUser = {
        name: newUserInfo.children[0].value,
        email: newUserInfo.children[1].value
    };
    for (var i = 0; i < userdata.length; i++) {
        if (userdata[i].username === newUser.name ||
            userdata[i].email === newUser.email ||
            newUser.name.includes("@"))
            return true;
    }
    return false;
}