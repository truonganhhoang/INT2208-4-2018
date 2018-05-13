/*
    nhieu case xay ra cung mot bieu thuc xu li;
    gia tri cua case co the la string
    neu khong dung break thi cac bieu thuc case sau deu chay khong quan tam toi gia tri
    trong bieu thuc case
 */


a = 3;
switch (a) {
    case "sad":
        alert("string cung dung duoc");
    case true:
        alert("bieu thuc true");
    case 3:
        alert("nhieu case chung mot bieu thuc xu li");
    case 4:
        alert("this is impossible");
        document.writeln("khong hieu tai sao no co the xuat hien");
    default: document.writeln("khong su dung break");
}

// con lai thi khong co gi dac sac ca