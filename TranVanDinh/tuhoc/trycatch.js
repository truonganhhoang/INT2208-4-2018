/*
    dung de bat loi
    throw dung de nem loi
 */

try{
    b = 8;
    c = a/b;
    if(b == 0)
        throw "divi string";
}
catch (ex) {
    alert(ex);
}
finally {
    document.writeln("luon luon chay");
}