// cu phap khai bao function
function sum(a, b) {
    return a + b;
}

// tat ca cac lenh phia sau len return bi loai bo
function sum0(a, b) {
    document.writeln("truoc lenh return");
    return a + b;
    document.writeln("sau lenh return");
}

// neu co 2 function trung nhau ten va tham so thi function sau ghi de function truoc
function sum(a, b){
    document.writeln("bi ghi de");
    return(a - b);
}

function dequy(n){
    if(n == 1) return 1;
    else return n*dequy(n - 1);
}

//anonymous function khi ta gan function cho mot bien
/*
khi dinh nghia mot function con trong 1 function to thi chi co the goi function con trong chinh
function to ay
 */
var af = function(a, b){
    function ae(a) {
        return a * 10;
    }
    document.writeln(ae(a) + b);
}


document.writeln(sum(9, 1));
document.writeln(sum0(10, 10));
document.writeln(dequy(6));
af(9, 8);