var data = "input.txt";
var arr = [];
var count = 0;
function flip() {
    $('.card').toggleClass('flipped');
}
function change(){
	if(count >= 4) count = 0;
	else count++;
	$('.card .front').find("span").text(arr[count].word);
	$('.card .back').find("span").text(arr[count].mean);
}
function load(){
	//var reader = new FileReader();
	for(var i = 0; i < 5; i++){
		var ele = {
			word : ""+i,
			mean : ""+i+5
		};
		arr[i] = ele;
	}
	arr[0].word = "learn";
	arr[0].mean = "học";
	arr[1].word = "chicken";
	arr[1].mean = "gà";
	arr[2].word = "peach";
	arr[2].mean = "đào";
	arr[3].word = "sing";
	arr[3].mean = "hát";
	arr[4].word = "beautiful";
	arr[4].mean = "đẹp";
}

