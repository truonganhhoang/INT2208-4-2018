function average(numbers) {
    var sum = 0;
    for (var i = 0 ; i < numbers.length; i++) {
        sum += numbers[i];
    }
    console.log(Math.ceil(sum / numbers.length));
}

var scores = [90, 98, 89, 100, 100, 86, 94];
average(scores);

var scores2 = [40, 65, 77, 82, 80, 54, 73 , 63, 95, 49];

average(scores2);