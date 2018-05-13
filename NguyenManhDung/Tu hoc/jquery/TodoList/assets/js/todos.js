// check off specific todos by clicking
$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
});
// Click on X to delete todos
$("ul").on("click", "span", function (event) {
    $(this).parent().fadeOut(function () { // this refers to span element
        $(this).remove();                   // this refers to li element
    });
    event.stopPropagation(); // to stop event bubble out to its parents
});

$("input[type='text']").keypress(function (event) {
    if (event.which === 13) {
        // grabbing new todos text from input
        var todoText = $(this).val();
        $(this).val("");
        // create new li and add to ul
        $("ul").append("<li><span>X</span> " + todoText + "</li>")
    }
});