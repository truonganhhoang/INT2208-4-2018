/*
luu tru mot hay nhieu bien co lien quan toi nhau
js khong yeu cau cac bien co cung kieu du lieu
Array la kieu non-primitive
 */

var arr0 = ["tran van dinh", 16020885, new Date("2/16/1998"),"k61-CD"];

for (var i = 0; i < arr0.length; i ++)
    document.writeln(arr0[i]);
var arr1 = new Array();
arr1[0] = "spring";
arr1[1] = "summer";
arr1[2] = 'last' + ' ' + "autumn";
arr1[3] = "winter";

console.log(arr1);
document.writeln(arr1);
document.writeln('phia sau mot co gai');
document.writeln('lam sao de xuong dong');