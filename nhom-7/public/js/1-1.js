var signUpForm = document.getElementById("submit-signUp"); // sign up form
var newUserInfo = document.getElementById("signUp-info"); // new user information
// fix some carousel components' classes

mainEvent();

function mainEvent() {
    //event
    $(signUpForm).submit(function (event) {
        if (newUserInfo.children.length === 5) event.preventDefault();
    });

    // remove alert if user press key in input box
    $(newUserInfo.children).keypress(function () {
        if (checkMatchinguser()) {
            return handleMatchingUser();
        }if (newUserInfo.children.length === 5) {
            $(newUserInfo.children).last().remove();
        }
    })
}

// handle matching user
function handleMatchingUser() {
    if (newUserInfo.children.length < 5) {
        $(newUserInfo).append("<p class='font-weight-bold text-center text-danger m-0 mt-3'>" +
            "Your user name or email is used.</p>");
    }
}

// check matching username and email
function checkMatchinguser() {
    var newUser = {
        username: newUserInfo.children[1].value,
        email: newUserInfo.children[2].value
    };
    for (var i = 0; i < userdata.length; i++) {
        if (userdata[i].username === newUser.username ||
            userdata[i].email === newUser.email ||
            newUser.username.includes("@"))
            return true;
    }
    return false;
}