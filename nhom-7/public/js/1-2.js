// var loginBtn = document.getElementById("login-btn");
var matched = false;
var decks = $(".decks");

mainEvent1();

function mainEvent1() {
    // add events

    // check if user available
    $('#submit-login').submit(function (event) {
        if (!matched) {
            event.preventDefault();
            var userName = $(this).find('#username')[0].value;
            for (var i = 0; i < userdata.length; i++) {
                if (userName === userdata[i].email) {
                    $(this).find('#username')[0].value = userdata[i].username;
                }
            }
        }
        matched = true;
    });

    // add some classes in grid of decks
    $(decks).children()[0].addClass("offset-md-2 offset-lg-1")
    $(decks).children()[1].addClass("offset-md-1 offset-lg-0")
}