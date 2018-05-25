// khả năng truy cập của biến trong javascript

//global scope

var glo = "tran van dinh";

// neu khai bao bien trong function khong co tu khoa var thi bien se la bien global
function demof() {
    glo1 = "dong doan";
}

glo = "tran dinh";
glo1 = "dep trai";

console.log(glo + ' ' + glo1);

/*
    local scope
    khai bao trong mot function;
    cac function khac khong co kha nang truy xuat hay sua doi
    tuy nhien van co gia tri ben ngoai function
        --> no block level scope
    neu co bien global cung ten thi bien global se duoc su dung ben ngoai function, bien local se duoc
    su dung ben trong function
 */

local = "rat xau trai";
function demof1() {
    var local = "rat dep trai";
    alert(local);
}

function demmo(){
    alert(local);
}

demof1();

alert(local);