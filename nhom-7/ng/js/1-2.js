var loginInfo = $('#login-info')[0];

mainEvent1();

function mainEvent1() {
    // add events

    $('#submit-login').submit(function (event) {
        event.preventDefault();
        var userName = $(this).find('#username')[0].value;
        var password = $(this).find('#password')[0].value;
        var found = false;
        usersData.forEach(function (user) {
            if ((user.name === userName || user.email === userName) &&
                    password === user.password) {
                window.location.href = '2.html';
                found = true;
            }
        });
        // hanlde if no user match
        if (!found) handleWrongUser();
    });

    $(loginInfo).children().keypress(function () {
        if ($(this).parent().children().length === 3) {
            $(this).parent().children().last().remove();
        }
    })
}

function handleWrongUser() {
    if (loginInfo.children.length < 3) {
        $(loginInfo).append('<p class="text-center text-danger font-weight-bold m-0 mt-3">' +
            'Your username or password is wrong, check that again!</p>');
    }
}